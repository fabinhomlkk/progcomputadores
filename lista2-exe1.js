chefe()

function chefe() {

    // vetor com escopo local
    let vendedores = []
    let vendas = []
    let opcao
    do {
        opcao = Number(prompt(`Escolha: \n [1]. Cadastrar Vendedor \n [2]. Cadastrar Venda \n [3] Sair`))
        switch(opcao) {
            case 1: cadastraVendedor(vendedores) // essa passagem é por referencia e torna o vetor de escopo global
                    break
            case 2: cadastraVendas(vendas, vendedores)
                    break
            case 3: console.log(`Tchau`)
            default: console.log(`Tente novamente...`)                

        }
    }
    while (opcao != 3)

}

function cadastraVendedor(vended) { // vende representa o vetor vendedores
    let objeto = new Object()
    objeto.codigo = Number(prompt(`Informe o código do vendedor`))
    objeto.nome = prompt(`Informe o nome do vendedor`)
    // verificar se o código ja existe
    for(let i = 0; i < vended.length; i++){
        if(vended[i].codigo == objeto.codigo) {
            console.log(`Cadastro cancelado - Já existe um vendedor com esse código`)
            return 0 // sai da função pois não iremos cadastrar   
        }
    }
    // insere no vended, mas na verdade ele insere no vetor vendedores
    vended.push(objeto)
}

function cadastraVendas(vdas, vdes) { // vdas - representa vetor vendas, vdes - representa vetor vendedores 

    let objeto = new Object()
    objeto.codigo = Number(prompt(`Informe o código da venda`))
    objeto.vendedor = Number(prompt(`Informe o código do vendedor`))
    objeto.mes = Number(prompt(`Informe o mês da venda`))
    objeto.valor = Number(prompt(`Informe o valor da venda`))
    // verifica se o vendedor existe
    // percorrer o vetor e vendedores (vdes)
    for(let i = 0; i < vdes.length; i++) {
        if(objeto.vendedor == vdes[i].codigo) { //achamos o vendedor
            //verifica se existe venda para este vendedor no mesmo mes - nao podemos vender
            //percorre o vetor de vendas
            for(let j=0; j < vdas.length; j++) {
                if((objeto.mes == vdas[i].mes) && (objeto.vendedor == vdas[i].vendedor)){
                    console.log(`Não podemos registrar a venda`)
                    return 0 // sai da função
                }
            }
            // ja percorreu e nao achou, então vamos inserir
            // insere a venda em vdas, que na verdade é vendas
            vdas.push(objeto)
            console.log(`Venda registrada`)
            return 0
        }
    }
    console.log(`Vendedor não existe`)
}