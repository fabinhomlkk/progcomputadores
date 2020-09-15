chefe()

function chefe() {
    // declarar a matriz de notas
    let matriz = [] //uma matriz é um vetor
    // vamos criar o vetor de alunos
    let vetor = []
    cadastra(matriz, vetor) // cadastra 3 alunos
    consultaMediaAlunos(matriz, vetor) // calcula a média das notas
    calculaMediaProvas(matriz)
    consultaMaiorNotaProvas(matriz, vetor) // calcula a maior nota das provas
}

// mat representa a matriz na função chefe
// vet representa o vetor na função chefe
function cadastra(mat, vet) { 
    for(let i = 0; i < 3; i++) { // são 3 alunos
        objeto = new Object()
        objeto.nome = prompt(`Informe o nome `)
        objeto.rg= prompt(`Informe o RG`)
        objeto.media = 0 //vamos considerar que no cadastro a média do aluno é 0
        //insere objeto em vet
        vet.push(objeto)
        mat[i] = [] // cada linha da matriz é um vetor 
        alert(`${nome}, informe 4 notas do aluno ${objeto.nome}`)
        for(let j = 0; j < 4; j++) { // 4 notas
            mat[i][j] = Number(prompt(`Informe a nota ${j+1}`))
        }
    }
}

function consultaMediaAlunos(mat, vet) { // mat representa a matriz na função chefe
    for(let i = 0; i < 3; i++) { // para cada aluno
        for(let j = 0; j < 4; j++) { // para cada nota
            // soma no vetor na posicao i
            vet[i].media = vet[i].media + mat[i][j]
        }
        // acabaram as notas do aluno i
        vet[i].media = vet[i].media / 4
    }
    // acabaram os alunos
    console.log(vet)
}

function calculaMediaProvas(mat) {
    for(let j = 0; j < 4; j++) { // para cada nota
        let media = 0
        for(let i = 0; i < 3; i++) { // para cada aluno
            media = media + mat[i][j]
        }
        console.log(`A média da prova ${j+i} é ${media/3}`)
    }       
} 

function consultaMaiorNotaProvas(mat, vet) {
    for(let j = 0; j < 4; j++) { // para cada nota
        let maiorNota = [0][j] // assumo que a maior nota é do primeiro aluno
        let nomeMaiorNota = vet[0].nome //assumo que o nome do aluno com maior nota é do primeiro aluno
        for(let i = 0; i < 3; i++) { // para cada aluno
            if(mat[i][j] > maiorNota) {
                maiorNota = mat[i][j]
                nomeMaiorNota = vet[i].nome
            }
        }
        console.log(`A prova ${j+1} tem a maior nota ${maiorNota} do aluno ${nomeMaiorNota}`)
    }
}