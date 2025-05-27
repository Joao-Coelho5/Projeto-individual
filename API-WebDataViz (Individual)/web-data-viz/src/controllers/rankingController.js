var rankingModel = require("../models/rankingModel");

function listarFavoritos(req, res){
    rankingModel.listarFavoritos().then(function(resultado){
        if (resultado.length > 0){
            res.status(200).json(resultado)
        } else {
            res.status(204).send('Nenhum resultado encontrado')
        }
    }).catch(function(erro){
        console.log(erro)
        console.log('Houve erro ao recuperar o ranking: ', erro.sqlMessage)
        res.status(500).json(erro.sqlMessage)
    });
}

module.exports = {
    listarFavoritos
}