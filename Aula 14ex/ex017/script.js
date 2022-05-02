function tabuada() {
    var tn = window.document.getElementById('txtn')
    var res = window.document.getElementById('tabuada')
    if (tn.value.length == 0) {
        window.alert('[ERRO] Um número precisa ser fornecido!')
    } else {
        var n = Number(tn.value)
        res.textContent = ''
        for (var c = 0; c <= 10; c++) {
        res.textContent += `${n} x ${c} = ${n*c}\n`
        }
    } 
}

