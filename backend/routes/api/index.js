const router = require("express").Router();
const asyncHandler = require("express-async-handler");

// User model
const { User } = require("../../db/models");

// utils
const { setTokenCookie } = require("../../utils/auth.js");
const { restoreUser } = require("../../utils/auth.js");
const { requireAuth } = require("../../utils/auth.js");

module.exports = router;

// Test Routes Below (uncomment if want to test!)
// // test route (simple one)
// router.post("/test", function (req, res) {
//   res.json({ requestBody: req.body });
// });

// // test route (for set token cookie) -- this sets the token (in dev tools > application > "token")
// router.get(
//   "/set-token-cookie",
//   asyncHandler(async (_req, res) => {
//     const user = await User.findOne({
//       where: {
//         username: "Demo-lition",
//       },
//     });
//     setTokenCookie(res, user);
//     return res.json({ user });
//   })
// );

// // test route (for restore user) -- this restores the user if a token was set
// router.get("/restore-user", restoreUser, (req, res) => {
//   return res.json(req.user);
// });

// // test route (for require auth) -- if there is no session user, it will return an error
// // otherwise, it will return the session user's information
// router.get("/require-auth", requireAuth, (req, res) => {
//   return res.json(req.user);
// });
