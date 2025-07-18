document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.getElementById('themeToggle');
  toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark');
  });
});
