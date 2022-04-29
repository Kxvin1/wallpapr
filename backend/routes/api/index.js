const router = require("express").Router();
const asyncHandler = require("express-async-handler");

const sessionRouter = require("./session");
const usersRouter = require("./users");

// User model
const { User } = require("../../db/models");

// utils
const { setTokenCookie } = require("../../utils/auth.js");
const { restoreUser } = require("../../utils/auth.js");
const { requireAuth } = require("../../utils/auth.js");

router.use("/session", sessionRouter);
router.use("/users", usersRouter);
// To do routes:

// ? Images -- Get, Post, Put, Delete ++ Put (update favorite count), Post (add to favorites table with favoriteCount), Delete (delete from favorites table)
// router.use('/images', imagesRouter);

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
