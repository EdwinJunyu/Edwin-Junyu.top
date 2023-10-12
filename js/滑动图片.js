const slider = document.querySelector('.slider');
const images = document.querySelectorAll('.slider img');

let isDragging = false;
let startPosition = 0;
let currentIndex = 0;

slider.addEventListener('mousedown', (e) => {
  isDragging = true;
  startPosition = e.clientX;
  slider.style.transition = 'none';
});

slider.addEventListener('mouseup', () => {
  isDragging = false;
  slider.style.transition = 'transform 0.5s ease';
});

slider.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  const currentPosition = e.clientX;
  const diff = startPosition - currentPosition;
  const move = -currentIndex * 100 - (diff / window.innerWidth) * 100;
  slider.style.transform = `translateX(${move}%)`;
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowLeft' && currentIndex > 0) {
    currentIndex--;
    updateSlider();
  } else if (event.key === 'ArrowRight' && currentIndex < images.length - 1) {
    currentIndex++;
    updateSlider();
  }
});

function updateSlider() {
  const move = -currentIndex * 100;
  slider.style.transform = `translateX(${move}%)`;
}

function prevImage() {
  if (currentIndex > 0) {
    currentIndex--;
    updateSlider();
  }
}

function nextImage() {
    if (currentIndex < images.length - 1) {
      currentIndex++;
    } else {
      currentIndex = 0; // 切换回第一张图片
    }
    updateSlider();
  }