"use strict";
const bcrypt = require("bcryptjs");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Users",
      [
        {
          email: "demo@user.io",
          username: "Demo-lition",
          hashedPassword: bcrypt.hashSync("password"),
        },
        {
          email: "kevinzy17@gmail.com",
          username: "kevin",
          hashedPassword: bcrypt.hashSync("password"),
        },
        {
          email: "leonardo.d.vinci@gmail.com",
          username: "LDV",
          hashedPassword: bcrypt.hashSync("password"),
        },
        {
          email: "pablo.ruiz.p@gmail.com",
          username: "thepicasso",
          hashedPassword: bcrypt.hashSync("password"),
        },
        {
          email: "vince.v.g@gmail.com",
          username: "vinnydiesel",
          hashedPassword: bcrypt.hashSync("password"),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(
      "Users",
      {
        username: {
          [Op.in]: [
            "Demo-lition",
            "kevinzy",
            "LDV",
            "thepicasso",
            "vinnydiesel",
          ],
        },
      },
      {}
    );
  },
};
