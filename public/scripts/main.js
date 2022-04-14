import Modal from './modal.js';

const modal = Modal();

// Pegar todos os botões com a classe check

const checkButtons = document.querySelectorAll(".actions a.check");

checkButtons.forEach(button => { 

    // Adicionar a escuta quando econtecer o click

    button.addEventListener('click', event => {

     // Irá abrir o modal
    modal.open();

    });

   
});




// Precisamos saber quando o marcar como lida for clicado

