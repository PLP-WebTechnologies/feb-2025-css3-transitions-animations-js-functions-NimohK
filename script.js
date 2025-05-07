// Retrieve name from localStorage on page load
window.onload = function () {
    const savedName = localStorage.getItem('userName');
    if (savedName) {
      document.getElementById('greeting').textContent = `Welcome back, ${savedName}!`;
    }
  };
  
  // Save name to localStorage
  function saveName() {
    const name = document.getElementById('nameInput').value;
    localStorage.setItem('userName', name);
    document.getElementById('greeting').textContent = `Welcome, ${name}!`;
  }
  
  // Add bounce animation on button click
  function triggerAnimation(button) {
    button.classList.add('bounce');
    setTimeout(() => button.classList.remove('bounce'), 600);
  }
  