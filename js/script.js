const toggleButton = document.getElementById('theme-toggle');
const root = document.documentElement;
const sectionOne = document.querySelector('.home');

// Function to toggle the theme
function toggleTheme() {
  const currentTheme = root.getAttribute('data-theme');
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';

  const bubble = document.createElement('div');
  bubble.classList.add('theme-bubble');
  document.body.appendChild(bubble);

  const bubbleSize = Math.max(document.documentElement.clientWidth, document.documentElement.clientHeight);
  bubble.style.width = `${bubbleSize}px`;
  bubble.style.height = `${bubbleSize}px`;

  const bubblePosition = toggleButton.getBoundingClientRect();
  bubble.style.left = `${bubblePosition.left}px`;
  bubble.style.top = `${bubblePosition.top}px`;

  setTimeout(() => {
    bubble.style.transform = 'translate(-50%, -50%) scale(100)';
    bubble.style.opacity = '0';
    root.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);

    // Switch background URL in section one
    const backgroundImageUrl = newTheme === 'dark'
      ? `url("dark-background.jpg?${getRandomQueryParameter()}")`
      : `url("light-background.jpg?${getRandomQueryParameter()}")`;

    sectionOne.style.backgroundImage = backgroundImageUrl;
  }, 10);

  setTimeout(() => {
    document.body.removeChild(bubble);
  }, 1000);
}

// Generate a random query parameter
function getRandomQueryParameter() {
  return Math.random().toString(36).substring(7);
}

// Event listener for the toggle button
toggleButton.addEventListener('click', toggleTheme);

// Check for previously set theme on page load
document.addEventListener('DOMContentLoaded', function() {
  const savedTheme = localStorage.getItem('theme');

  if (savedTheme) {
    root.setAttribute('data-theme', savedTheme);

    // Switch background URL in section one on page load
    const backgroundImageUrl = savedTheme === 'dark'
      ? `url("images/home.jpg?${getRandomQueryParameter()}")`
      : `url("?${getRandomQueryParameter()}")`;

    sectionOne.style.backgroundImage = backgroundImageUrl;
  } else {
    root.setAttribute('data-theme', 'light'); // Set default theme to light
    localStorage.setItem('theme', 'light'); // Store default theme in localStorage
    sectionOne.style.backgroundImage = `url("?${getRandomQueryParameter()}")`; // Set default background URL for section one
  }
});
//toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}



// Scroll sections
 let sections = document.querySelectorAll('section');
 let navLinks = document.querySelectorAll('header nav a');
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            // active navbar links
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');

            });
            // active section for animation on scroll
            sec.classList.add('show-animate');
        }
        // if want to use animantion that repeats on scroll use this
        else {
            sec.classList.remove('show-animate');

        }

    });

    








    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);
   

    // remove toggle icon and navbar when click navbar links (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
 
    // animation footer on scroll
    let footer = document.querySelector('footer');

    footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
}
