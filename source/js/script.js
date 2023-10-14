// BURGER MENU
const toggleButton = document.querySelector('.js-toggle-button');
const headerMenu = document.querySelector('.header-menu');
const burgerIcon = toggleButton.querySelector('.js-toggle-button__icon--burger');
const crossIcon = toggleButton.querySelector('.js-toggle-button__icon--cross');
const menuDescription = toggleButton.querySelector('.js-toggle-button__description');

toggleButton.setAttribute('aria-expanded', 'false');

toggleButton.addEventListener('click', () => {
    burgerIcon.classList.toggle('js-toggle-button__icon--active');
    crossIcon.classList.toggle('js-toggle-button__icon--active');
    headerMenu.classList.toggle('header-menu--active');

    if (burgerIcon.classList.contains('js-toggle-button__icon--active')) {
        menuDescription.textContent = 'Открыть основное меню';
        toggleButton.setAttribute('aria-expanded', 'false');
    } else {
        menuDescription.textContent = 'Закрыть основное меню';
        toggleButton.setAttribute('aria-expanded', 'true');
    }
});



// SLIDER
document.addEventListener(`DOMContentLoaded`, () => {
  const slides = document.querySelectorAll(`.hero__card`);
  let currentSlide = 0;

  const showSlide = (index) => {
    slides[currentSlide].classList.remove(`active`);
    slides[index].classList.add(`active`);
    currentSlide = index;
  };

  document.querySelector(`.slider__control--prev`).addEventListener(`click`, () => {
    const newIndex = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(newIndex);
  });

  document.querySelector(`.slider__control--next`).addEventListener(`click`, () => {
    const newIndex = (currentSlide + 1) % slides.length;
    showSlide(newIndex);
  });

  slides[currentSlide].classList.add(`active`);
});
