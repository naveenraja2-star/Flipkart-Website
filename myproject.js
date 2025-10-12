    const slides = document.querySelector('.slides');
    const images = document.querySelectorAll('.slides img');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    const dots = document.querySelectorAll('.dot');
    const slider = document.querySelector('.slider');
    let index = 0;
    const total = images.length;
    let autoSlide;
    function showSlide(i) {
        index = (i + total) % total;
        slides.style.transform = `translateX(-${index * 100}%)`;    
        dots.forEach(dot => dot.classList.remove('active'));
        dots[index].classList.add('active');
    }
    function startAutoSlide() {
        autoSlide = setInterval(() => showSlide(index + 1), 3000);
    }
    function stopAutoSlide() {
        clearInterval(autoSlide);
    }
    nextBtn.addEventListener('click', () => showSlide(index + 1));
    prevBtn.addEventListener('click', () => showSlide(index - 1));
    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            const i = parseInt(dot.getAttribute('data-index'));
            showSlide(i);
        });
    });
    slider.addEventListener('mouseenter', stopAutoSlide);
    slider.addEventListener('mouseleave', startAutoSlide);
    showSlide(0);
    startAutoSlide();