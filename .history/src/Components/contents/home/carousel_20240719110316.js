const list = document.querySelector('.carousel__viewport');
let isDown = false;
let startX;
let scrollLeft;
let animationPaused = false;

list.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX - list.offsetLeft;
    scrollLeft = list.scrollLeft;
    list.style.cursor = 'grabbing';
});

list.addEventListener('mouseleave', () => {
    isDown = false;
});

list.addEventListener('mouseup', () => {
    isDown = false;
    list.style.cursor = 'grab';
});

list.addEventListener('mousemove', (e) => {
    if(!isDown) return;
    e.preventDefault();
    const x = e.pageX - list.offsetLeft;
    const walk = (x - startX) * 2; // السرعة
    list.style.transform = `translateX(${scrollLeft - walk}px)`;
});

list.addEventListener('mouseenter', () => {
    if (!animationPaused) {
        list.style.animationPlayState = 'paused';
        animationPaused = true;
    }
});

list.addEventListener('mouseleave', () => {
    if (animationPaused) {
        list.style.animationPlayState = 'running';
        animationPaused = false;
    }
});