document.addEventListener('DOMContentLoaded', function () {
  // Revolving text setup
  const container = document.querySelector(".revolving-text");
  const inner = document.querySelector(".revolving-inner");
  const span = inner.querySelector("span");

  const containerWidth = container.offsetWidth;
  const spanWidth = span.offsetWidth;

  const repeatCount = Math.ceil((containerWidth * 2) / spanWidth);

  for (let i = 1; i < repeatCount; i++) {
    const clone = span.cloneNode(true);
    inner.appendChild(clone);
  }

  // Carousel setup
  const track = document.querySelector('.carousel-track');
  const slides = document.querySelectorAll('.carousel-track img');
  const totalSlides = slides.length;
  let index = 0;

  function updateSlidePosition() {
    track.style.transform = `translateX(-${index * 100}%)`;
  }

  function moveToNextSlide() {
    index = (index + 1) % totalSlides;
    updateSlidePosition();
  }

  function moveToPrevSlide() {
    index = (index - 1 + totalSlides) % totalSlides;
    updateSlidePosition();
  }

  const leftBtn = document.querySelector('.carousel-button.left');
  const rightBtn = document.querySelector('.carousel-button.right');

  if (leftBtn && rightBtn) {
    leftBtn.addEventListener('click', moveToPrevSlide);
    rightBtn.addEventListener('click', moveToNextSlide);
  } else {
    console.warn("Carousel buttons not found in DOM.");
  }

  setInterval(moveToNextSlide, 5000);
});