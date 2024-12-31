const readline = require('readline');

const r1 = readline.createInterface({

    input:process.stdin,
    output:process.stdout
});

function fazerPergunta(pergunta){

    return new Promise((resolve) => {
        r1.question (pergunta, (resposta) => {
            resolve(resposta);
        });
    });

}


async function coletarRespostas() {
    const nome = await fazerPergunta ('Qual é o seu nome? ')
    const idade = await fazerPergunta ('Qual é a sua idade? ')
    const cidadeUsuario = await fazerPergunta ('Qual é a cidade do usuário? ')
    


console.log (`\nOs dados informados são:       
    Nome: ${nome}
    Idade: ${idade}
    Cidade do Usuário: ${cidadeUsuario}
`)                                         
// \n indica quebra de linha(pula uma linha), 
// daria apenas colocar Os dados informados são na linha de baixo por estar
//  com `ele já deixa o texto do jeito que adicionar. igual fiz abaixo...
/*
console.log (`
Os dados informados são:       
    Nome: ${nome}
    Idade: ${idade}
    Cidade do Usuário: ${cidadeUsuario}
    `)*/

console.log (`Olá, ${nome}!  Você tem ${idade} anos e mora em ${cidadeUsuario}.`);

r1.close();

}
coletarRespostas();