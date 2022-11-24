import { input, adicionar, lista, contadorTarefas, limpar } from "./dom.js";

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
    "tarefa": input.value,
    "id": itens.length + 1
  };

  itens.push(novaTarefa);

  localStorage.setItem('itens', JSON.stringify(itens));

  quantidadeTarefas();

  input.value = '';
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
  
  removeTarefa();
};

function quantidadeTarefas() {
  const quantidade = itens.length;

  if (quantidade < 0) {
    contadorTarefas.innerHTML = '0';
  } else {
    contadorTarefas.innerHTML = quantidade;
  }
};

quantidadeTarefas();

function removeTarefa() {
  const remover = document.querySelectorAll('.fa-xmark');
  
  remover.forEach((task, index) => {
    
    task.addEventListener('click', (task) => {

      itens.splice(index, 1);

      localStorage.setItem('itens', JSON.stringify(itens));

      lista.innerHTML = '';

      itens.forEach(task => {
        criaTarefa(task.tarefa);
      });

      quantidadeTarefas();
    })
  });
};

limpar.addEventListener('click', (e) => {

  lista.innerHTML = '';

  localStorage.setItem('itens', JSON.stringify([]));

  contadorTarefas.innerHTML = '0';
});
