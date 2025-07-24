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
});

document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.querySelector('button');
  const menuPanel = document.getElementById('menuPanel');

  menuBtn.addEventListener('click', () => {
    menuPanel.classList.toggle('open');
  });
});
