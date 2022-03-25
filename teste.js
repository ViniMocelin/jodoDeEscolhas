function validaçãoResposta(resposta) {
    var count = 0;
    var respostas = ['1', '2', '3'];

    while (count < respostas.length) {
        if (resposta == respostas[count]) {
            return true;
        } else {
            count++;
        }
    }

    return false;
};

// Função que processa a resposta
function resposta(answer, nextPage) {
    var count = 1;

    while (true) {
        var resposta = prompt('Digite sua resposta').toLowerCase();
        var valida = validaResposta(resposta);

        if (valida) {

            if (resposta == answer) {

                alert('Você fez a escolha certa!');
                window.location.href = nextPage;
                break;

            } else {

                alert('Escolha errada tente mais uma vez!');
                count++;
            }

            if (count > 3) {
                window.location.href = 'gameOver.html';
                break;
            };

        } else {
            alert('resposta inválida!');
        };
    };
};