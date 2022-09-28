const listaDeTeclas = document.querySelectorAll('.tecla');

for(let index = 0; index < listaDeTeclas.length; index++){
    let tecla = listaDeTeclas[index];
    let instrumento = tecla.classList[1];
    let som = document.querySelector(`#som_${instrumento}`);
    tecla.onclick = function() {
        som.load();
        som.play();
    }

}
