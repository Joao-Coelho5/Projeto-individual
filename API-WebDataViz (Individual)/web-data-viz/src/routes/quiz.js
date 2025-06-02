var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController");

router.post("/guardarResultado", function (req, res) {
    quizController.guardarResultado(req, res)
});

router.get("/exibirAcertos", function (req, res) {
    quizController.exibirAcertos(req, res)
});

module.exports = router;