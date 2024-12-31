let numero = 10;

if (numero > 5) {
    console.log("O número é maior que 5.");
}else{
    console.log("O número não é maior do que 5.");
}

/* existem alguns símbolos para estudar
< (menor)
> (maior)
<=(menor ou igual)
>= (maior ou igual)   e !== (diferente)
===(igual a)
&& (é usado para dizer e)
|| (é usado para dizer ou)
*/

let idade = 32;

let possuiCarteiraDeMotorista = true;
if (idade >=18 && possuiCarteiraDeMotorista){
    console.log("Você é maior de idade e possui carteira de motorista");
}else{
    console.log("Não possui carteira de motorista ou é menor de idade.");
    }

    let diaDaSemana = "sábado";

    if( diaDaSemana === "sábado" || diaDaSemana === "domingo"){
        console.log("É fim de semana");
    }else{
        console.log("É dia da semana");
    }
