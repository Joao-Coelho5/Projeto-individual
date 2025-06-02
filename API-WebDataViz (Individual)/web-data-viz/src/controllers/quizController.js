var quizModel = require("../models/quizModel");

function guardarResultado(req, res) {

    var idUsuario = req.body.idServer
    var qtdAcerto = req.body.pontuacaoServer;

    if (idUsuario == undefined) {
        res.status(400).send("Seu nome está vazio!");
    } else if (qtdAcerto == undefined) {
        res.status(400).send('Quiz não respondido')
    } else {

        quizModel.guardarResultado(idUsuario, qtdAcerto)
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


}

function exibirAcertos(req, res){
    quizModel.exibirAcertos().then(function(resultado){
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
    guardarResultado,
    exibirAcertos
}