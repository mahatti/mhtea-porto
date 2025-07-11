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

// Force download for CV and Portfolio buttons
document.addEventListener('DOMContentLoaded', function() {
  const cvBtn = document.querySelector('.cv-btn');
  const portfolioBtn = document.querySelector('.portfolio-btn');
  
  if (cvBtn) {
    cvBtn.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      
      // Create a temporary link element
      const link = document.createElement('a');
      link.href = 'files/CV Made Mahatti Prayascita Chandra.pdf';
      link.download = 'CV Made Mahatti Prayascita Chandra.pdf';
      link.style.display = 'none';
      
      // Append to body, click, and remove
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  }
  
  if (portfolioBtn) {
    portfolioBtn.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      
      // Create a temporary link element
      const link = document.createElement('a');
      link.href = 'files/Portofolio Made Mahatti Prayascita Chandra.pdf';
      link.download = 'Portofolio Made Mahatti Prayascita Chandra.pdf';
      link.style.display = 'none';
      
      // Append to body, click, and remove
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  }
  
  // Carousel dots functionality
  const carousel = document.querySelector('.carousel');
  const dots = document.querySelectorAll('.dot');
  
  if (carousel && dots.length > 0) {
    // Update active dot based on scroll position
    carousel.addEventListener('scroll', function() {
      const scrollPosition = carousel.scrollLeft;
      const cardWidth = carousel.querySelector('.event-card').offsetWidth + 20; // 20px gap
      const activeIndex = Math.round(scrollPosition / cardWidth);
      
      // Update dots
      dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === activeIndex);
      });
    });
    
    // Click dot to scroll to specific card
    dots.forEach((dot, index) => {
      dot.addEventListener('click', function() {
        const cardWidth = carousel.querySelector('.event-card').offsetWidth + 20;
        const scrollPosition = index * cardWidth;
        
        carousel.scrollTo({
          left: scrollPosition,
          behavior: 'smooth'
        });
      });
    });
  }
});
