const router = require("express").Router();
const asyncHandler = require("express-async-handler");

// route imports
const sessionRouter = require("./session");
const usersRouter = require("./users");
const imagesRouter = require("./images");

// router usage
router.use("/session", sessionRouter);
router.use("/users", usersRouter);
router.use("/images", imagesRouter);

// To do routes:

// ? Favorites -- Get
// router.use('/favorites', favoritesRouter);

// ? Profiles -- Get and Update(Put)
// router.use('/profiles', profilesRouter);

// ? Reviews -- Get, Post, and Delete
// router.use('/reviews', reviewsRouter);

// ? Search -- Get
// router.use('/search', searchRouter);

// ? Members -- unsure if need this, do it last
// router.use('/members', artistsRouter);
module.exports = router;
