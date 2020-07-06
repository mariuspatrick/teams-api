const Sequelize = require("sequelize");
const db = require("../db.js");

const Player = require("../player/model");
const Team = require("../team/model");

const City = db.define("city", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  population: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

/* ------------------------------------- */
/* Creating foreign keys to Player and Team */
/* ------------------------------------- */

Player.belongsTo(City);
Team.belongsTo(City);

module.exports = City;
