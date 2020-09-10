chefe()

function chefe() {
    // declarar a matriz
    let matriz = [] //uma matriz é um vetor
    // vamos criar a matriz com 3 linhas
    matriz[0] = [] // cada linha da matriz é um vetor
    matriz[1] = [] // cada linha da matriz é um vetor
    matriz[2] = [] // cada linha da matriz é um vetor
    cadastra(matriz) // cadastra 3 alunos
    consultaMediaAlunos(matriz) // calcula a média das notas

}

function cadastra(mat) { // mat representa a matriz na função chefe
    for(let i = 0; i < 3; i++) { // são 3 alunos
        alert(`Informe 4 notas ${i+1}`)
        for(let j = 0; j < 4; j++) { // 4 notas
            mat[i][j] = Number(prompt(`Informe a nota ${j+1}`))
        }
    }
}

function consultaMediaAlunos(mat) { // mat representa a matriz na função chefe
    let medias = [0]
    for(let i = 0; i < 3; i++) { // pára cada aluno
        medias[i] = 0 //
        for(j = 0; j < 4; j++) { // para cada nota
            // soma no vetor na posicao i
            medias[i] = medias[i] + mat[i][j]
        }
        // acabaram as notas do aluno i
        medias[i] = medias[i]/4
    }
    // acabaram os alunos
    console.log(`Valor das médias ${medias}`)
}