const express = require("express");
const asyncHandler = require("express-async-handler");

const { Image, User, Favorite } = require("../../db/models");

const router = express.Router();

router.get(
  "/:id(\\d+)",
  asyncHandler(async (req, res) => {
    const memberImages = await Image.findAll({
      where: {
        userId: req.params.id,
      },
      include: [{ model: User }, { model: Favorite }],
      order: [["createdAt", "DESC"]],
    });
    res.json(memberImages);
  })
);

module.exports = router;
