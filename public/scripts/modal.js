// Função que será para abrir e fechar o modal de excluir pergunta 
export default function Modal(){
    
    const modalWrapper = document.querySelector('.modal-wrapper');
    const cancelButton = document.querySelector('.button.cancel');

    cancelButton.addEventListener('click', close);

    function open(){

        // Funcionalidade que irá adicionar a classe active especificada no modal.css ao arquivo html do modal então ela ficará visível
        modalWrapper.classList.add("active");

    }
    
    function close(){

        // Funcionalidade que irá removar a classe active do modal
        modalWrapper .classList.remove("active");

    }

    return {
        open,
        close
    }
}

