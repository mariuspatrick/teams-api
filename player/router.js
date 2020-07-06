const { Router } = require("express");

const Player = require("./model");
const Team = require("../team/model");

const router = new Router();

router.get("/player", (req, res) => {
  Player.findAll()
    .then((data) => res.send(data))
    .catch((err) => next(err));
});

router.post("/player", (req, res) => {
  Player.create(req.body)
    .then((data) => res.send(data))
    .catch(console.error);
});

router.get("/player/:id", (req, res) => {
  Player.findByPk(req.params.id, { include: [Team] })
    .then((data) => res.send(data))
    .catch(console.error);
});

/* ------------------------------------- */
/* Route that querries players by teamId */
/* ------------------------------------- */

router.get("/player/team/:teamId", (req, res) => {
  Player.findAll({ where: { teamId: req.params.teamId } })
    .then((data) => res.send(data))
    .catch(console.error);
});

/* ------------------------------------- */
/* Route that querries players by cityId */
/* ------------------------------------- */

router.get("/player/city/:cityId", (req, res) => {
  Player.findAll({ where: { cityId: req.params.cityId } })
    .then((data) => res.send(data))
    .catch(console.error);
});

module.exports = router;
