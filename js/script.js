const input = document.querySelector('.new-content');
const adicionar = document.querySelector('.fa-plus');
const lista = document.querySelector('.todo-list');


adicionar.addEventListener('click', (event) => {
  event.preventDefault();

  adicionaTarefa(input);
});

function adicionaTarefa(input) {
  const novaTarefa = input.value;

  console.log(novaTarefa)
};
