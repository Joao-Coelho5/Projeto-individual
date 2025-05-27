create database phantomAficionado;
use phantomAficionado;

create table usuario(
id				int primary key auto_increment,
nome			varchar(45),
senha			varchar(45),
email			varchar(45),
dtNasc			date,
personagemFavorito varchar(45),
unique(email)
);

create table quiz(
usuarioId		int,
tentativa		int,
acertos			int not null,
foreign key (usuarioId)references usuario(id),
primary key (usuarioId, tentativa)
);

insert into usuario(nome, senha, email, dtNasc, personagemFavorito)
			values('jotape8085', 'urubu100', 'swiplelubby@gmail.com', '2003-08-05', 'Akechi');
            
select personagemFavorito, count(personagemFavorito) 'Votos'
from usuario 
group by personagemFavorito
order by count(personagemFavorito) desc;

select * from usuario;