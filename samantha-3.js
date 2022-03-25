function resposta() {
    var resposta = prompt("1. Colocar o gigante para dormir com um pó mágico. 2. Atacar o gigante com as magias mais poderosas que tiver para imobilizá-lo. 3. Sair correndo.");
    var tentativas = 1;

    for (var i=0; i <tentativas; i++) {

        if (resposta == "1") {
            alert("Essa é a melhor opção, essa raça de gigantes é imune a magia.");
            window.location.href="./samantha-4.html";
        

        } else if (resposta == "2") {
            alert("Gigantes são imunes a magias!");
            resposta = prompt(`Melhor tentar outra coisa.`);
    

        } else if (resposta == "3") {
            alert("A missão falhou!")
            resposta = prompt(`Melhor tentar outra coisa.`);

        } else {
            alert("Resposta inválida");
        }
    }
}
