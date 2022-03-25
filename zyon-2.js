function resposta() {
    var resposta = prompt("1) Atacar o mais rápido possível para não correr o risco deles informarem as tropas inimigas. 2) Ignorar e seguir o caminho de vocês. 3) Abordá-los e ver o porquê deles estarem chorando.");
    var tentativas = 1;

    for (var i=0; i <tentativas; i++) {

        if (resposta == "1") {
            alert("Você foi impiedoso demais e perdeu informações importantes para o sucesso da missão.");
            resposta = prompt(`Melhor tentar outra coisa.`);
        

        } else if (resposta == "2") {
            alert("Você os ignorou e perdeu informações ainda corre o risco de ser descoberto!");
            resposta = prompt(`Melhor tentar outra coisa.`);
    

        } else if (resposta == "3") {
            alert("Você abordou e descobriu que eles não gostam do novo rei e estavam com fome!")
            window.location.href="./zyon-3.html";

        } else {
            alert("Resposta inválida");
        }
    }
}
