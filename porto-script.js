document.querySelectorAll('.event-card').forEach(card => {
  card.addEventListener('click', function() {
      this.classList.toggle('flipped');
  });
});

// Experience item description toggle
document.querySelectorAll('.experience-item').forEach(item => {
  item.addEventListener('click', function() {
    const description = this.querySelector('.experience-description');
    const allDescriptions = document.querySelectorAll('.experience-description');
    
    // Close all other descriptions
    allDescriptions.forEach(desc => {
      if (desc !== description) {
        desc.style.display = 'none';
        desc.parentElement.classList.remove('active');
      }
    });
    
    // Toggle current description
    if (description.style.display === 'none') {
      description.style.display = 'block';
      this.classList.add('active');
    } else {
      description.style.display = 'none';
      this.classList.remove('active');
    }
  });
});

// Burger menu functionality
const burgerMenu = document.querySelector('.burger-menu');
const navLinks = document.querySelector('.nav-links');

// Toggle menu when clicking burger icon
burgerMenu.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Close menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
  if (!navLinks.contains(e.target) && !burgerMenu.contains(e.target)) {
    navLinks.classList.remove('active');
  }
});

// Smooth scroll to sections
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const section = document.querySelector(this.getAttribute('href'));
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});
