function imgSlider(anything) {
    document.querySelector('.starbucks').src = anything;
}
let currentSlide = 0;

function moveSlide(direction) {
    const items = document.querySelectorAll('.carousel-item');
    currentSlide += direction;

    if (currentSlide < 0) {
        currentSlide = items.length - 1;
    } else if (currentSlide >= items.length) {
        currentSlide = 0;
    }

    items.forEach((item, index) => {
        item.style.transform = `translateX(${-currentSlide * 100}%)`;
    });
}
