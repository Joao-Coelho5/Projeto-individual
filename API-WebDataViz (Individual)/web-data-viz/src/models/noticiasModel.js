var database = require("../database/config")

function cadastrarNoticias(titulo, descricao, link, dataCadastro) {
    var instrucaoSql = `
        insert into noticias (titulo, descricao, link, dataCadastro)
		values('${titulo}', '${descricao}', '${link}', '${dataCadastro}');
    `;
    return database.executar(instrucaoSql);
}

function verNoticias() {
    var instrucaoSql = `
        select * from noticias order by id desc;
    `;
    return database.executar(instrucaoSql);
}

module.exports = {
    cadastrarNoticias,
    verNoticias
};