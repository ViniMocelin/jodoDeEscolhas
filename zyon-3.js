function resposta() {
    var resposta = prompt("1) Salada de batatas. 2) Sorvete napolitano com cobertura de chocolate. 3) Sanduíche de bacon.");
    var tentativas = 1;

    for (var i=0; i <tentativas; i++) {

        if (resposta == "1") {
            alert("Essa é a melhor opção, gostosa, nutritiva e não deixa cheiro.");
            window.location.href="./zyon-4.html";
        

        } else if (resposta == "2") {
            alert("No sorvete napolitano tem morango e você é alérgico! Parabéns acaba de ter uma crise!");
            resposta = prompt(`Melhor tentar outra coisa.`);
    

        } else if (resposta == "3") {
            alert("Você comeu bacon e o cheiro entregou sua localização!")
            resposta = prompt(`Melhor tentar outra coisa.`);

        } else {
            alert("Resposta inválida");
        }
    }
}
