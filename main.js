const listaDeTeclas = document.querySelectorAll('.tecla');
const listaDeSons = document.querySelectorAll('audio');

for(i = 0; i < listaDeTeclas.length; i++){
    let index = i;
    listaDeTeclas[index].onclick = function() {
        listaDeSons[index].load();
        listaDeSons[index].play();
    }
}