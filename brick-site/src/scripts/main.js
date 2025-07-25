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
  // Clone the first slide and append it to the end
  const firstSlide = slides[0].cloneNode(true);
  track.appendChild(firstSlide);
  const updatedSlides = document.querySelectorAll('.carousel-track img');
  const totalSlides = updatedSlides.length;

  const indicatorsContainer = document.querySelector('.carousel-indicators');
  const realSlideCount = totalSlides - 1;
  const dots = [];

  for (let i = 0; i < realSlideCount; i++) {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    if (i === 0) dot.classList.add('active');
    indicatorsContainer.appendChild(dot);
    dots.push(dot);
  }

  function updateIndicators() {
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index % realSlideCount);
    });
  }

  let index = 0;

  function updateSlidePosition() {
    track.style.transform = `translateX(-${index * 100}%)`;
  }

  function moveToNextSlide() {
    index++;
    track.style.transition = 'transform 1s ease';
    updateSlidePosition();
    updateIndicators();

    track.addEventListener('transitionend', handleTransitionEnd, { once: true });
  }

  function handleTransitionEnd() {
    if (index === totalSlides - 1) {
      track.style.transition = 'none';
      index = 0;
      updateSlidePosition();
      updateIndicators();
      void track.offsetWidth;
      track.style.transition = 'transform 0.5s ease';
    }
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
});