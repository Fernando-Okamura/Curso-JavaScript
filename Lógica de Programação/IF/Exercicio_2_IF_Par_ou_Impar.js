const readline = require('readline');

const r1 = readline.createInterface({
input:process.stdin,
output:process.stdout
});

r1.question("Digite um número: ", (entrada) => {
    const numero = parseInt(entrada);

    if (numero % 2 === 0){
        console.log("O número " + numero + " é par.")
    }else{
        console.log("O número " + numero + " é ímpar.")
    }

r1.close();

});