function calendario(){
    var data = new Date()
    let ano = data.getFullYear()
    let mes = data.getMonth() + 1
    var dia = data.getDate()
    let hora = data.getHours()
    div_dia.innerHTML = `${dia}/${mes}/${ano}`
    if (hora >= 18){
        corpo.style.backgroundImage = "url('Assets/P5city_night.jpg')"
    }
}

function colocarImagem(vetor) {
        coluna1.innerHTML = ''
        coluna2.innerHTML = ''
        for (let i = 0; i < vetor.length; i++) {
            if (vetor[i].personagemFavorito == 'Morgana') {
                coluna1.innerHTML += `<div><img src="assets/CONFIDANTS/morgana.png" alt="" width="200px"><br> Morgana <br> Votos: ${vetor[i].Votos}</div>`;
            } else if (vetor[i].personagemFavorito == 'Joker') {
                coluna1.innerHTML += `<div><img src="assets/CONFIDANTS/joker.png" alt="" height="250px"<br> Joker <br> Votos: ${vetor[i].Votos}</div>`;
            } else if (vetor[i].personagemFavorito == 'Akechi') {
                coluna1.innerHTML += `<div><img src="assets/CONFIDANTS/akechi.png" alt="" width="200px"><br> Akechi <br> Votos: ${vetor[i].Votos}</div>`;
            } else if (vetor[i].personagemFavorito == 'Ryuji') {
                coluna1.innerHTML += `<div><img src="assets/CONFIDANTS/ryuji.png" alt="" width="230px"><br> Ryuji <br> Votos: ${vetor[i].Votos}</div>`;
            } else if (vetor[i].personagemFavorito == 'Yusuke') {
                coluna1.innerHTML += `<div><img src="assets/CONFIDANTS/yusuke.png" alt="" width="200px"><br> Yusuke <br> Votos: ${vetor[i].Votos}</div>`;
            } else if (vetor[i].personagemFavorito == 'Makoto') {
                coluna2.innerHTML += `<div><img src="assets/CONFIDANTS/makoto.png" alt="" width="200px"><br> Makoto <br> Votos: ${vetor[i].Votos}</div>`;
            } else if (vetor[i].personagemFavorito == 'Futaba') {
                coluna2.innerHTML += `<div><img src="assets/CONFIDANTS/futaba.png" alt="" width="200px"><br> Futaba <br> Votos: ${vetor[i].Votos}</div>`;
            } else if (vetor[i].personagemFavorito == 'Haru') {
                coluna2.innerHTML += `<div><img src="assets/CONFIDANTS/haru.png" alt="" width="250px"><br> Haru <br> Votos: ${vetor[i].Votos}</div>`;
            } else if (vetor[i].personagemFavorito == 'Ann') {
                coluna2.innerHTML += `<div><img src="assets/CONFIDANTS/ann.png" alt="" width="250px"><br> Ann <br> Votos: ${vetor[i].Votos}</div>`;
            }
        }
    }

function listarNoticias(vetor){
    for(let i = 0; i < vetor.length; i++)
    card_noticias.innerHTML += `<div id="div_noticia_individual"><b>Titulo: ${vetor[i].titulo} Postado: ${vetor[i].dataCadastro.split('T')[0]} </b> <br> Descrição: ${vetor[i].descricao} <br> Link: <a href="${vetor[i].link}">${vetor[i].link}<a/> </div>`
}

function escolherPersonagem(){
    
}