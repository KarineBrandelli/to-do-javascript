const input = document.querySelector('.new-content');
const adicionar = document.querySelector('.fa-plus');
const lista = document.querySelector('.todo-list');
const conteudoTarefa = document.querySelector('.task-content');


adicionar.addEventListener('click', (event) => {
  event.preventDefault();

  adicionaTarefa(input);
});

function adicionaTarefa(input) {
  const novaTarefa = input.value;

  conteudoTarefa.innerHTML = novaTarefa;

  console.log(novaTarefa)
};
