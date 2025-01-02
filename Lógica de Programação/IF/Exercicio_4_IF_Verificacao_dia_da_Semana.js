const readline = require('readline');

const r1 = readline.createInterface({
input:process.stdin,
output:process.stdout
});

function perguntarDia(){
r1.question(" Por favor digite um número de 1 ao 7 sendo 1 = domingo, 2 segunda, etc.: " ,(resposta) => {
const diaSemana = parseInt(resposta);

if (diaSemana === 1) {
    console.log("É domingo!");
    r1.close();
} else if (diaSemana === 2) {
    console.log("É segunda-feira!");
    r1.close();
} else if (diaSemana === 3) {
    console.log("É terça-feira!");
    r1.close();
} else if (diaSemana === 4) {
    console.log("É quarta-feira!");
    r1.close();
} else if (diaSemana === 5) {
    console.log("É quinta-feira!");
    r1.close();
} else if (diaSemana === 6) {
    console.log("É sexta-feira!");
    r1.close();
} else if (diaSemana === 7) {
    console.log("É sábado!");
    r1.close();
}else{
    console.log("Número inválido! Por favor, digite um número entre 1 e 7.");
    perguntarDia();
}

});
}

perguntarDia();