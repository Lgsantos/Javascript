let amigo = {nome: 'José',
sexo: 'M',
peso: 85.4,
engordar(p=0){
    this.peso += p //this é uma referência para o próprio objeto
}}
console.log(amigo)
console.log(amigo.nome)
console.log(amigo.peso)
amigo.engordar(2)
console.log(amigo.peso)

