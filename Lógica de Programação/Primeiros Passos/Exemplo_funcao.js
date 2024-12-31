function saudacao(nome) {
    return `Olá, ${nome}!`;
}
// para declarar a função colocamos function nomeDaFuncao(nome){
// return  devolve a mensagem para o usuário `Olá, ${nome}!  $indica a variável para adicionar}

function despedida(nome) {
    return `Tchau, ${nome}!`;
}

async function main() {
    const nome = "João";
    console.log(saudacao(nome));
    console.log(despedida(nome));
}

main(); // Ponto de partida


