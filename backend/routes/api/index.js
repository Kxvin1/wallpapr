const router = require("express").Router();
const asyncHandler = require("express-async-handler");

// route imports
const sessionRouter = require("./session");
const usersRouter = require("./users");
const imagesRouter = require("./images");
const favoritesRouter = require("./favorites");
const profilesRouter = require("./profiles");

// router usage
router.use("/session", sessionRouter);
router.use("/users", usersRouter);
router.use("/images", imagesRouter);
router.use("/favorites", favoritesRouter);
router.use("/profiles", profilesRouter);

// To do routes:

// ? Reviews -- Get, Post, and Delete
// router.use('/reviews', reviewsRouter);

// ? Search -- Get
// router.use('/search', searchRouter);

// ? Members -- Get
// router.use('/members', membersRouter);
module.exports = router;
