function resposta() {
    var resposta = prompt("1) Atacar a feiticeira enquanto ela foca em Zyon. 2) Criar a barreira mais forte que conseguir, enquanto espera Zyon abrir o cofre. 3) Sair de lá o quanto antes, o inimigo é muito forte.");
    var tentativas = 1;

    for (var i=0; i <tentativas; i++) {

        if (resposta == "1") {
            alert("A feitceira derroutou Zyon no processo, a missão falhou.");
            resposta = prompt(`Melhor tentar outra coisa.`);
        

        } else if (resposta == "2") {
            alert("Ao proteger Zyon, você permitiu que ele abrisse o cofre!");
            window.location.href="./victory.html";
    

        } else if (resposta == 3) {
            alert("Todos foram capturados.")
            resposta = prompt(`Melhor tentar outra coisa.`);

        } else {
            alert("Resposta inválida");
        }
    }
}