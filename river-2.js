
function resposta() {
    var resposta = prompt(" 1. Seguir pelo caminho do fluxo do rio (o mais longo). 2.Ir pela cidade e lutar com os guardas que encontrar (caminho mais rápido). 3. Se dividir e deixar um dos três responsável por atrair a atenção dos guerreiros inimigos.");
    var tentativas = 1;

    for (var i=0; i <tentativas; i++) {

        if (resposta == "1") {
            alert("Apesar de ser o caminho mais longo, é o caminho mais seguro para você, principalmente porque é na água onde você recarrega as energias. Você precisa estar 100% nessa missão")
            window.location.href = "./river-3.html"
        

        } else if (resposta == "2") {
            alert("Essa não é uma missão de batalhe, lute o mínimo possível");
            resposta = prompt(`Melhor tentar outra coisa.`);
    

        } else if (resposta == "3") {
            alert("Se dividir é uma péssima opção quando está em território inimigo, mantenham-se unidos!");
            resposta = prompt(`Melhor tentar outra coisa.`);
        } else {
            alert("Resposta inválida")
        }
    
    }
}