const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const csurf = require("csurf");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");
const path = require("path");

const { ValidationError } = require("sequelize");

// true if the env is in production by checking if env key is in the config file (backend/config/index.js)
const { environment } = require("./config");
const isProduction = environment === "production";

// initialize express
const app = express();

// middleware
app.use(morgan("dev"));
app.use(cookieParser());
app.use(express.json());

// security middleware
if (!isProduction) {
  // enable cors only in development
  app.use(cors());
}

// helmet helps set a variety of headers for better app security
app.use(
  helmet.crossOriginResourcePolicy({
    policy: "cross-origin",
    // This will allow images with URLs to render in deployment.
  })
);

// setup csrf token and create csrfToken method. configured to use cookies
app.use(
  csurf({
    cookie: {
      secure: isProduction,
      sameSite: isProduction && "Lax",
      httpOnly: true,
    },
  })
);

app.use(express.static(path.join(__dirname, "public")));

// routes
const routes = require("./routes");

// connect all routes
app.use(routes);

// Catch unhandled requests and forward to error handler.
app.use((_req, _res, next) => {
  const err = new Error("The requested resource couldn't be found.");
  err.title = "Resource Not Found";
  err.errors = ["The requested resource couldn't be found."];
  err.status = 404;
  next(err);
});

// Process sequelize errors
app.use((err, _req, _res, next) => {
  // check if error is a Sequelize error:
  if (err instanceof ValidationError) {
    err.errors = err.errors.map((e) => e.message);
    err.title = "Validation error";
  }
  next(err);
});

// Error formatter
app.use((err, _req, res, _next) => {
  res.status(err.status || 500);
  console.error(err);
  res.json({
    title: err.title || "Server Error",
    message: err.message,
    errors: err.errors,
    stack: isProduction ? null : err.stack,
  });
});

module.exports = app;
