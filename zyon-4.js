function resposta() {
    var resposta = prompt("1) Sacrificar a mão, pegar a jóia e fugir. 2) Abandonar a missão, afinal suas mãos são muito importantes. 3) Abater um guarda e usar a mão dele para abrir.");
    var tentativas = 1;

    for (var i=0; i <tentativas; i++) {

        if (resposta == "1") {
            alert("Na hora parece uma ótima e nobre opção, mas River não está ai para te curar. Futuramente vai se arrepender e perder a habilidade de abrir cofres!");
            resposta = prompt(`Melhor tentar outra coisa.`);
        

        } else if (resposta == "2") {
            alert("Você é um covarde, fugiu e foi capturado!");
            resposta = prompt(`Melhor tentar outra coisa.`);
    

        } else if (resposta == "3") {
            alert("Você foi muito esperto e usou sua velocidade para pegar um guarda desprevenido e usá-lo para abrir a sala!")
            window.location.href="./victory.html";

        } else {
            alert("Resposta inválida");
        }
    }
}