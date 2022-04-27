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

module.exports = router;
