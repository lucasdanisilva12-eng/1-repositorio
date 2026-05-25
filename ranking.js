class Aluno{
    constructor(nome){
        this.nome = nome;
        this.matematica = [];
        this.portugues = [];
    }

    adicionaNota(nota, disciplina){
        if (disciplina == "matematica"){
            this.matematica.push(nota)
        }
        else if (disciplina == "portugues"){
            this.portugues.push(nota)
        }
    }

    media(array){
        let soma = 0;
        for (let nota of array){
            soma += nota;
        }
        return soma / array.length
    }

    calculaMedia(disciplina){
        if (disciplina == "matematica"){
            return this.media(this.matematica)
        }
        else if(disciplina == "portugues"){
            return this.media(this.portugues)
        }
        else{
            console.log("Disciplina não reconhecida.")
        }
    }
}

class Turma{
    constructor(nomeTurma){
        this.nomeTurma = nomeTurma;
        this.alunos = [];
    }

    criaRanking(disciplina){
        if (disciplina != "matematica" && disciplina != "portugues"){
            console.log("Disciplina não reconhecida")
            return
        }

        let medias = []
        // calcula as médias dos alunos
        for (let aluno of this.alunos){
            let mediaAluno = aluno.calculaMedia(disciplina)

            medias.push({
                nome: aluno.nome,
                media: mediaAluno
            })
        }

        for (let i = 0; i < medias.length; i++){
            let maior = i;
            let temp;

            for (let j = i + 1; j < medias.length; j ++){

                if (medias[j].media > medias[maior].media) {
                    maior = j;
                }

                temp = medias[i];
                medias[i] = medias[maior];
                medias[maior] = temp;
            }
        }

        return medias
    }
}


// Casos de teste

let a1 = new Aluno("Beltrano");
a1.adicionaNota(8, "matematica");
a1.adicionaNota(9, "matematica");

let a2 = new Aluno("Fulano");
a2.adicionaNota(10, "matematica");
a2.adicionaNota(7, "matematica");

let a3 = new Aluno("Ciclana");
a3.adicionaNota(10, "matematica");
a3.adicionaNota(9, "matematica");

let a4 = new Aluno("Tulio");
a4.adicionaNota(7, "matematica");
a4.adicionaNota(8, "matematica");
a4.adicionaNota(3, "matematica");

let a5 = new Aluno("Janio");
a5.adicionaNota(1, "matematica");
a5.adicionaNota(3, "matematica");
a5.adicionaNota(6, "matematica");

let turma = new Turma("3º Ano");

turma.alunos.push(a1);
turma.alunos.push(a2);
turma.alunos.push(a3);
turma.alunos.push(a4);
turma.alunos.push(a5);

console.log(turma.criaRanking("matematica"));
