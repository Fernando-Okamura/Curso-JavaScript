const readline = require('readline');

const r1 = readline.createInterface({
input:process.stdin,
output:process.stdout
})

//jeito 2 de digitar um por vez (melhor)
r1.question("Por favor, digite o primeiro número: ", (resposta1) => {
    const numero1 = parseFloat(resposta1); // Converte o primeiro número para inteiro

    r1.question("Por favor, digite o segundo número: ", (resposta2) => {
        const numero2 = parseFloat(resposta2); // Converte o segundo número para inteiro

        if (numero1 === numero2) {
            console.log("Os números são iguais.");
        } else if (numero1 > numero2) {
            console.log("O número " + numero1 + " é maior que o " + numero2 + ".");
        } else {
            console.log("O número " + numero2 + " é maior que o " + numero1 + ".");
        }

        r1.close(); // Fecha a interface após exibir o resultado
    });
});

/*  jeito para digitar dois valores separados por uma espaço
r1.question("Por favor, digite dois números: ", (resposta) => {

const [numero1, numero2] = resposta.split(' ').map(Number);


if (numero1 === numero2){
    console.log("Os números são iguais.");
}else if (numero1 > numero2){
    console.log("O número "+ numero1 + " é maior que o " + numero2);
}else{ 
    console.log("O número "+ numero2 + " é maior que o " + numero1);
} 

r1.close();
});*/
