varH1 = document.querySelector('h1');
varH1.innerHTML = 'Secret Number';
varP = document.querySelector('p');
varP.innerHTML = 'Type a number from 1 to 10';

let secret_number = Math.floor(Math.random()*10+1);
let trys = 1;

function verificarChute(){
    let guess = document.querySelector('input').value;
    if(guess == secret_number){
        let word_attempts = trys > 1 ? 'attempts': 'attempt';
        varH1.innerHTML = 'Congratulations';
        varP.innerHTML = `You won with ${trys} ${word_attempts}`;
        document.getElementById('reiniciar').removeAttribute('disabled');
        document.getElementById("chutar").disabled = true; //botão desativado, para começar outro jogo precisar clicar no botão novo jogo
    }
    else{
        if(guess < secret_number){
            varP.innerHTML = 'Wrong, try again the number is higher';
        }
        else{
            varP.innerHTML = 'Wrong, try again the number is lower';
        }
        trys++;
    }       
}
function novojogo(){ //iniciar um novo jogo com tudo resetado
    trys = 1;
    secret_number = Math.floor(Math.random() * 10 + 1);
    varH1.innerHTML = 'Secret Number';
    varP.innerHTML = 'Type a number from 1 to 10';
    document.getElementById('chutar').removeAttribute('disabled');
    document.getElementById('reiniciar').disabled = true;
    document.querySelector('input').value = '';
}