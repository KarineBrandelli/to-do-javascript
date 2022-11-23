const input = document.querySelector('.new-content');
const adicionar = document.querySelector('.fa-plus');
const lista = document.querySelector('.todo-list');

const itens = JSON.parse(localStorage.getItem('itens')) || [];

console.log(itens)

itens.forEach(task => {
  criaTarefa(task.tarefa);
});

adicionar.addEventListener('click', (event) => {
  event.preventDefault();

  criaTarefa(input.value);

  let novaTarefa = {
    "tarefa": input.value
  };

  itens.push(novaTarefa);

  localStorage.setItem('itens', JSON.stringify(itens));
});

function criaTarefa(input) {
  const template = `
  <div class="list-items">
  <span class="todo-task">
    <i class="fa-regular fa-circle-check"></i>
    <p class="task-content">${input}</p>
  </span>
  <i class="fa-solid fa-xmark"></i>
  </div>
  `

  lista.innerHTML += template;
};
