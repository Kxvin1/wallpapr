"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Images",
      [
        {
          userId: 5,
          imageURL: "/images/image-1.jpg",
          tags: ["lake", "scenic", "outdoors"],
          favoritedCount: 420,
        },
        {
          userId: 4,
          imageURL: "/images/image-2.png",
          tags: ["dragon", "fantasy", "army"],
          favoritedCount: 151,
        },
        {
          userId: 2,
          imageURL: "/images/image-3.jpg",
          tags: ["swamp", "scenic", "sky"],
          favoritedCount: 420,
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
          favoritedCount: 2332,
        },
        {
          userId: 4,
          imageURL: "/images/image-6.jpg",
          tags: ["sky", "red"],
          favoritedCount: 1111,
        },
        {
          userId: 2,
          imageURL: "/images/image-7.jpg",
          tags: ["space", "futuristic", "dystopia"],
          favoritedCount: 3031,
        },
        {
          userId: 1,
          imageURL: "/images/image-8.jpg",
          tags: ["cyberpunk", "woman", "computer"],
          favoritedCount: 777,
        },
        {
          userId: 2,
          imageURL: "/images/image-9.jpg",
          tags: ["futuristic", "space"],
          favoritedCount: 977,
        },
        {
          userId: 1,
          imageURL: "/images/image-10.jpg",
          tags: ["uncharted", "ship"],
          favoritedCount: 177,
        },
        {
          userId: 2,
          imageURL: "/images/image-11.jpg",
          tags: ["hike", "mountains", "nature"],
          favoritedCount: 247,
        },
        {
          userId: 2,
          imageURL: "/images/image-12.jpg",
          tags: ["warcraft", "arthas", "snow"],
          favoritedCount: 771,
        },
        {
          userId: 1,
          imageURL: "/images/image-13.jpg",
          tags: ["futuristic", "sun", "ocean"],
          favoritedCount: 727,
        },
        {
          userId: 2,
          imageURL: "/images/image-14.jpg",
          tags: ["skyscrapers", "buildings"],
          favoritedCount: 677,
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Images", null, {});
  },
};
