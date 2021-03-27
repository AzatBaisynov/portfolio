$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 3,
        margin: 30,
        nav: true
    });
});

let projectBtn = document.querySelector('.projects__title')
let projectInit = document.querySelector('.projects__init')
let carousel = document.querySelector('.projects__carousel')

const colors = ['#ff0000', '#03ad47', '#ff2bdb', '#2b45ff']
let count = 0

setInterval(() => {
    if (count === 4) count = 0
    projectBtn.style.backgroundColor = colors[count++]
}, 500)

projectBtn.addEventListener('click', () => {
    console.log('hey')
    projectInit.style.animation = 'hide_remove 1s'
    setTimeout(() => {
        projectInit.style.display = 'none'
        carousel.style.display = 'block'
        carousel.style.animation = 'come_visible 3s'
    },1000)
})

let img = document.querySelector('.skills')

img.addEventListener('mousemove', (event) => {
    console.log('hello')
    console.log(event)
})


