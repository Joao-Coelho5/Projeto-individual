var express = require("express");
var router = express.Router();

var noticiasController = require("../controllers/noticiasController");

router.post("/cadastrarNoticias", function (req, res) {
    noticiasController.cadastrarNoticias(req, res)
});

router.get("/verNoticias", function (req, res) {
    noticiasController.verNoticias(req, res)
});

module.exports = router;