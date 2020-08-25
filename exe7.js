chefe()

function chefe() {
    var vetor = [] //declara o vetor
    exe7(vetor) // estamos passando o vetor como parametro - escopo global
    console.log(vetor)
    calculaMedia(vetor)
}

// entrada de dados
function exe7(vet) { // vet representa vetor, isso significa q o que fizermos com vet vai ser feito com vetor

    var numero = Number(prompt(`Informe o número`))
    do {
        //colocar o número em vet
        vet.push(numero)
        numero = Number(prompt(`Informe outro número, informe número negativo para encerrar`))
    }
    while (numero >= 0)

}

// calcula e mostra a media
function calculaMedia(vet) {
    var soma = 0
    for(var i = 0; i< vet.length; i++){
        soma = soma + vet[i]
    }
    console.log(`A média é ${soma/vet.length}`)
}
