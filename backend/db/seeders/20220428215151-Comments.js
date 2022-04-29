"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Comments",
      [
        {
          userId: 4,
          uploaderId: 2,
          commentText: "Cool image bro",
        },
        {
          userId: 4,
          uploaderId: 2,
          commentText: "Nice image bro",
        },
        {
          userId: 4,
          uploaderId: 2,
          commentText: "Neat image bro",
        },
        {
          userId: 4,
          uploaderId: 1,
          commentText: "Delightful image bro",
        },
        {
          userId: 4,
          uploaderId: 2,
          commentText: "Satisfying image bro",
        },
        {
          userId: 4,
          uploaderId: 1,
          commentText: "Enjoyable image bro",
        },
        {
          userId: 2,
          uploaderId: 4,
          commentText: "Swell image bro",
        },
        {
          userId: 2,
          uploaderId: 3,
          commentText: "Pleasant image bro",
        },
        {
          userId: 2,
          uploaderId: 5,
          commentText: "Admirable image bro",
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Comments", null, {});
  },
};
