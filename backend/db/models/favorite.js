"use strict";
module.exports = (sequelize, DataTypes) => {
  const Favorite = sequelize.define(
    "Favorite",
    {
      userId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: { model: "Users" },
      },
      imageId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: { model: "Images" },
      },
    },
    {}
  );
  Favorite.associate = function (models) {
    // - Join Table for User/Images
    // - Many to Many: Favorite belongsTo User (fk: userId)
    Favorite.belongsTo(models.User, { foreignKey: "userId" });
    // - Many to Many: Favorite belongsTo Image (fk: imageId)
    Favorite.belongsTo(models.Image, { foreignKey: "imageId" });
  };
  return Favorite;
};
