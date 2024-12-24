// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Hamburger menu functionality
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Button interaction
const actionButton = document.getElementById('actionButton');
actionButton.addEventListener('click', function () {
  actionButton.textContent = 'Clicked!';
  alert('You clicked the button!');
  actionButton.disabled = true;
  actionButton.style.backgroundColor = '#aaa';
});
