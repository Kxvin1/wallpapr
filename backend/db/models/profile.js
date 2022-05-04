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
        defaultValue: "Full Name Default Value",
      },
      location: {
        type: DataTypes.STRING,
        defaultValue: "Location Default Value",
      },
      avatar: {
        type: DataTypes.STRING,
        defaultValue: "/images/default-avatar-png-3",
      },
      biography: {
        type: DataTypes.TEXT,
        defaultValue: "Default Biography Longer Text Stuff Fill",
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
