import { input, adicionar, lista, contadorTarefas} from "./dom.js";

const itens = JSON.parse(localStorage.getItem('itens')) || [];

itens.forEach(task => {
  criaTarefa(task.tarefa);
});

itens.forEach(amount => {
  quantidadeTarefas(amount.quantidade);
})

adicionar.addEventListener('click', (event) => {
  event.preventDefault();

  criaTarefa(input.value);

  let novaTarefa = {
    "tarefa": input.value
  };

  itens.push(novaTarefa);

  localStorage.setItem('itens', JSON.stringify(itens));

  quantidadeTarefas();
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

function quantidadeTarefas() {
  const quantidade = itens.length;

  contadorTarefas.innerHTML = quantidade;
};
