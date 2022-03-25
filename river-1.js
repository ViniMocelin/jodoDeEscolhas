function resposta() {
    var resposta = prompt("1.Ouvir o plano de Samantha e seguí-lo. 2. Criar uma bolha de água e se descolcar pelo fundo do lago.3. Criar uma neblina e usá-la como corta luz para se chegar até o reino.");
    var tentativas = 1;

    for (var i=0; i < tentativas; i++) {

        if (resposta == "1" || i==1) {
            alert("Você é teimoso demais para seguir o plano. Samantha não lida bem com imprevistos!");
            resposta = prompt(`Melhor tentar outra coisa.`);
    
        } else if (resposta == "2") {
            alert("Infelizmente nem todos vão conseguir respirar embaixo d'água!");
            resposta = prompt(`Melhor tentar outra coisa.`);
        

        } else if (resposta == "3") {
            alert("A neblina é o melhor jeito de confundir os inimigos, assim vocês conseguem atravessar o lago sem serem vistos!")
            window.location.href = "./river-2.html";

        } else {
            alert("Resposta inválida");
        }
    }
}
