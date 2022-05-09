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
          username: "nevros",
          hashedPassword: bcrypt.hashSync("password"),
        },
        {
          email: "pablo.ruiz.p.10249@gmail.com",
          username: "rocco",
          hashedPassword: bcrypt.hashSync("password"),
        },
        {
          email: "vince.v.g.89132@gmail.com",
          username: "joe48239",
          hashedPassword: bcrypt.hashSync("password"),
        },
        {
          email: "abc543254@gmail.com",
          username: "oswell",
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
