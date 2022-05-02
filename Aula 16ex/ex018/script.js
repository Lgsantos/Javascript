var numeros = []

function adicionar() {
    //Adiciona número no objeto "select"
    var inputn = window.document.getElementById('txtnum')
    var sel = window.document.getElementById('nums-select')
    var item = window.document.createElement('option')
    
    if (inputn.value.length == 0) {
        window.alert('[ERRO] Por favor, insira um número!')
    } else {
        n = Number(inputn.value)
        item.text = `O número ${n} foi adicionado.`
        sel.appendChild(item)
        numeros.push(n)
    }
    
}

function finalizar() {
    //Calcula e apresenta informações sobre os números adicionados no "select"
    var res = window.document.getElementById('res')
    var p1 = window.document.createElement('p')
    var p2 = window.document.createElement('p')
    var p3 = window.document.createElement('p')
    var p4 = window.document.createElement('p')
    var p5 = window.document.createElement('p')
    var soma = 0
    //var txtarea = window.document.createElement('textarea')
    var tarea = window.document.getElementById('txtarea')

    p1.innerHTML = `Ao todo, temos ${numeros.length} números cadastrados.`
    numeros.sort()
    p2.innerHTML = `O maior valor informado foi ${numeros[numeros.length-1]}.`
    p3.innerHTML = `O menor valor informado foi ${numeros[0]}.`
    for (var c = 0;  c < numeros.length; c++) {
        soma += numeros[c]
    }
    p4.innerHTML = `Somando todos os valores, temos ${soma}.`
    p5.innerHTML = `A média dos valores digitados é ${soma / numeros.length}.`
/*
    res.appendChild(p1)
    res.appendChild(p2)
    res.appendChild(p3)
    res.appendChild(p4)
    res.appendChild(p5)   
  */ 
    /*txtarea.setAttribute('cols', 60)
    txtarea.setAttribute('rows', 5)
    txtarea.textContent = p1.textContent + '\n'
                        + p2.textContent + '\n'
                        + p3.textContent + '\n'
                        + p4.textContent + '\n'
                        + p5.textContent
    */
    tarea.textContent = p1.textContent + '\n'
    + p2.textContent + '\n'
    + p3.textContent + '\n'
    + p4.textContent + '\n'
    + p5.textContent
    //res.appendChild(txtarea)
}