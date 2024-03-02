// seleciona o formulário
const form = document.getElementById('form');

// funcao que é responsável pelo o calculo,
form.addEventListener('submit', function(e) {
    //reseta o padrão de envio do form
    e.preventDefault();

    //seleciona o campo input e irá guardar o valor
    const peso = document.getElementById('peso').value;
    const altura = document.getElementById('altura').value;

    //const que irá ser chamado para realizar o calculo.
    const resultImcCalc = (peso / (altura * altura)).toFixed(2);

    //pega a região que irá mostrar o resultado
    const infoDiv = document.getElementById('infoDiv');
    let description = '';

    //altera a cor padrão de verde para vermelho em todos;
    document.getElementById('infoDiv').classList.add('attetionDiv');
    document.getElementById('description').classList.add('attetionText');

    //irá remover a classe hidden que está ocultado e mostrará o resultado.
    document.getElementById('infoDiv').classList.remove('hidden');
    
    //condição sobre o resultado
    if (resultImcCalc < 18.5) {
        description = "Você está abaixo do peso!"
    } else if (resultImcCalc >= 18.5 && resultImcCalc <= 25) {
        description = "Você está no peso ideia!"
        //nesses document é capturado o local que mostra o resultado IMC e troca a cor deles para VERDE
        document.getElementById('infoDiv').classList.remove('attetionDiv');
        document.getElementById('infoDiv').classList.add('normalDiv');
        document.getElementById('description').classList.remove('attetionText');
        document.getElementById('description').classList.add('normalText');
    }else if (resultImcCalc >= 25 && resultImcCalc <= 30) {
        description = "Você está com sobrepeso!"
    }else if (resultImcCalc >= 30 && resultImcCalc <= 35) {
        description = "Você está com obesidade moderada!"
    }else if (resultImcCalc >= 35 && resultImcCalc <= 40) {
        description = "Você está com obesidade severa!"
    }else {
        description = "Você está com obesidade morbida!"
    }

    //exibe o resultado do IMC.
    document.getElementById('description').textContent = "Seu IMC é: " + `${description} ` + `${resultImcCalc}`;

});

//esconde o resultado e limpa a tela.
function limpar () {
    document.getElementById('infoDiv').classList.add('hidden');
}