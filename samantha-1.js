function resposta() {
    var resposta = prompt("1. Quebrar a barreira rápido para seguir o caminho. 2. Analisar com calma, pois pode ser uma armadilha. 3. Tentar passar pela barreira na base da força.");
    var tentativas = 1;

    for (var i=0; i <tentativas; i++) {

        if (resposta == "1") {
            alert("Você quebrou rapidamente a barreira e era uma armadilha, vocês foram capturados!");
            resposta = prompt(`Melhor tentar outra coisa.`);
        

        } else if (resposta == "2") {
            alert("Ao analisar melhor a barreira, você percebeu que era uma armadilha e conseguiu desativá-la antes de quebrar a barreira simples!");
            window.location.href="./samantha-2.html";
    

        } else if (resposta == 3) {
            alert("Vocês não conseguem passar a força e avisam os inimigos que o território está sendo invadido.")
            resposta = prompt(`Melhor tentar outra coisa.`);

        } else {
            alert("Resposta inválida");
        }
    }
}
