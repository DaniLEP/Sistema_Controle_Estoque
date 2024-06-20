// Script JavaScript para o carrossel

let slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function changeSlide(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    const slides = document.getElementsByClassName('carousel-slide');
    const options = document.getElementsByClassName('carousel-option');
    
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }

    for (let i = 0; i < options.length; i++) {
        options[i].classList.remove('active');
    }

    slides[slideIndex - 1].style.display = 'block';
    options[slideIndex - 1].classList.add('active');
}
