function addtarefas() { // add uma nova tarefa a lista
    const taskinput = document.getElementById('taskinput'); // obtém o input de tarefa
    const tasklist = document.getElementById('tasklist'); // obtém o input de tarefa
    const tasktext = taskinput.value.trim(); // obtém o valor do input e remove espaços extras
    if (tasktext !== '') { // verifica se o texto da tarefa não está vazio
        const listItem = document.createElement('li'); // cria um novo item
        listItem.textContent = tasktext; //define o texto do itemde lista

        const deleteBTN = document.createElement('span'); // cria o botão de apagar
        deleteBTN.textContent = 'x'; // define o texto do  botão 
        deleteBTN.className = 'delete'; //define a classe CSS para o botão
        deleteBTN.onclick = function() {  // adiciona um evento evento de clique para apagar a tarefa
            tasklist.removeChild(listItem); // remove o item da lista
        };

        listItem.appendChild(deleteBTN); //add o botão de apagar ao intem da lista
        tasklist.appendChild(listItem); // add o intem da lista á lista de tarefas
        taskinput.value = ''; // limpa o input de tarefa
    }
}

document.getElementById('taskinput').addEventListener('keypress', function(e) {// add um evento de tecla ao input de tarefa
    if (e.key === 'Enter') {//verifica se a tecla pressionada é 'Enter'
        addtarefas(); // chama a função para add a tarefa
}
});