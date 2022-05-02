var numeros = []

function adicionar() {
    //Adiciona número no objeto "select"
    var inputn = window.document.getElementById('txtnum')
    var sel = window.document.getElementById('nums-select')
    var item = window.document.createElement('option')
    n = Number(inputn.value)
    
    if (inputn.value.length == 0) {
        window.alert('[ERRO] Por favor, insira um número!')
        inputn.value = ''
        inputn.focus()
    } else if (n < 1 || n > 100) {
        window.alert('[ERRO] Por favor, insira números entre 1 e 100!')
        inputn.value = ''
        inputn.focus()
    } else if (numeros.indexOf(n) != -1) {
        window.alert('[ERRO] Número já foi adicionado!')
        inputn.value = ''
        inputn.focus()
    } else {
        res.innerHTML = ''
        item.text = `O número ${n} foi adicionado.`
        sel.appendChild(item)
        numeros.push(n)
        inputn.value = ''
        inputn.focus()
    }
    
}

function finalizar() {
    //Calcula e apresenta informações sobre os números adicionados no "select"
    var res = window.document.getElementById('res')
    var maior = numeros[0]
    var menor = numeros[0]
    var soma = 0
    
    res.innerHTML = ''
    res.innerHTML += `Ao todo, temos ${numeros.length} números cadastrados.`
    for (var i = 0; i < numeros.length; i++){
        if (maior <= numeros[i]) {
            maior = numeros[i]
        } else if (menor >= numeros[i]) {
            menor = numeros[i]
        }
    }
    res.innerHTML += `<br>O maior valor informado foi ${maior}.`
    res.innerHTML += `<br>O menor valor informado foi ${menor}.`
    for (var c = 0;  c < numeros.length; c++) {
        soma += numeros[c]
    }
    res.innerHTML += `<br>Somando todos os valores, temos ${soma}.`
    res.innerHTML += `<br>A média dos valores digitados é ${soma / numeros.length}.`

}