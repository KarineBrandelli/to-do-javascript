const input = document.querySelector('.new-content');
const adicionar = document.querySelector('.fa-plus');
const lista = document.querySelector('.todo-list');

adicionar.addEventListener('click', (event) => {
  event.preventDefault();

  criaTarefa(input);

  console.log('clicou')
});

function criaTarefa(input) {
  const novaTarefa = input.value;
  const template = `
  <div class="list-items">
  <span class="todo-task">
    <i class="fa-regular fa-circle-check"></i>
    <p class="task-content">${input.value}</p>
  </span>
  <i class="fa-solid fa-xmark"></i>
  </div>
  `

  lista.innerHTML += template;
  
  console.log('adicionou')
};
