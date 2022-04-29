const express = require("express");
const asyncHandler = require("express-async-handler");
const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");

const { Image, User, Favorite } = require("../../db/models");

const router = express.Router();

const validateImage = [
  check("imageURL")
    .exists({ checkFalsy: true })
    .isURL()
    .withMessage("The provided image URL is invalid."),
  handleValidationErrors,
];

// get images
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const images = await Image.findAll();
    res.json({ images });
  })
);

// post image
router.post(
  "/",
  validateImage,
  asyncHandler(async (req, res) => {
    const imageUpload = await Image.create(req.body);
    const image = await Image.findByPk(imageUpload.id, {
      include: [{ model: User }, { model: Favorite }],
    });
    res.json(image);
  })
);

// update image
router.put(
  "/:id(\\d+)",
  asyncHandler(async (req, res) => {
    await Image.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    const image = await Image.findByPk(req.params.id, {
      include: [{ model: User }, { model: Favorite }],
    });
    res.json(image);
  })
);

// delete image
router.delete(
  "/:id(\\d+)",
  asyncHandler(async (req, res) => {
    const image = await Image.findByPk(req.params.id);
    await image.destroy();
    res.status(202).end();
  })
);

// favorite counter updater
router.put(
  "/:id(\\d+)/favorites",
  asyncHandler(async (req, res) => {
    await Image.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    const image = await Image.findByPk(req.params.id);

    res.json(image);
  })
);

// add to favorites table with new count
router.post(
  "/:id(\\d+)/favorites",
  asyncHandler(async (req, res) => {
    const specificFavorite = await Favorite.create(req.body);
    res.json(specificFavorite);
  })
);

// delete from the favorites table
router.delete(
  "/:id(\\d+)/favorites",
  asyncHandler(async (req, res) => {
    const specificFavorite = await Favorite.findOne({
      where: {
        imageId: req.params.id,
        userId: req.body.userId,
      },
    });

    await specificFavorite.destroy();
    res.status(202).end();
  })
);

module.exports = router;
