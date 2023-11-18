document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector("header");

  // Menangani peristiwa scroll
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      // Ganti dengan nilai jarak scroll yang diinginkan
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
});
