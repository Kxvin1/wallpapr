const express = require("express");

const router = express.Router();

const apiRouter = require("./api");
// import apiRouter from nested api folder

// use routes
// all the URLs of the routes in the api router will be prefixed with /api
router.use("/api", apiRouter);

router.get("/hello/world", function (req, res) {
  // setting a cookie on the response with the name of XSRF-TOKEN to the value of the csrfToken
  res.cookie("XSRF-TOKEN", req.csrfToken());
  // then we are sending the text 'hello world' as the response's body
  res.send("Hello World!");
});

module.exports = router;
