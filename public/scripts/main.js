import Modal from './modal.js';

const modal = Modal()

// Selecionar os h1 p do modal para mudar sua extrutura com Javascript 
const modalTitle = document.querySelector('.modal h2');
const modalDescription = document.querySelector('.modal p');
const modalButton = document.querySelector('.modal button');


// Pegar todos os botões com a classe check
const checkButtons = document.querySelectorAll(".actions a.check");

checkButtons.forEach(button => { 

    // Adicionar a escuta quando econtecer o click
    button.addEventListener('click', handleClick);

});

// Quando o usuário clicar em excluir o modal irá aparecer para ele realizar a confirmação da exclusão
const deleteButton = document.querySelectorAll(".actions a.delete");

deleteButton.forEach(button => {
    // Adicionar a escuta quando econtecer o click
    button.addEventListener("click", (event) => handleClick(event, false));
});

function handleClick(event, check = true) {

    event.preventDefault();

    const text = check ? "Marcar como lida" : "Excluir";

    const slug = check ? "check" : "delete";

    const roomId = document.querySelector("#room-id").dataset.id;

    const questionId = event.target.dataset.id;

    // Isso altera o action do formulário para post quando o usuário quiser marcar como lida ou excluir uma pergunta
    const form = document.querySelector('.modal form');
    form.setAttribute("action", `/question/${roomId}/${questionId}/${slug}`);
    
    modalTitle.innerHTML = `${text} esta pergunta`;
    modalDescription.innerHTML = `Tem certeza que deseja ${text.toLocaleLowerCase()} esta pergunta?`;
    modalButton.innerHTML = `Sim, ${text.toLocaleLowerCase()}`

    check ? modalButton.classList.remove("red") : modalButton.classList.add("red");
 
    // Chamando a função de abrir modal
    modal.open();
}
    

