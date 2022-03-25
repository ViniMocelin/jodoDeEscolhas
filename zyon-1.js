function resposta() {
    var resposta = prompt("1) Se recusar a ir, pois é arriscado demais. 2) Esperar anoitecer para fazer o reconhecimento. 3) Ir imediatamente para completar a missão o quanto antes.");
    var tentativas = 1;

    for (var i=0; i <tentativas; i++) {

        if (resposta == "1") {
            alert("Você falhou na missão por ser egoísta!");
            resposta = prompt(`Melhor tentar outra coisa.`);
        

        } else if (resposta == "2") {
            alert("Perfeito! VocÊ age melhor quando escurece!");
            window.location.href="./zyon-2.html";
    

        } else if (resposta == 3) {
            alert("Você saiu e foi avistado pela guarda real que passava por ali.")
            resposta = prompt(`Melhor tentar outra coisa.`);

        } else {
            alert("Resposta inválida");
        }
    }
}
