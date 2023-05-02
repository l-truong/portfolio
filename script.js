const lightdarkSwitch = document.querySelector('.light-dark-mode-button');
const body = document.body;
const portfolioButton = document.querySelector('.portfolio-button');
const skillsButton = document.querySelector('.skills-button');
const gallery = document.querySelector('.gallery');
const skills = document.querySelector('.skills');
const btn = document.querySelector('.top-button');

// Portfolio Tab
function portfolioTab() {
    skillsButton.classList.replace('button-pressed', 'button-not-pressed');
    portfolioButton.classList.replace('button-not-pressed', 'button-pressed');
    gallery.style.display = 'flex';
    skills.style.display = 'none';
    localStorage.setItem('tab', 'potfolio');    
}

// Skills Tab
function skillsTab() {
    portfolioButton.classList.replace('button-pressed', 'button-not-pressed');
    skillsButton.classList.replace('button-not-pressed', 'button-pressed');
    gallery.style.display = 'none';
    skills.style.display = 'block';    
    localStorage.setItem('tab', 'skills');
}

// Dark Mode Styles
function darkMode() {
    body.classList.remove('light-mode'); 
    body.classList.add('dark-mode');
    document.getElementsByTagName( 'html' )[0].style.background = "rgb(12, 21, 29)";
    lightdarkSwitch.children[0].classList.replace('fa-moon', 'fa-sun');
}

// Light Mode Styles
function lightMode() {
    body.classList.remove('dark-mode'); 
    body.classList.add('light-mode');
    document.getElementsByTagName( 'html' )[0].style.background = "rgb(233, 235, 236)";
    lightdarkSwitch.children[0].classList.replace('fa-sun', 'fa-moon');
}

// Switch Theme
function switchTheme(event) {    
    if (localStorage.getItem('theme') === 'light' || localStorage.getItem('theme') === null) {
        localStorage.setItem('theme', 'dark'); 
        darkMode();    
    } else {
        localStorage.setItem('theme', 'light');        
        lightMode();
    }
}

// Event Listener
portfolioButton.addEventListener('click', portfolioTab);
skillsButton.addEventListener('click', skillsTab);
lightdarkSwitch.addEventListener('click', switchTheme);
if (localStorage.getItem('theme') === "light" || localStorage.getItem('theme') === null) { lightMode(); } else { darkMode() }
if (localStorage.getItem('tab') === "skills") { skillsTab(); } 

// To top button
btn.addEventListener('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});