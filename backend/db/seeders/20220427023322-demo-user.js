"use strict";
const bcrypt = require("bcryptjs");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Users",
      [
        {
          email: "demo@user.io",
          username: "Demo",
          hashedPassword: bcrypt.hashSync("password"),
        },
        {
          email: "kevinzy124932@gmail.com",
          username: "Kevin",
          hashedPassword: bcrypt.hashSync("password"),
        },
        {
          email: "leonardo.d.vinci.75423@gmail.com",
          username: "leonardo",
          hashedPassword: bcrypt.hashSync("password"),
        },
        {
          email: "pablo.ruiz.p.10249@gmail.com",
          username: "picasso",
          hashedPassword: bcrypt.hashSync("password"),
        },
        {
          email: "vince.v.g.89132@gmail.com",
          username: "vinny",
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
