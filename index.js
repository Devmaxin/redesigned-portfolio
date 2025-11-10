// const text = document.getElementById("type");
//   const content = text.textContent;
//   text.textContent = "";
//   let index = 0;
//   let isDelete = false;

//   function typeEffect() {
//     if (!isDelete && index < content.length) {
//       text.textContent += content.charAt(index);
//       index++;
//       setTimeout(typeEffect, 50); // typing speed
//     } 
//     else if (isDelete && index > 0) {
//       text.textContent = content.substring(0, index - 1);
//       index--;
//       setTimeout(typeEffect, 50); // deleting speed
//     } 
//     else if (index === content.length) {
//       // Pause before deleting
//       isDelete = true;
//       setTimeout(typeEffect, 1500);
//     } 
//     else if (index === 0 && isDelete) {
//       // Pause before retyping
//       isDelete = false;
//       setTimeout(typeEffect, 1);
//     }
//   }

//   typeEffect();

const menuIcon = document.getElementById('menu-icon');
const sideMenu = document.getElementById('side-menu');
const closeBtn = document.getElementById('close-btn');
const overlay = document.getElementById('overlay');

// Open menu
menuIcon.addEventListener('click', () => {
  sideMenu.classList.add('active');
  overlay.classList.add('active');
});

// Close menu
function closeMenu() {
  sideMenu.classList.remove('active');
  overlay.classList.remove('active');
}

closeBtn.addEventListener('click', closeMenu);
overlay.addEventListener('click', closeMenu);

// Optional: close when clicking outside menu (extra safety)
document.addEventListener('click', (e) => {
  if (
    sideMenu.classList.contains('active') &&
    !sideMenu.contains(e.target) &&
    !menuIcon.contains(e.target)
  ) {
    closeMenu();
  }
});



                    
    const texts = ["Wordpress Developer", "Web Developer", "Web3 Educator"];
    const typingElement = document.getElementById("typing");
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
      const current = texts[textIndex];
      typingElement.textContent = current.slice(0, charIndex);

      if (!isDeleting) {
        if (charIndex < current.length) {
          charIndex++;
          setTimeout(type, 100);
        } else {
          isDeleting = true;
          setTimeout(type, 1500);
        }
      } else {
        if (charIndex > 0) {
          charIndex--;
          setTimeout(type, 50);
        } else {
          isDeleting = false;
          textIndex = (textIndex + 1) % texts.length;
          setTimeout(type, 1);
        }
      }
    }

    type();

    // Skill Progress Animation

const skills = document.querySelectorAll('.skill');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const progress = entry.target.querySelector('.progress');
      const percentText = entry.target.querySelector('.percent');
      const target = parseInt(progress.getAttribute('data-skill'));
      let count = 0;

      // Animate width
      progress.style.width = target + '%';

      // Animate percentage count-up
      const counter = setInterval(() => {
        if (count < target) {
          count++;
          percentText.textContent = count + '%';
        } else {
          clearInterval(counter);
        }
      }, 20); // speed of count up (lower = faster)

      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

// Observe each skill
skills.forEach(skill => observer.observe(skill));

const slidesContainer = document.querySelector('.slides');
const slides = document.querySelectorAll('.slide');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let current = 0;
const total = slides.length;

// Function to move slides
function goToSlide(index) {
  // Loop around
  if(index < 0) current = total - 1;
  else if(index >= total) current = 0;
  else current = index;

  slidesContainer.style.transform = `translateX(-${current * 100}%)`;
}

// Arrow events
prev.addEventListener('click', () => goToSlide(current - 1));
next.addEventListener('click', () => goToSlide(current + 1));

// Auto-slide
setInterval(() => {
  goToSlide(current + 1);
}, 4000);

// Initialize
goToSlide(current);