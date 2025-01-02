const readline = require('readline');

const r1 = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

r1.question ('Qual é o sua idade?: ', (resposta)  => {
    const idade = parseInt(resposta);

    if (idade >= 18){
        console.log("Você é maior de idade.")
        }else{
        console.log("Você é menor de idade.")
        }

    r1.close();
});



    
    
    