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
    // - Many to Many: Image belongsToMany User (fk: imageId // through: "Favorite" // otherKey: userId)
    Image.belongsToMany(models.User, {
      foreignKey: "imageId",
      through: "Favorite",
      otherKey: "userId",
    });
    // - Many to One: Image belongsTo User (fk: userId)
    Image.belongsTo(models.User, { foreignKey: "userId" });
    // - One to Many: Image hasMany Favorite (fk: imageId)
    Image.hasMany(models.Favorite, {
      foreignKey: "imageId",
      onDelete: "CASCADE",
      hooks: true,
    });
  };
  return Image;
};
