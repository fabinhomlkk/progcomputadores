chefe() 

function chefe() {
    let vetor = [] // este vetor vai existir apenas dentro dessa função
    do {

        var opcao = Number(prompt("Digite \n [1] Entrada \n [2] Média de idade \n [3] Maior idade \n [4] Quantidade de mulheres \n [5] Percentual de homens \n [6] Sair"))
        switch(opcao){
            case 1: entrada(vetor) //estamos passando uma referência na memória do vetor
                    break;
            case 2: mediaIdade(vetor)
                    break;
            case 3: maiorIdade(vetor)
                    break;
            case 4: qntMulheres(vetor)
                    break;
            case 5: percentHomens(vetor)
                    break;
            case 6: console.log(`Obrigado por utilizar nosso programa!`)
                    break;
            default: console.log(`Opção inválida, tente novamente`)       
        }

    }
    while(opcao != 6)
}

function entrada(vet) { //vet vai apontar para vetor
    console.log(`Entrou na função entrada`)
    let objeto = new Object()
    objeto.sexo = prompt("Informe o seu sexo 'M ou F").toUpperCase() // converte tudo para letra maiúscula
    objeto.altura = Number(prompt("Informe sua altura"))
    objeto.idade = Number(prompt("Informe sua idade"))
    objeto.corolhos = prompt("Informe a cor dos seus olhos 'A - Azuis, V - Verdes, C - Castanhos'").toUpperCase()                
    vet.push(objeto)
    console.log(`Habitante inserido com sucesso`)

}

function mediaIdade(vet) {
    console.log(`Entrou na função calcular media idade`)
    let medidade = 0
    let qntde = 0
    for(let i = 0; i < vet.length; i++) {
        if((vet[i].corolhos == 'C') && (vet[i].altura > 1.60)) {
            medidade = medidade + vet[i].idade 
            qntde++           
        }
    }
    console.log(`A média de idade das pessoas com olhos castanhos e altura maior que 1.60m é de ${medidade/qntde}`)    
}

function maiorIdade(vet) {
    console.log(`Entrou na função calcular maior idade`)
    let idade = vet[0].idade
    for(let i = 1; i < vet.length; i++) {
        if(vet[i].idade > idade){
            idade = vet[i].idade
        }
    } 
    console.log(`A maior idade entre os habitantes é ${idade} anos`)
}

function qntMulheres(vet) {
    console.log(`Entrou na função calcular quantidade`)
    let qntfem = 0
    for(let i = 0; i < vet.length; i++) {
        if(((vet[i].sexo == 'F' && vet[i].idade >= 20 && vet[i].idade <= 45))
        || 
        ((vet[i].sexo == 'F' && vet[i].corolhos == 'V' && vet[i].altura < 1.70))){
            qntfem++
        }   
    }
    console.log(`A quantidade de mulheres com idade entre 20 e 45 anos OU com olhos verdes e altura menor que 1.70 é ${qntfem}`)
}

function percentHomens(vet) {
    console.log(`Entrou na função calcular percentual`)
    let qntmasc = 0
    for(let i = 0; i < vet.length; i++){
        if(vet[i].sexo == 'M') {
            qntmasc++
        }
    }
    console.log(`O percentual de homens é igual a ${(qntmasc/vet.length)*100}%`)
}