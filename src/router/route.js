const { getData } = require("../controller/practices");

const router = require("express").Router();

router.get("/practices", getData);

module.exports = router;
