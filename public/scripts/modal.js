// Função que será para abrir e fechar o modal de excluir pergunta 

export default function Modal(){

    const cancelButton = document.querySelector(".button.cancel");

    function open(){

        // Funcionalidade que irá adicionar a classe active especificada no modal.css ao arquivo html do modal então ela ficará visível
        document.querySelector('.modal-wrapper').classList.add("active");

    };

    
    function close(){

        // Funcionalidade que irá removar a classe active do modal
        document.querySelector('.modal-wrapper').classList.remove("active");

    };

    return {
        open,
        close
    }
    
}

