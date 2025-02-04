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
