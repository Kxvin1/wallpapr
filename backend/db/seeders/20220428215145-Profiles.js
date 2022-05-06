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
          biography: "I'm only here to show you around 🤖",
        },
        {
          userId: 2,
          fullName: "Kevin Bartolome",
          location: "California",
          biography: "Very Interesting Biography Here",
        },
        {
          userId: 3,
          fullName: "Klay Thompson",
          location: "Bay Area",
          biography: "aka Captain Klay 🛥️",
        },
        {
          userId: 4,
          fullName: "Rocco",
          location: "klay's house",
          biography:
            "🐕 iykyk. drop a follow https://www.instagram.com/rocco.thompson",
        },
        {
          userId: 5,
          fullName: "Stephen Curry",
          location: "Bay Area",
          biography: "🐐",
        },
        {
          userId: 6,
          fullName: "Abcs123-hitmakerx",
          location: "Thesaurusland",
          biography:
            "bruh check my soundcloud www.soundcloud.com/abcs123-beats",
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Profiles", null, {});
  },
};
