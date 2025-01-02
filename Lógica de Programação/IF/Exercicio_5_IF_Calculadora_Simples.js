const readline = require('readline');

const r1 = readline.createInterface({
input:process.stdin,
output:process.stdout
});

r1.question('Digite o primeiro número: ', (num1) =>{

    r1.question('Digite o segundo número: ', (num2) =>{


r1.question('Digite a operação desejada:(+,-,*,/) ', (operacao) =>{
    
    let resultado;
    const numero1 =parseFloat(num1);
    const numero2 =parseFloat(num2);

    if(operacao === '+'){
    resultado = numero1 + numero2;
    }else if(operacao === '-'){
    resultado = numero1 - numero2;
        }else if(operacao === '*'){
            resultado = numero1 * numero2;
        }else if(operacao === '/'){
            if (numero2 !== 0){
                resultado = numero1 / numero2;
            }else{

                resultado = 'Erro: Divisão por zero não é permitida.'
            }

        }else {

            resultado = 'Operação inválida.';
        }
                console.log(`Resultado: ${resultado}`);
                r1.close();
        
        });
    });
});










