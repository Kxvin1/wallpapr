const { Op } = require("sequelize");
const asyncHandler = require("express-async-handler");
const express = require("express");
const { Image, User } = require("../../db/models");

const router = express.Router();

router.get(
  "/:id",
  asyncHandler(async (req, res, next) => {
    const searchParams = req.params.id;

    try {
      const searchResults = await Image.findAll({
        where: {
          tags: { [Op.contains]: [searchParams] },
        },
        include: [{ model: User }],
      });

      res.status(201).json(searchResults);
    } catch (e) {
      next(e);
    }
  })
);

module.exports = router;
