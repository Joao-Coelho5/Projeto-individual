var noticiasModel = require("../models/noticiasModel");

function cadastrarNoticias(req, res) {

    var titulo = req.body.tituloServer;
    var descricao = req.body.descricaoServer;
    var link = req.body.linkServer;
    var dataCadastro = req.body.dataServer;

    noticiasModel.cadastrarNoticias(titulo, descricao, link, dataCadastro)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao cadastrar o resultado",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function verNoticias(req, res) {
    noticiasModel.verNoticias().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado)
        } else {
            res.status(204).send('Nenhum resultado encontrado')
        }
    }).catch(function (erro) {
        console.log(erro)
        console.log('Nenhuma notícia encontrada: ', erro.sqlMessage)
        res.status(500).json(erro.sqlMessage)
    });
}

module.exports = {
    verNoticias,
    cadastrarNoticias
}