var database = require("../database/config")

function guardarResultado(idUsuario, qtdAcerto) {
    var instrucaoSql = `
        insert into quiz (usuarioId, acertos)
		values(${idUsuario}, ${qtdAcerto});
    `;
    return database.executar(instrucaoSql);
}

function exibirAcertos() {
    var instrucaoSql = `
        select u.personagemFavorito personagem , avg(q.acertos) acertos
        from quiz q
        join usuario u on u.id = q.usuarioId
        group by u.personagemFavorito;
    `;
    return database.executar(instrucaoSql);
}

module.exports = {
    guardarResultado,
    exibirAcertos
};