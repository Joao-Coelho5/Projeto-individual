create database phantomAficionado;
use phantomAficionado;

create table usuario(
id				int primary key auto_increment,
nome			varchar(45),
senha			varchar(45),
email			varchar(45),
dtNasc			date,
personagemFavorito varchar(45),
unique key (email)
);

create table quiz(
id				int primary key auto_increment,
usuarioId		int,
acertos			int not null,
foreign key (usuarioId)references usuario(id)
);

CREATE TABLE noticias (
    id 			int primary key auto_increment,
    titulo 		varchar(200) not null,
    descricao 	text not null,
    link 		varchar(500) not null,
    dataCadastro date
);


insert into usuario(nome, senha, email, dtNasc, personagemFavorito)
			values('jotape8085', 'urubu100', 'swiplelubby@gmail.com', '2003-08-05', 'Akechi');
            
select personagemFavorito, count(personagemFavorito) 'Votos'
from usuario 
group by personagemFavorito
order by count(personagemFavorito) desc;

select 	* from usuario;
select * from quiz;

select u.personagemFavorito personagem, avg(q.acertos) acertos
from quiz q
join usuario u on u.id = q.usuarioId
group by u.personagemFavorito;

select titulo, descricao, dataCadastro, link from noticias;













