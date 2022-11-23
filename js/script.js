const input = document.querySelector('.new-content');
const adicionar = document.querySelector('.fa-plus');
const lista = document.querySelector('.todo-list');


adicionar.addEventListener('click', (event) => {
  event.preventDefault();
  console.log(input.value)
})
