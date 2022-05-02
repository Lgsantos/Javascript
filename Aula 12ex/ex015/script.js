function verificar() {
    //window.alert('FUNCIONOU!')
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        //window.alert('Tudo ok!')
        var fsex = document.getElementsByName('radsex')
        var idade = ano - fano.value
        //res.innerHTML = `Idade calculada: ${idade}`
        var gênero = ''
        /*
        No ex014 a img estava html e a alteramos pelo js. Aqui, faremos
        tudo dinamicamente (pelo js)
        */
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'menino.png')
            } else if (idade < 18) {
                //Jovem
                img.setAttribute('src', 'garoto.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'homem.png')
            } else {
                //Idoso
                img.setAttribute('src', 'senhor.png')
            }
        } else {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'menina.png')
            } else if (idade < 18) {
                //Jovem
                img.setAttribute('src', 'garota.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'mulher.png')
            } else {
                //Idoso
                img.setAttribute('src', 'senhora.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos!`
        res.appendChild(img)
    }
}