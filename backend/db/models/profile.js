"use strict";
module.exports = (sequelize, DataTypes) => {
  const Profile = sequelize.define(
    "Profile",
    {
      userId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: { model: "Users" },
      },
      fullName: {
        type: DataTypes.STRING,
      },
      location: {
        type: DataTypes.STRING,
      },
      avatar: {
        type: DataTypes.STRING,
        defaultValue: "/images/default-avatar.png",
      },
      biography: {
        type: DataTypes.TEXT,
      },
    },
    {}
  );
  Profile.associate = function (models) {
    // - Many to One: Profile belongsTo User (fk: userId)
    Profile.belongsTo(models.User, { foreignKey: "userId" });
  };
  return Profile;
};
