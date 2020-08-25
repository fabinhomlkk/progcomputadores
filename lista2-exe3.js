chefe() 

function chefe() {
    var vetor = []
    do {

        var opcao = Number(prompt("Digite [1]Entrada [2]Relat1 [3]Relat2 [4]Relat3 [5]Relat4 [6]Sair"))
        switch(opcao){
            case 1: entrada(vetor)
                    break;
            case 2: relat1(vetor)
                    break;
            case 3: relat2(vetor)
                    break;
            case 4: relat3(vetor)
                    break;
            case 5: relat4(vetor)
        }

    }
    while(opcao != 6)
}

function entrada(vet) {

    var objeto = new Object()
    objeto.sexo = prompt("Informe o seu sexo")
    objeto.altura = Number(prompt("Informe sua altura"))
    objeto.idade = Number(prompt("Informe sua idade"))
    objeto.corolhos = prompt("Informe a cor dos seus olhos 'A - Azuis, V - Verdes, C - Castanhos'")                
    vet.push(objeto)

}

function relat1(vet) {
    var medidade = 0
    for(var i = 0; i < vet.length; i++) {
        if((vet[i].corolhos == 'C') && (vet[i].altura > 1.60)) {
            medidade = medidade + vet[i].idade            
        }
    }
    console.log(`A média de idade das pessoas com olhos castanhos e altura maior que 1.60m é de ${medidade/vet.length}`)    
}

function relat2(vet) {
    var idade = vet[0].idade
    for(i = 1; i < vet.length; i++) {
        if(vet[i].idade > idade){
            idade = vet[i].idade
        }
    } 
    console.log(`A maior idade entre os habitantes é ${idade} anos`)
}

function relat3(vet) {
    var qntfem = 0
    for(i = 0; i < vet.length; i++) {
        if((vet[i].sexo == 'F' && vet[i].idade >= 20 && vet[i].idade <= 45)) {
            qntfem = qntfem + 1
        } 
        else if((vet[i].sexo == 'F' && vet[i].corolhos == 'V' && vet[i].altura < 1.70)) {
            qntfem = qntfem + 1
        }
    }
    console.log(`A quantidade de mulheres com idade entre 20 e 45 anos OU com olhos verdes e altura menor que 1.70 é ${qntfem}`)
}

function relat4(vet) {
    var qntmasc = 0
    for(i = 0; i < vet.length; i++){
        if(vet[i].sexo == 'M') {
            qntmasc++
        }
    }
    console.log(`O percentual de homens é igual a ${(qntmasc/vet.length)*100}%`)
}