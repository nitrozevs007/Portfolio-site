
document.addEventListener("DOMContentLoaded", () => {

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

  if (testimonialsContainer) {

    let currentIndex = 0;


    function displayTestimonial(index) {

      const testimonial = testimonials[index];

      const testimonialContent = `
      <div class="testimonial-card">
        <p>${testimonial.text}</p>
        <h4>— ${testimonial.author}</h4>
      </div>
    `;

      testimonialsContainer.innerHTML = `
      <img src="./src/assets/svg/body background.svg" class="absol" id="absol" alt="loght" width="517" height="273">
      <img src="./src/assets/svg/testimonials icon.svg" alt="testimonials icon" width="199" height="183" class="testimonials-icon">
      <h2>Testimonial</h2>
      ${testimonialContent}
      <img src="./src/assets/svg/Arrow left.svg" alt="left" width="50" height="13" class="left-icon" id="prevBtn">
      <img src="./src/assets/svg/Arrow right.svg" alt="right" width="50" height="13" class="right-icon" id="nextBtn">
    `;
    }

    console.log(prevBtn);

    prevBtn.addEventListener('click', () => {
      if (currentIndex > 0) {
        --currentIndex;
        displayTestimonial(currentIndex);
      }
    });


    nextBtn.addEventListener('click', () => {
      if (currentIndex < testimonials.length - 1) {
        ++currentIndex;
        displayTestimonial(currentIndex);
      }
    });


    function autoSwitchTestimonials() {
      setInterval(() => {
        if (currentIndex < testimonials.length - 1) {
          currentIndex++;
        } else {
          currentIndex = 0;
        }
        displayTestimonial(currentIndex);

      }, 5000); // 5 sekundda bir testimonial almashadi
    }


    displayTestimonial(currentIndex);
    autoSwitchTestimonials();
  }


  // elSitesContainer ichiga qo'yiladi

  const elSitesContainer = document.querySelector('.sites')

  if (elSitesContainer) {


    works.forEach((works) => {

      let elLi = document.createElement('li')

      let workA = document.createElement('a')
      workA.href = works.link
      workA.target = "_blank"
      workA.innerHTML = `
      <div class="imgdiv">
        <img src="${works.img}" alt="${works.name}" width="350" height="350">
        <div class="border"></div>
      </div>`


      elSitesContainer.append(elLi)
      elLi.appendChild(workA)
    })


  }


});


