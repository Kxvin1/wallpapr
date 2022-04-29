const express = require("express");
const asyncHandler = require("express-async-handler");

const { Image, User, Favorite } = require("../../db/models");

const router = express.Router();

router.get(
  "/:id(\\d+)",
  asyncHandler(async (req, res) => {
    const favorites = await Favorite.findAll({
      where: {
        userId: req.params.id,
      },
      include: [
        { model: Image, include: [{ model: User }, { model: Favorite }] },
      ],
    });

    const favoriteImages = favorites.map((favorite) => favorite.Image);
    res.json(favoriteImages);
  })
);

module.exports = router;
