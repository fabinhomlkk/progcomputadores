chefe()

function chefe() {

    // vetor com escopo local
    let vendedores = []
    let vendas = []
    let opcao
    do {
        opcao = Number(prompt(`Escolha: \n [1]. Cadastrar Vendedor \n [2]. Cadastrar Venda \n [3]. Consulta Vendas Mês (FUNCIONÁRIO) \n [4]. Consulta Vendas Funcionário \n [5]. Consulta Vendedor Mês \n [6]. Consulta Mês \n [7]. Sair`))
        switch(opcao) {
            case 1: cadastraVendedor(vendedores) // essa passagem é por referencia e torna o vetor de escopo global
                    break
            case 2: cadastraVendas(vendas, vendedores)
                    break
            case 3: consultaVendasFuncionariosMes(vendas)
                    break 
            case 4: consultaVendasFuncionarios(vendas)            
                    break 
            case 5: consultaVendedorMes(vendas)
                    break
            case 6: consultaMes(vendas)
                    break
            case 7: console.log(`Tchau`)
            default: console.log(`Tente novamente...`)                

        }
    }
    while (opcao != 7)

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

function consultaVendasFuncionariosMes(vdas) {
    let vendedor = Number(prompt(`Informe o código do vendedor`))
    let mes = Number(prompt(`Informe o mês da venda`))
    //percorre o vetor de vendas
    for(let i = 0; i < vdas.length; i++) {
        // recupera somente o mes da data - > getMonth()
        if((vdas[i].vendedor == vendedor) && (vdas[i].mes.getMonth() == mes)) {
            console.log(`Valor da venda ${vdas[i].valor}`)
            return // sai da função
        }
    }
    console.log(`Não existe venda para este funcionário neste mês`)
}

function consultaVendasFuncionarios(vdas) {
    let vendedor = Number(prompt(`Informe o código do vendedor`))
    //percorre o vetor de vendas
    let soma = 0
    for(let i = 0; i < vdas.length; i++) {
        if(vdas[i].vendedor == vendedor) { //encontrei a venda do vendedor
            soma = soma + vdas[i].valor
        }
    }
    console.log(`A soma das vendas é ${soma}`)
}

function consultaVendedorMes(vdas) {
    let mes = Number(prompt(`Informe o mês`))
    maiorVenda = 0
    vendedorMaisVendeu = 0
    for(let i = 0; i < vdas.length; i++) {
        if(vdas[i].mes == mes) {
            if(vdas[i].valor > maiorVenda) {
                maiorVenda = vdas[i].valor
                vendedorMaisVendeu = vdas[i].vendedor                                
            }            
        }        
    }
    console.log(`Vendedor com mais vendas ${vendedorMaisVendeu} e valor ${maiorVenda}`)
}

function consultaMes(vdas) {
    let meses = [0,0,0,0,0,0,0,0,0,0,0,0]
    for(let i = 0; i < vdas.length; i++) {
        let posicao = vdas[i].mes - 1 //descubro a posição para colocar
        meses[posicao] = meses[posicao] + vdas[i].valor //acumulo o valor        
    } // encontraremos o maior valor vendido
    let maiorValor = meses[0] //assumo que é janeiro
    for(let i = 0; i < meses.length; i++) {
        if(meses[i] > maiorValor){
            maiorValor = meses[i]
        }        
    }
    //encontrar a posição do maior valor vendido
    let posicao = meses.indexOf(maiorValor)
    console.log(`O mês que mais vendeu ${posicao+1}`)        
}