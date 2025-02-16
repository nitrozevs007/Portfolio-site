document.addEventListener("DOMContentLoaded", function () {
  let links = document.querySelectorAll("nav a");
  let currentUrl = window.location.href;

  links.forEach((link) => {
    if (link.href === currentUrl) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});



const testimonialsContainer = document.getElementById('testimonials-container');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

// Initial index
let currentIndex = 0;

// Testimonial'larni ko'rsatish
function displayTestimonial(index) {
  // Testimonial'larni containerga qo'shish
  const testimonial = testimonials[index];

  // Testimonial structure
  const testimonialContent = `
    <div class="testimonial-card">
      <p>${testimonial.text}</p>
      <h4>— ${testimonial.author}</h4>
    </div>
  `;

  // Testimonials containerga yangi testimonial qo'shish
  testimonialsContainer.innerHTML = `
    <img src="./src/assets/svg/body background.svg" class="absol" id="absol" alt="loght" width="517" height="273">
    <img src="./src/assets/svg/testimonials icon.svg" alt="testimonials icon" width="199" height="183" class="testimonials-icon">
    <h2>Testimonial</h2>
    ${testimonialContent}
    <img src="./src/assets/svg/Arrow left.svg" alt="left" width="50" height="13" class="left-icon" id="prevBtn">
    <img src="./src/assets/svg/Arrow right.svg" alt="right" width="50" height="13" class="right-icon" id="nextBtn">
  `;
}

// Prev tugmasi bosilganda
prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    displayTestimonial(currentIndex);
  }
});

// Next tugmasi bosilganda
nextBtn.addEventListener('click', () => {
  if (currentIndex < testimonials.length - 1) {
    currentIndex++;
    displayTestimonial(currentIndex);
  }
});

// Avtomatik testimonial almashish (2 sekundda bir)
function autoSwitchTestimonials() {
  setInterval(() => {
    if (currentIndex < testimonials.length - 1) {
      currentIndex++;
    } else {
      currentIndex = 0; // Oxirgi testimonialga yetib borganda, birinchi testimonialga qaytish
    }
    displayTestimonial(currentIndex);
  }, 2000); // 2 sekundda bir testimonial almashadi
}

// Dastlabki testimonialni ko'rsatish va avtomatik almashish
displayTestimonial(currentIndex);
autoSwitchTestimonials();