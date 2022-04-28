"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Images",
      [
        {
          userId: 2,
          imageURL: "/images/image-1.jpg",
          tags: ["lake", "scenic", "outdoors"],
          favoritedCount: 420,
        },
        {
          userId: 2,
          imageURL: "/images/image-2.png",
          tags: ["dragon", "fantasy", "army"],
          favoritedCount: 151,
        },
        {
          userId: 2,
          imageURL: "/images/image-3.jpg",
          tags: ["swamp", "scenic", "sky"],
          favoritedCount: 42,
        },
        {
          userId: 1,
          imageURL: "/images/image-4.png",
          tags: ["programming", "languages", "minimal"],
          favoritedCount: 101,
        },
        {
          userId: 3,
          imageURL: "/images/image-5.jpg",
          tags: ["cyberpunk", "futuristic", "dystopia"],
          favoritedCount: 77,
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Images", null, {});
  },
};
