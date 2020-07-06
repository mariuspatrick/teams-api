const Sequelize = require("sequelize");
const db = require("../db.js");

const Team = require("../team/model");

const Player = db.define("player", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  number: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

Player.belongsTo(Team);

module.exports = Player;
