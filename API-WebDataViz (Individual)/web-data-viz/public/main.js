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

