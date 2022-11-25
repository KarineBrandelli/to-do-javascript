const toggleBtn = document.querySelector('.slider');
const darkmodeBg = document.querySelector('#header-bg'); 

toggleBtn.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark-mode");
  darkmodeBg.classList.toggle("dark-mode-img");
});
