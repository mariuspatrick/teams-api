const { Router } = require("express");

const Team = require("./model");

const router = new Router();

router.get("/team", (req, res) => {
  Team.findAll()
    .then((data) => res.send(data))
    .catch(console.error);
});

router.post("/team", (req, res) => {
  Team.create(req.body)
    .then((data) => res.send(data))
    .catch(console.error);
});

router.get("/team/:id", (req, res) => {
  Team.findByPk(req.params.id)
    .then((data) => res.send(data))
    .catch(console.error);
});

module.exports = router;
