const toggleBtn = document.querySelector('.slider'); 

toggleBtn.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark-mode");
});
