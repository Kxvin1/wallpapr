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
          commentText: "everything you have is so high res!",
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
          commentText: "your works are extraordinary!",
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
          commentText: "great collection!",
        },
        {
          userId: 6,
          uploaderId: 1,
          commentText: "+1",
        },
        {
          userId: 6,
          uploaderId: 2,
          commentText: "+1",
        },
        {
          userId: 6,
          uploaderId: 3,
          commentText: "+1",
        },
        {
          userId: 6,
          uploaderId: 4,
          commentText: "+1",
        },
        {
          userId: 6,
          uploaderId: 5,
          commentText: "now this is worth adding to my collection",
        },
        {
          userId: 6,
          uploaderId: 6,
          commentText: "now this is worth adding to my collection",
        },
        {
          userId: 6,
          uploaderId: 1,
          commentText: "setting this as my background right now!",
        },
        {
          userId: 6,
          uploaderId: 2,
          commentText: "setting this as my background right now!",
        },
        {
          userId: 6,
          uploaderId: 3,
          commentText: "setting this as my background right now!",
        },
        {
          userId: 6,
          uploaderId: 4,
          commentText: "setting this as my background right now!",
        },
        {
          userId: 6,
          uploaderId: 5,
          commentText: "setting this as my background right now!",
        },
        {
          userId: 5,
          uploaderId: 1,
          commentText: "amazing stuff",
        },
        {
          userId: 5,
          uploaderId: 2,
          commentText: "this is just what i like",
        },
        {
          userId: 5,
          uploaderId: 3,
          commentText: "dude amazing stuff",
        },
        {
          userId: 5,
          uploaderId: 4,
          commentText: "just wanted to say... amazing stuff",
        },
        {
          userId: 3,
          uploaderId: 6,
          commentText: "how do I change my profile picture?",
        },
        {
          userId: 3,
          uploaderId: 6,
          commentText: "i've been looking everywhere for this!",
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Comments", null, {});
  },
};
