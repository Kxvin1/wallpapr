const express = require("express");
const asyncHandler = require("express-async-handler");
const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");

const { Comment, User } = require("../../db/models");

const router = express.Router();

const validateComment = [
  check("commentText")
    .exists({ checkFalsy: true })
    .withMessage("Comment cannot be empty.")
    .isLength({ max: 255 })
    .withMessage("Comment cannot be longer than 255 characters."),
  handleValidationErrors,
];

router.get(
  "/:uploaderId(\\d+)",
  asyncHandler(async (req, res) => {
    const allComments = await Comment.findAll({
      where: {
        uploaderId: req.params.uploaderId,
      },
      include: [{ model: User }],
    });
    res.json(allComments);
  })
);

router.post(
  "/",
  validateComment,
  asyncHandler(async (req, res) => {
    const { userId, memberId, commentText } = req.body;
    const newComment = await Comment.create({
      userId,
      uploaderId: memberId,
      commentText,
    });

    const comment = await Comment.findByPk(newComment.id, {
      include: [{ model: User }],
    });
    res.json({ comment });
  })
);

router.delete(
  "/:id(\\d+)",
  asyncHandler(async (req, res) => {
    const comment = await Comment.findByPk(req.params.id);
    await comment.destroy();
    res.status(202).end();
  })
);

module.exports = router;
