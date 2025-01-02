const readline = require('readline');

const r1 = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

r1.question("Insira um número: ", (numero) => {
const tipoNumero = parseFloat(numero);

if (tipoNumero > 0){
    console.log(`O número ${numero} é positivo.`);
}else if( tipoNumero < 0){
    console.log(`O número  ${numero} é negativo`);
}else{
    console.log(`O número inserido é igual a 0.`);
}
r1.close();

})