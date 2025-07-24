window.addEventListener("DOMContentLoaded", () => {
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

  document.querySelector('.carousel-button.left').addEventListener('click', moveToPrevSlide);
  document.querySelector('.carousel-button.right').addEventListener('click', moveToNextSlide);

  setInterval(moveToNextSlide, 5000);
});