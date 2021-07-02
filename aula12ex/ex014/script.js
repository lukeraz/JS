function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora =  19 //data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12) {
        msg.innerHTML = `Bom dia! agora são ${hora} horas`
        img.src = 'fotomanha.png'
        document.body.style.background='#f1ceae'
    } else if (hora >= 12 && hora < 18) {
        msg.innerHTML = `Boa tarde! agora são ${hora} horas`
        img.src='fototarde.png'
        document.body.style.background='#f25704'
    } else {
        msg.innerHTML = `Boa noite! agora são ${hora} horas`
        img.src='fotonoite.png'
        document.body.style.background='#021735'
    }
}
