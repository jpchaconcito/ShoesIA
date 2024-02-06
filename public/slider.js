const sliderBlond = document.getElementById('slider-blond');
const btnRightBlond = document.querySelector('#btn-right-blond');
const btnLeftBlond = document.querySelector('#btn-left-blond');
let sliderSectionBlond = document.querySelectorAll('.slider-section-blond');
let sliderSectionLastBlond = sliderSectionBlond[sliderSectionBlond.length -1];
sliderBlond.insertAdjacentElement("afterbegin", sliderSectionLastBlond);

function Next(sf , slider) {
    let sliderSectionFirst = sf;
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 0.4s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement('beforeend', sliderSectionFirst);
        slider.style.marginLeft = "-100%";
    }, 200);
}

btnRightBlond.addEventListener('click', function(){
    Next(document.querySelectorAll('.slider-section')[0], sliderBlond);
});

function Prev(s , slider) {
    let sliderSection = s;
    let sliderSectionLast = sliderSection[sliderSection.length -1];
    slider.style.marginLeft = "0";
    slider.style.transition = "all 0.4s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement("afterbegin", sliderSectionLast);
        slider.style.marginLeft = "-100%";
    }, 200);
}    setTimeout(function(){
    Next(document.querySelectorAll('.slider-section-red')[0], sliderRed);
}, 400);
setTimeout(function(){
    Next(document.querySelectorAll('.slider-section-black')[0], sliderBlack);
}, 800);

btnLeftBlond.addEventListener('click', function(){
    Prev(document.querySelectorAll('.slider-section'), sliderBlond);
});

setInterval(function(){
    Next(document.querySelectorAll('.slider-section')[0], sliderBlond);
}, 8000)