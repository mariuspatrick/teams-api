const { Router } = require("express");

const City = require("./model");

const router = new Router();

router.get("/city", (req, res) => {
  City.findAll()
    .then((data) => res.send(data))
    .catch(console.error);
});

router.post("/city", (req, res) => {
  City.create(req.body)
    .then((data) => res.send(data))
    .catch(console.error);
});

router.get("/city/:id", (req, res) => {
  City.findByPk(req.params.id)
    .then((data) => res.send(data))
    .catch(console.error);
});

module.exports = router;
