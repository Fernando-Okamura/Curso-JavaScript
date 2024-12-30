const { stdout } = require('process');
const readline = require('readline');

const r1 = readline.createInterface({

    input: process.stdin,

    output: process.stdout

});

function fazerPergunta(pergunta){

    return new Promise((resolve) => {

        r1.question(pergunta, (resposta) => {
            resolve(resposta);
        });
    });

}
async function coletarRespostas() {
    const nome = await fazerPergunta('Qual é o seu nome? ');
    const corFavorita = await fazerPergunta('Qual é a sua cor favorita? ');
    const animalFavorito = await fazerPergunta('Qual é o seu animal favorito? ');
    const hobby= await fazerPergunta('Qual é o seu hobby? ');
    const pratoFavorito = await fazerPergunta('Qual é o seu prato favorito? ');
    const timeFutebol = await fazerPergunta('Qual é o seu time de futebol? ');

    console.log(`\nAqui estão as suas respostas:
        Nome: ${nome}
        Cor Favorita: ${corFavorita}
        Animal Favorito: ${animalFavorito}
        Hobby: ${hobby}
        Prato favorito: ${pratoFavorito}
        Time de futebol: ${timeFutebol}
        `)

        r1.close();
    
}

coletarRespostas();