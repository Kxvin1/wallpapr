"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Comments",
      [
        {
          userId: 4,
          uploaderId: 2,
          commentText: "impressed me on multiple levels.",
        },
        {
          userId: 2,
          uploaderId: 2,
          commentText:
            "Not able to tell you how happy I am with you. It's all good.",
        },
        {
          userId: 3,
          uploaderId: 2,
          commentText:
            "Stunning!!! i love them all , i wish i can these images framed!!",
        },
        {
          userId: 3,
          uploaderId: 1,
          commentText: "beautiful arts!",
        },
        {
          userId: 1,
          uploaderId: 2,
          commentText: "Love your landscape picture",
        },
        {
          userId: 1,
          uploaderId: 2,
          commentText: "Love your space picture",
        },
        {
          userId: 1,
          uploaderId: 2,
          commentText: "Love your scenic pictures",
        },
        {
          userId: 4,
          uploaderId: 1,
          commentText: "Love your artwork! Looking forward to seeing more.",
        },
        {
          userId: 2,
          uploaderId: 4,
          commentText: "Beautiful!",
        },
        {
          userId: 2,
          uploaderId: 3,
          commentText:
            "I was wondering if I could get any information on who the owner of this image is.  I would like to contact them.",
        },
        {
          userId: 2,
          uploaderId: 5,
          commentText: "your works are sooooo extraordinary!",
        },
        {
          userId: 1,
          uploaderId: 5,
          commentText: "your works are sooooo extraordinary!",
        },
        {
          userId: 3,
          uploaderId: 5,
          commentText: "your works are sooooo extraordinary!",
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Comments", null, {});
  },
};
