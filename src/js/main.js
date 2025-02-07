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

// testimonials

function renderTestimonials(data) {
  const container = document.getElementById('testimonial-container');
  container.innerHTML = '';

  data.forEach((item) => {
      const testimonialDiv = document.createElement('div');

      let elText = document.createElement('p')
      elText.textContent = item.text

      let elAuthor = document.createElement('h4')
      elAuthor.textContent = item.author

      container.appendChild(testimonialDiv);
      testimonialDiv.append(elText)
      testimonialDiv.appendChild(elAuthor)
  });
}

renderTestimonials();