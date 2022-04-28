"use strict";
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define(
    "Comment",
    {
      userId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: { model: "Users" },
      },
      commentText: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      rating: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
    },
    {}
  );
  Comment.associate = function (models) {
    // - Many to One: Review belongsTo User
  };
  return Comment;
};
