const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");
const overlay = document.getElementById("overlay");
const closeMenu = document.getElementById("closeMenu");
const experience = document.getElementById("experience");
const about = document.getElementById("about");

function toggleMenu() {
    mobileMenu.classList.toggle("active");
    overlay.classList.toggle("active");
}

hamburger.addEventListener("click", toggleMenu);
closeMenu.addEventListener("click", toggleMenu);
overlay.addEventListener("click", toggleMenu);

function flipCard(card) {
  card.classList.toggle('flipped');
}

window.onload = () => {
  const theme = localStorage.getItem('theme');
  if (theme === 'dark') {
    document.body.classList.add('dark-theme');
  }
};

function changeTheme(isMobile) {
  const isDark = document.body.classList.toggle('dark-theme');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  if (isMobile === true) {
    toggleMenu();
  }
}