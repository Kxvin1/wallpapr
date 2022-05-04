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
          biography: "I'm here to show you around",
        },
        {
          userId: 2,
          fullName: "Kevin Bartolome",
          location: "California",
          biography: "Very Interesting Biography Here",
        },
        {
          userId: 3,
          fullName: "Leonardo Da Vinci",
          location: "Château du Clos Lucé, Amboise, France",
          biography: "Leonardo da Biography",
        },
        {
          userId: 4,
          fullName: "Pablo Picasso",
          location: "Mougins, France",
          biography: "Pablography",
        },
        {
          userId: 5,
          fullName: "Vincent van Gogh",
          location: "Auvers-sur-Oise, France",
          biography: "Vincent Van Bio.",
        },
        {
          userId: 6,
          fullName: "Abc",
          location: "Dictionaryland",
          biography: "Xyz",
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Profiles", null, {});
  },
};
