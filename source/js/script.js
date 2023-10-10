const toggle = document.querySelector('.menu-toggle');
const menuList = document.querySelector('.main-menu-list');
const burgerIcon = document.querySelector('.menu-toggle__icon--burger');
const crossIcon = document.querySelector('.menu-toggle__icon--cross');
const menuName = document.querySelector('.menu-toggle__name');

toggle.addEventListener('click', function() {
    if (menuName.textContent === 'Закрыть основное меню') {
        menuList.style.display = 'none';
        burgerIcon.style.display = 'block';
        crossIcon.style.display = 'none';
        menuName.textContent = 'Открыть основное меню';
    } else {
        menuList.style.display = 'block';
        burgerIcon.style.display = 'none';
        crossIcon.style.display = 'block';
        menuName.textContent = 'Закрыть основное меню';
    }
});


document.addEventListener('DOMContentLoaded', function() {
  const slides = document.querySelectorAll('.promo__card');
  let currentSlide = 0;

  function showSlide(slideIndex) {
      slides[currentSlide].classList.remove('active');
      slides[slideIndex].classList.add('active');
      currentSlide = slideIndex;
  }

  document.querySelectorAll('.promo__button').forEach(button => {
      button.addEventListener('click', function() {
          const direction = this.classList.contains('promo__button--next') ? 1 : -1;
          const newSlide = (currentSlide + direction + slides.length) % slides.length;
          showSlide(newSlide);
      });
  });

  slides[currentSlide].classList.add('active');
});
