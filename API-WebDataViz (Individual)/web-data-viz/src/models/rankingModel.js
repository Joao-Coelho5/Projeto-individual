var database = require("../database/config")

function listarFavoritos() {
    console.log("ACESSEI O RANKING MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ")
    var instrucaoSql = `
        select personagemFavorito, count(personagemFavorito) 'Votos'
        from usuario 
        group by personagemFavorito
        order by count(personagemFavorito) desc;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql

module.exports = {
    listarFavoritos
};