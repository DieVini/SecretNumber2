//aumentar o intervalo de tentativas
//limitar o numero de tentativas
//desabilitar e habilitar o input

//variaveis
let secret_number = getSecretNumber();
let trys = 1;

//funções
function getSecretNumber(){
    return Math.floor(Math.random()*100+1);
}
function exibeTextoTag(tag,texto){  
    let varTag = document.querySelector(tag);
    varTag.innerHTML = texto;
    responsiveVoice.speak(texto, 'UK English Male');    
}
function inicializaTexto(){
    exibeTextoTag('h1','Secret Number');
    exibeTextoTag('p','Type a number from 1 to 10, you have 10 attempts');
}
function verificarChute(){
    let guess = document.querySelector('input').value;
    if(guess == secret_number){
        let word_attempts = trys > 1 ? 'attempts': 'attempt';
        exibeTextoTag('h1','Congratulations');
        exibeTextoTag('p', `You won with ${trys} ${word_attempts}`);
        desabilitarImput();
        resetBotoes(); //botão desativado, para começar outro jogo precisar clicar no botão novo jogo    
    }
    else{
        if(guess < secret_number){
            exibeTextoTag('p','Wrong, try again the number is higherㅤㅤㅤㅤㅤㅤ');
        }
        else{
            exibeTextoTag('p','Wrong, try again the number is lowerㅤㅤㅤㅤㅤㅤ');
        }
        trys++;
    }
    if(trys == 10){
        exibeTextoTag('p', 'YOU LOST');
        desabilitarImput();
        resetBotoes();
    }
    limpaImput();
}
function desabilitarImput(){
    document.querySelector('input').disabled = true;
}
function habilitarImput(){
    document.querySelector('input').removeAttribute('disabled');
}
function resetBotoes(){
    document.getElementById('reiniciar').removeAttribute('disabled');
    document.getElementById("chutar").disabled = true;
}
function limpaImput(){
    document.querySelector('input').value = '';      
}
function novojogo(){ //iniciar um novo jogo com tudo resetado
    trys = 1;
    secret_number = getSecretNumber();
    inicializaTexto();
    document.getElementById('chutar').removeAttribute('disabled');
    document.getElementById('reiniciar').disabled = true;
    habilitarImput();
    limpaImput();
}
inicializaTexto(); //inicializa o texto quando entra ou atualiza a pagina