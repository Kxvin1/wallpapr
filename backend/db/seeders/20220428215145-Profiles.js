"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Profiles",
      [
        {
          userId: 1,
          fullName: "Demo L. Ition",
          location: "Demo Island",
          biography: "I'm here to look good and show off.",
        },
        {
          userId: 2,
          fullName: "Kevin Bartolome",
          location: "California",
          biography: "Work in progress (forever)",
        },
        {
          userId: 3,
          fullName: "Leonardo Da Vinci",
          location: "Château du Clos Lucé, Amboise, France",
          biography: "Learning never exhausts the mind.",
        },
        {
          userId: 4,
          fullName: "Pablo Picasso",
          location: "Mougins, France",
          biography: "Everything you can imagine is real.",
        },
        {
          userId: 5,
          fullName: "Vincent van Gogh",
          location: "Auvers-sur-Oise, France",
          biography:
            "I often think that the night is more alive and more richly colored than the day.",
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Profiles", null, {});
  },
};
