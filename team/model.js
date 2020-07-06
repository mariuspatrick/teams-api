const Sequelize = require("sequelize");
const db = require("../db.js");

const Team = db.define("team", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,

    /* Adding validation only for letters and spaces */

    validate: {
      is: /^[a-z ]+$/i,
    },
  },
});

module.exports = Team;
