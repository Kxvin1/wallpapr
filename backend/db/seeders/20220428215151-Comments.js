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
          userId: 1,
          uploaderId: 2,
          commentText:
            "Not able to tell you how happy I am with you. It's all good.",
        },
        {
          userId: 1,
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
          uploaderId: 4,
          commentText: "your works are sooooo extraordinary!",
        },
        {
          userId: 1,
          uploaderId: 1,
          commentText: "i'm saving everything in your collection",
        },
        {
          userId: 5,
          uploaderId: 2,
          commentText: "i'm saving everything in your collection",
        },
        {
          userId: 5,
          uploaderId: 3,
          commentText: "i'm saving everything in your collection",
        },
        {
          userId: 2,
          uploaderId: 4,
          commentText: "i'm saving everything in your collection",
        },
        {
          userId: 4,
          uploaderId: 5,
          commentText: "i'm saving everything in your collection",
        },
        {
          userId: 3,
          uploaderId: 3,
          commentText: "sweet stuff guy",
        },
        {
          userId: 3,
          uploaderId: 3,
          commentText: "awesome art",
        },
        {
          userId: 3,
          uploaderId: 3,
          commentText: "where do you find all these?",
        },
        {
          userId: 3,
          uploaderId: 1,
          commentText: "how do I visit demo island?",
        },
        {
          userId: 6,
          uploaderId: 1,
          commentText:
            "checkout my soundcloud: www.soundcloud.com/abcs123-beats",
        },
        {
          userId: 6,
          uploaderId: 2,
          commentText:
            "checkout my soundcloud: www.soundcloud.com/abcs123-beats",
        },
        {
          userId: 6,
          uploaderId: 3,
          commentText:
            "checkout my soundcloud: www.soundcloud.com/abcs123-beats",
        },
        {
          userId: 6,
          uploaderId: 4,
          commentText:
            "checkout my soundcloud: www.soundcloud.com/abcs123-beats",
        },
        {
          userId: 6,
          uploaderId: 5,
          commentText:
            "checkout my soundcloud: www.soundcloud.com/abcs123-beats",
        },
        {
          userId: 6,
          uploaderId: 6,
          commentText:
            "checkout my soundcloud: www.soundcloud.com/abcs123-beats",
        },
        {
          userId: 6,
          uploaderId: 1,
          commentText: "and my insta: www.instagram.com/therealabcs123",
        },
        {
          userId: 6,
          uploaderId: 2,
          commentText: "and my insta: www.instagram.com/therealabcs123",
        },
        {
          userId: 6,
          uploaderId: 3,
          commentText: "and my insta: www.instagram.com/therealabcs123",
        },
        {
          userId: 6,
          uploaderId: 4,
          commentText: "and my insta: www.instagram.com/therealabcs123",
        },
        {
          userId: 6,
          uploaderId: 5,
          commentText: "and my insta: www.instagram.com/therealabcs123",
        },
        {
          userId: 5,
          uploaderId: 1,
          commentText: "amazing stuff",
        },
        {
          userId: 5,
          uploaderId: 2,
          commentText: "amazing stuff",
        },
        {
          userId: 5,
          uploaderId: 3,
          commentText: "amazing stuff",
        },
        {
          userId: 5,
          uploaderId: 4,
          commentText: "amazing stuff",
        },
        {
          userId: 3,
          uploaderId: 6,
          commentText: "check out my twitter: www.twitter.com/klayyyyyylmao",
        },
        {
          userId: 3,
          uploaderId: 6,
          commentText: "catch me on xbox live, heres my tag: toasterklay11",
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Comments", null, {});
  },
};
