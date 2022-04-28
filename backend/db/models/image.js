"use strict";
module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define(
    "Image",
    {
      userId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: { model: "Users" },
      },
      imageURL: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      tags: {
        type: DataTypes.ARRAY(DataTypes.TEXT),
        defaultValue: [],
      },
      favoritedCount: {
        allowNull: false,
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
    },
    {}
  );
  Image.associate = function (models) {
    // - Many to Many: Image belongsToMany User
    // - Many to One: Image belongsTo User
    // - One to Many: Image hasMany Favorite
  };
  return Image;
};
