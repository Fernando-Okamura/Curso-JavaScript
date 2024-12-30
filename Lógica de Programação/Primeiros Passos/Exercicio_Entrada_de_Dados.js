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

r1.close();

}
coletarRespostas();