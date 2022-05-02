function contar() {
    var tinício = window.document.getElementById('txtstart')
    var tfim = window.document.querySelector('input#txtend')
    var tpasso = window.document.getElementById('txtstep')
    var res = window.document.getElementById('res')

    if (tinício.value.length == 0 || tfim.value.length == 0 || tpasso.value.length == 0 || tpasso.value == 0 ) {
        window.alert('[ERRO] Campos <Início>, <Fim> e <Passo> precisam ser preenchidos! E <passo>  precisa ser diferente de zero!')
    } else {
        var início = Number(tinício.value)
        var fim = Number(tfim.value)
        var passo = Number(tpasso.value)
        //res.innerHTML = `Clicou! ${início+fim} ${fim} ${passo}`
        if (início > fim && passo > 0 || início < fim && passo < 0) {
            res.innerHTML = 'Verifique os valores de início, fim e passo para tornar a contagem possível!'
        } else if (início < fim) {
            res.innerHTML = ''
            for (var c = início; c <= fim; c+=passo) {
                //res.innerHTML += c + String.fromCodePoint(0x1F449)
                res.innerHTML += c + '\u{1F449}'
                } // https://unicode.org/emoji/charts/full-emoji-list.html
            res.innerHTML += ' 🏁'
        } else {
            res.innerHTML = ''
            for (var c = início; c >= fim; c+=passo) {
                res.innerHTML += c + String.fromCodePoint(0x1F449)
                }
            res.innerHTML += ' 🏁'
        }
    }
}