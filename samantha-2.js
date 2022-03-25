function resposta() {
    var resposta = prompt("1) Ao chegar no castelo, vocês irão causar uma explosão na parte contrária de onde vão entrar, para que os guardas se dirijam para esse local. 2. Ao chegar no castelo, vocês irão procurar alguma entrada de serviço e se esgueirar por ela,  invisíveis. 3. Ao chegar no castelo, vocês irão combinar poderes e destruir tudo.");
    var tentativas = 1;

    for (var i=0; i <tentativas; i++) {

        if (resposta == "1") {
            alert("A explosão é uma boa ideia e talvez seja útil no futuro, mas não para entrar pela primeira vez.");
            resposta = prompt(`Melhor tentar outra coisa.`);
        

        } else if (resposta == "2") {
            alert("Invisibilidade sempre é a melhor habilidade furtiva e entrar por entradas de serviço é uma ótima ideia!");
            window.location.href="./samantha-3.html";
    

        } else if (resposta == 3) {
            alert("Vocês não tem força pra isso.")
            resposta = prompt(`Melhor tentar outra coisa.`);

        } else {
            alert("Resposta inválida");
        }
    }
}
