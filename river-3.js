function resposta() {
    var resposta = prompt("1. Ajudar esses moradores, fazendo chover e aumentando a taxa de crescimento dos alimentos. 2. Desejar boa sorte e seguir o caminho. 3.Atacar os moradores, pois a experiência em guerra impede que você seja piedoso.");
    var tentativas = 1;

    for (var i = 0; i < tentativas; i++) {

        if (resposta == "1") {
            alert("Parabéns, você deixou de lado o orgulho e ajudou as pessoas! Em troca dessa ajuda, os moradores contraram que já trabalharam no castelo e que há uma entrada secreta no armazém!");
            window.location.href = "./river-4.html";


        } else if (resposta == "2") {
            alert("Não ajudar os moradores pode custar caro para você no final!");
            resposta = prompt(`Melhor tentar outra coisa.`);


        } else if (resposta == "3") {
            alert("Você matou os moradores e foi descoberto pelo rei inimigo, sendo morto.")
            resposta = prompt(`Melhor tentar outra coisa.`);

        } else {
            alert("Resposta inválida");
        }
    }
    
}