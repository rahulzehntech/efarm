let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const slider = document.querySelector('.slider');

function changeSlide(direction) {
    currentIndex += direction;
    if (currentIndex < 0) {
        currentIndex = slides.length - 1;
    } else if (currentIndex >= slides.length) {
        currentIndex = 0;
    }
    const translateValue = -currentIndex * 100;
    slider.style.transform = `translateX(${translateValue}%)`;
}

document.querySelector('.prev-button').addEventListener('click', () => {
    changeSlide(-1);
});

document.querySelector('.next-button').addEventListener('click', () => {
    changeSlide(1);
});
