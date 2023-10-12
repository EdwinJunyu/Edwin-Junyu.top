document.addEventListener('DOMContentLoaded', function () {
    const sliderContainer = document.querySelector('.slider-container');
    const slider = document.querySelector('.slider');
    const sliderItems = document.querySelectorAll('.slider-item');
  
    let slideIndex = 0;
  
    function showSlide(index) {
        if (index < 0) {
          slideIndex = sliderItems.length - 1;
        } else if (index >= sliderItems.length) {
          slideIndex = 0;
        }
        slider.style.transform = `translateX(-${slideIndex * 100}%)`;
    }
  
    setInterval(function () {
        slideIndex++;
        showSlide(slideIndex);
    }, 3000);
  });