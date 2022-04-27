const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const csurf = require("csurf");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");

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

// routes
const routes = require("./routes");

// connect all routes
app.use(routes);

module.exports = app;
