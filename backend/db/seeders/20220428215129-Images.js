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
          favoritedCount: 151,
        },
        {
          userId: 2,
          imageURL: "/images/image-2.png",
          tags: ["dragon", "fantasy", "army"],
          favoritedCount: 410,
        },
        {
          userId: 2,
          imageURL: "/images/image-3.jpg",
          tags: ["swamp", "scenic", "sky"],
          favoritedCount: 57,
        },
        {
          userId: 1,
          imageURL: "/images/image-4.png",
          tags: ["programming", "languages", "minimal"],
          favoritedCount: 100,
        },
        {
          userId: 3,
          imageURL: "/images/image-5.jpg",
          tags: ["cyberpunk", "futuristic", "dystopia"],
          favoritedCount: 100,
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Images", null, {});
  },
};
