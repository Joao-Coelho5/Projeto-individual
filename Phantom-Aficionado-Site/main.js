function carregar(){
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

/* function phantom() {
    let sel = sel_pt.value
    if(sel == 'Joker'){
        div_favorito.innerHTML = '<img src="https://media.tenor.com/U29670s_tS0AAAAM/persona5-joker.gif" alt="" srcset=""></img>'
    } else {
        div_favorito.innerHTML = ''
    }
} */
