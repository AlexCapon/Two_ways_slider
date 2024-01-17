const upButton = document.querySelector('.up-button');
const downButton = document.querySelector('.down-button');
const mainSlide = document.querySelector('.main-slide');
const sidebar = document.querySelector('.sidebar');
const container = document.querySelector('.container');

let slidesCount = mainSlide.querySelectorAll('div').length;
let containerHeight = container.clientHeight;
let activeSlideIndex = 0;

function changeSlide (direction) {
    if (direction === 'up') {
        activeSlideIndex++
        if (activeSlideIndex === slidesCount)
        {
            activeSlideIndex=0
        }
    }
    if (direction === 'down') {
        activeSlideIndex--
        if (activeSlideIndex < 0) {
            activeSlideIndex = slidesCount - 1
        }
    }

    mainSlide.style.transform = `translateY(-${activeSlideIndex*containerHeight}px)` 
    sidebar.style.transform = `translateY(${activeSlideIndex*containerHeight}px)`
};
function changeSlideOnKey (key) {
    if (key === 'ArrowUp') changeSlide('up');
    if (key === 'ArrowDown') changeSlide('down');
};
function updateSlidesPosition() {
    containerHeight = container.clientHeight;
    sidebar.style.top = `-${(slidesCount - 1) * 100}vh`;
    mainSlide.style.transform = `translateY(-${activeSlideIndex*containerHeight}px)` 
    sidebar.style.transform = `translateY(${activeSlideIndex*containerHeight}px)`
};

upButton.addEventListener('click', () => changeSlide('up'));
downButton.addEventListener('click', () => changeSlide('down'));
document.addEventListener('keydown' , ({ key }) => changeSlideOnKey(key));
window.addEventListener('resize', updateSlidesPosition);
