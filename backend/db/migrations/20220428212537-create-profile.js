"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Profiles", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "Users" },
      },
      fullName: {
        type: Sequelize.STRING,
        defaultValue: "Full Name Default Value",
      },
      location: {
        type: Sequelize.STRING,
        defaultValue: "Location Default Value",
      },
      avatar: {
        type: Sequelize.STRING,
        defaultValue: "/images/1-default-avatar-astro.png",
      },
      biography: {
        type: Sequelize.TEXT,
        defaultValue: "Default Biography",
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("now"),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("now"),
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Profiles");
  },
};
