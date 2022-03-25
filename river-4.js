function resposta() {
    var resposta = prompt("1. Pedir para que Samantha faça algo. 2. Atacar os inimigos e abrir caminho. 3. Ir para fora e atrair os inimigos cobrindo o castelo com cipós, indicando que alguém quer invadir.");
    var tentativas = 1;

    for (var i=0; i <tentativas; i++) {

        if (resposta == "1") {
            alert("Você é o lider, nunca pediria para alguém resolver esse problema por você!");
            resposta = prompt(`Melhor tentar outra coisa.`);
        

        } else if (resposta == "2") {
            alert("Isso só vai atrair mais inimigos onde vocês estão!");
            resposta = prompt(`Melhor tentar outra coisa.`);
    

        } else if (resposta == "3") {
            alert("Indo para fora você conseguiu atrair a atenção dos guardas e todos os que estavam no andar foram convocados para deter o intruso!")
            window.location.href = "./victory.html";

        } else {
            alert("Resposta inválida");
        }

    }
}
