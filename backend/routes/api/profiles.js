const express = require("express");
const asyncHandler = require("express-async-handler");
const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");

const { Profile, User } = require("../../db/models");

const router = express.Router();

const validateProfile = [
  check("fullName")
    .isLength({ max: 40 })
    .withMessage("Name cannot exceed 40 characters"),
  check("avatar")
    .exists({ checkFalsy: true })
    .withMessage("URL cannot be empty"),
  check("location")
    .isLength({ max: 50 })
    .withMessage("Location cannot exceed 50 characters"),
  check("biography")
    .isLength({ max: 100 })
    .withMessage("Biography cannot exceed 100 characters"),
  handleValidationErrors,
];

router.get(
  "/:id(\\d+)",
  asyncHandler(async (req, res) => {
    const userId = req.params.id;

    const profile = await Profile.findOne({
      where: {
        userId,
      },
      include: [{ model: User }],
    });

    res.json(profile);
  })
);

router.put(
  "/:id(\\d+)",
  validateProfile,
  asyncHandler(async (req, res) => {
    await Profile.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    const updatedProfile = await Profile.findByPk(req.params.id, {
      include: [{ model: User }],
    });

    res.json(updatedProfile);
  })
);

module.exports = router;
