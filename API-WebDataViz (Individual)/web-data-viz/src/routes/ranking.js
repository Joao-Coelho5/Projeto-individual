var express = require("express");
var router = express.Router();

var rankingController = require("../controllers/rankingController");

router.get('/listarFavoritos', function(req, res){
    rankingController.listarFavoritos(req, res)
});

module.exports = router;