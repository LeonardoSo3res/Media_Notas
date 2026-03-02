
let nota1= Number(prompt ("Digite a Primeira nota:")); 
 
let nota2= Number(prompt ("Segunda nota:")); 
  
 
 
 
const array = [nota1, nota2];

alert(mediadoAluno(array));

function mediadoAluno(notas){
    const media = calcularMedia(notas);

    if (media < 4.5 ) return 'Aluno Reprovado'
    if (media < 6.5 ) return 'Aluno em Recuperação'
    return 'Aluno Aprovado';
}

function calcularMedia(array){
    let soma = 0;
    for (let valor of array){
        soma += valor;
    }
    return soma / array.length;
}





/*Desenvolva um aplicativo que leia duas notas digitadas pelo usuário e mostre a média e a situação de um aluno
(de 0 a 4,5 – Aluno Reprovado, de 5 a 6,5 – Aluno em Recuperação e de 7 a 10 – Aluno Aprovado).*/