// EXEMPLOS DE JS UTILIZANDO A ESPECIFICAÇÃO ECMASCRIPT 5

// VAMOS APRENDER
//Array.forEach()
//Array.map()
//Array.filter()
//Array.reduce()
//Array.every()
//Array.some()
//Array.indexOf()
//JSON.parse()
//JSON.stringify()
// Date.now() -> já aprendemos


chefe () 

var conteudo = ""

function chefe() {

    let vetor = [10, 30, 50, 70, 90, 110, 130, 150, 170]

    vetor.forEach(funcao)
    vetor.forEach(acumula)
    console.log(conteudo)
    // funcao(10, 0)
    // funcao(30, 1)
    // funcao(50, 2)
    // funcao(70, 3)
    // funcao(90, 4)

    //percorrer o vetor 
    // for(let i = 0; i < vetor.length; i++){
    //    console.log(`O elemento ${vetor[i]}está na posição ${i}`)
    // }
}

// os parâmeetros são os elementos e suas posições
function funcao(elemento, posicao) {
    console.log(`O elemento ${elemento} está na posição ${posicao}`)
}

function funcao(elemento, posicao) {
    if(posicao%2 == 0) {
        console.log(`O elemento ${elemento} está em posição par`)
    }
    else {
        console.log(`O elemento ${elemento} está em posição impar`)
    }
}

// os parâmetros são somento o elemento
function acumula(elemento) {
    conteudo = conteudo + " - " + elemento
}


//funcao map percorre o vetor alterando os valores

var idades = [10, 13, 17, 18, 19, 20, 22, 26]

var novo1 = idades.map(multiplica)
var novo2 = idades.map(parImpar) // estamos fazendo um for no vetor 
// multiplica(10)
// multiplica(13)
// multiplica(17)
// multiplica(18)
// multiplica(19)
// multiplica(20)
// multiplica(22)
// multiplica(26)

console.log(novo)

 function multiplica(elemento) {
    return elemento * 2 //todos os elementos do vetor serão multiplicados por 2
} 

function parImpar(elemento) {
    if(elemento %2 == 0) {
        return 0 //todos os elementos do vetor par recebem 0 e impar recebem 1
    }
    else {
        return 1
    }    
}

//podemos criar variaveis do tipo função
// a variavel x é uma função 
var x = function () {
    console.log(`Váriaveis do tipo de uma funçaõ`)
}

x()

// a variavel soma é uma função
var soma = function (a, b) {
    console.log(a + b)
}

soma(3, 6)

// a variavel subtracao é uma função
var subtracao = function (a, b){
    console.log(a - b)
}

subtracao(6, 1)

// filter

var vet = [1, 2, 3, 4, 5]

var novo = vet.filter(maior)

console.log(novo)

function maior(elemento) {
    return elemento  >= 3
}
