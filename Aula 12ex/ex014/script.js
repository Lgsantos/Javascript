function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 11
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //bom dia!
        img.src = 'manha01.jpg'
        document.body.style.background = '#abdefd'
    } else if (hora >=12 && hora < 18) {
        //boa tarde!
        img.src = 'tarde01.jpg'
        document.body.style.background = '#f79f45'
    } else {
        //boa noite!
        img.src = 'noite01.jpg'
        document.body.style.background = '#e4a2e0'
    }
}

