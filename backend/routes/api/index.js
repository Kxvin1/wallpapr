const router = require("express").Router();
const asyncHandler = require("express-async-handler");

// route imports
const sessionRouter = require("./session");
const usersRouter = require("./users");
const imagesRouter = require("./images");
const favoritesRouter = require("./favorites");
const profilesRouter = require("./profiles");
const membersRouter = require("./members");

// router usage
router.use("/session", sessionRouter);
router.use("/users", usersRouter);
router.use("/images", imagesRouter);
router.use("/favorites", favoritesRouter);
router.use("/profiles", profilesRouter);
router.use("/members", membersRouter);

// To do routes:

// ? Reviews -- Get, Post, and Delete
// router.use('/reviews', reviewsRouter);

// ? Search -- Get
// router.use('/search', searchRouter);

module.exports = router;
