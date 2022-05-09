"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Profiles",
      [
        {
          userId: 1,
          fullName: "Demo Guy",
          location: "Unknown",
          biography: "🤖",
        },
        {
          userId: 2,
          fullName: "Kevin Bartolome",
          location: "Los Angeles",
          biography: "Software Engineer",
        },
        {
          userId: 3,
          fullName: "Nevro S4",
          location: "San Francisco",
          biography: "Collector",
        },
        {
          userId: 4,
          fullName: "Rocco",
          location: "San Francisco",
          biography: "🐕",
        },
        {
          userId: 5,
          fullName: "dashwall",
          location: "Greece",
          biography: "just showing off my collection",
        },
        {
          userId: 6,
          fullName: "blueyk",
          location: "Seattle",
          biography: "The pictures here are really nice",
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Profiles", null, {});
  },
};
