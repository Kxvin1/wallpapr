const express = require("express");
const router = express.Router();
const apiRouter = require("./api");
// import apiRouter from nested api folder

// use routes
// all the URLs of the routes in the api router will be prefixed with /api
router.use("/api", apiRouter);

// Static routes
// Serve React build files in production
if (process.env.NODE_ENV === "production") {
  const path = require("path");
  // Serve the frontend's index.html file at the root route
  router.get("/", (req, res) => {
    res.cookie("XSRF-TOKEN", req.csrfToken());
    return res.sendFile(
      path.resolve(__dirname, "../../frontend", "build", "index.html")
    );
  });

  // Serve the static assets in the frontend's build folder
  router.use(express.static(path.resolve("../frontend/build")));

  // Serve the frontend's index.html file at all other routes NOT starting with /api
  router.get(/^(?!\/?api).*/, (req, res) => {
    res.cookie("XSRF-TOKEN", req.csrfToken());
    return res.sendFile(
      path.resolve(__dirname, "../../frontend", "build", "index.html")
    );
  });
}

router.get("/hello/world", function (req, res) {
  // setting a cookie on the response with the name of XSRF-TOKEN to the value of the csrfToken
  res.cookie("XSRF-TOKEN", req.csrfToken());
  // then we are sending the text 'hello world' as the response's body
  res.send("Hello World!");
});

// Add a XSRF-TOKEN cookie in development
if (process.env.NODE_ENV !== "production") {
  router.get("/api/csrf/restore", (req, res) => {
    res.cookie("XSRF-TOKEN", req.csrfToken());
    res.status(201).json({});
  });
}
module.exports = router;
