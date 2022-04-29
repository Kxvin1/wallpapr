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
      uploaderId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: { model: "Users" },
      },
      commentText: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
    },
    {}
  );
  Comment.associate = function (models) {
    // - Many to One: Comment belongsTo User (fk: uploaderId)
    Comment.belongsTo(models.User, { foreignKey: "uploaderId" });
    // - Many to One: Comment belongsTo User (fk: userId)
    Comment.belongsTo(models.User, { foreignKey: "userId" });
  };
  return Comment;
};
