const listaDeTeclas = document.querySelectorAll('.tecla');

procuraTecla = function(index){
    if(index > listaDeTeclas.length || index < 0){
        console.log('Ocorreu um erro...');
        return;
    }
    return tecla = listaDeTeclas[index];

}

tocaSomDaTecla = function(tecla){
    try{
        let instrumento = tecla.classList[1];
        let som = document.querySelector(`#som_${instrumento}`);
        if(som != null && som.localName == 'audio'){
            som.load();
            som.play();
        }
    }catch{
        console.log('Ocorreu um erro...');
    }

}

procuraIndexPeloNumpad = function(key_event){
    if(!key_event.isTrusted){
        console.log('Ocorreu um erro...');
        return;
    }
    
    let numpadIndex = parseInt(key_event.code.replace('Numpad',''));
    let index;
    if(numpadIndex / 3 <= 1){
        index = (numpadIndex + 5);
    }else if(numpadIndex / 3 <= 2){
        index = (numpadIndex - 1);
    }else if(numpadIndex / 3 <= 3){
        index = (numpadIndex - 7);
    }
    return index;

}

for(let index = 0; index < listaDeTeclas.length; index++){
    let tecla = procuraTecla(index);
    tecla.onclick = function() {
        tocaSomDaTecla(tecla);
    }

}

document.onkeydown = function(evento) {
    if (evento.keyCode >= 97 && evento.keyCode <= 105){
        let index = procuraIndexPeloNumpad(evento);
        let tecla = procuraTecla(index);
        tecla.classList.add('ativa');
        tocaSomDaTecla(tecla);
    }

}

document.onkeyup = function(evento) {
    if (evento.keyCode >= 97 && evento.keyCode <= 105){
        let index = procuraIndexPeloNumpad(evento);
        let tecla = procuraTecla(index);
        tecla.classList.remove('ativa');
    }
    
}
