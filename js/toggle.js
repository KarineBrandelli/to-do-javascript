function load() {
  const toggleBtn = document.querySelector('.toggle-switch'); 

  toggleBtn.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark-mode");
  });

  console.log('caraca')
}

window.addEventListener("DOMContentLoaded", load);
