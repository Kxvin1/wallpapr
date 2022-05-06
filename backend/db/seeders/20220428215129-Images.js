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
          userId: 1,
          imageURL: "/images/image-3.jpg",
          tags: ["swamp", "scenic", "sky"],
          favoritedCount: 420,
        },
        {
          userId: 6,
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
          imageURL: "/images/image-6.png",
          tags: ["sky", "red"],
          favoritedCount: 1111,
        },
        {
          userId: 1,
          imageURL: "/images/image-7.jpg",
          tags: ["space", "futuristic", "dystopia"],
          favoritedCount: 3031,
        },
        {
          userId: 1,
          imageURL: "/images/image-8.png",
          tags: ["cyberpunk", "woman", "computer"],
          favoritedCount: 777,
        },
        {
          userId: 1,
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
        {
          userId: 1,
          imageURL: "/images/image-15.jpg",
          tags: ["views", "forest"],
          favoritedCount: 677,
        },
        {
          userId: 1,
          imageURL: "/images/image-17.jpg",
          tags: ["moon", "pyramid", "egypt", "sand"],
          favoritedCount: 677,
        },
        {
          userId: 1,
          imageURL: "/images/image-18.jpg",
          tags: ["skyscrapers", "buildings", "sky"],
          favoritedCount: 677,
        },
        {
          userId: 5,
          imageURL: "/images/image-19.jpg",
          tags: ["numbers", "digital"],
          favoritedCount: 677,
        },
        {
          userId: 5,
          imageURL: "/images/image-20.jpg",
          tags: ["game", "LoL", "art"],
          favoritedCount: 677,
        },
        {
          userId: 5,
          imageURL: "/images/image-21.jpg",
          tags: ["sword", "art", "snow"],
          favoritedCount: 677,
        },
        {
          userId: 2,
          imageURL: "/images/image-22.jpg",
          tags: ["snow", "car", "mountains"],
          favoritedCount: 677,
        },
        {
          userId: 3,
          imageURL: "/images/image-23.jpg",
          tags: ["skyscrapers", "buildings", "cloudy"],
          favoritedCount: 677,
        },
        {
          userId: 4,
          imageURL: "/images/image-24.jpg",
          tags: ["hacker", "cyberpunk", "computers"],
          favoritedCount: 677,
        },
        {
          userId: 5,
          imageURL: "/images/image-25.png",
          tags: ["art", "epic", "futuristic"],
          favoritedCount: 677,
        },
        {
          userId: 3,
          imageURL: "/images/image-26.jpg",
          tags: ["snow", "sky", "spiderman"],
          favoritedCount: 677,
        },
        {
          userId: 4,
          imageURL: "/images/image-27.png",
          tags: ["dragon", "art", "ocean", "mythical"],
          favoritedCount: 677,
        },
        {
          userId: 2,
          imageURL: "/images/image-28.jpg",
          tags: ["sky", "mountains", "clouds", "views"],
          favoritedCount: 677,
        },
        {
          userId: 2,
          imageURL: "/images/image-29.png",
          tags: ["art", "epic", "space"],
          favoritedCount: 677,
        },
        {
          userId: 6,
          imageURL: "/images/image-36.jpg",
          tags: ["art", "forest", "epic", "candles"],
          favoritedCount: 677,
        },
        {
          userId: 6,
          imageURL: "/images/image-38.jpg",
          tags: ["paris", "buildings", "eiffel tower", "rain"],
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
