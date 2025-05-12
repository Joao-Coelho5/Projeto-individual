create database phantomAficionado;
use phantomAficionado;

create table usuario(
id				int primary key auto_increment,
nome			varchar(45),
senha			varchar(45),
email			varchar(45),
dtNasc			date,
personagemFavorito varchar(45)
);

create table quiz(
usuarioId		int,
tentativa		int,
acertos			int not null,
foreign key (usuarioId)references usuario(id),
primary key (usuarioId, tentativa)
);