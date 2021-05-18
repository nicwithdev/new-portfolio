// CACHED ELEMENTS

let mouse = document.querySelector('.cursor');
let tap = document.querySelector('.cursor-text');
let burger = document.querySelector('.burger');
let nameSpan = document.querySelector('.name');
let smile = document.querySelector('.smile-img');


// EVENT LISTENERS

window.addEventListener('mousemove', cursorMovement);
window.addEventListener('mouseover', cursorHover);
burger.addEventListener('click', toggleNav);


// FUNCTIONS

function cursorMovement(e) {
    mouse.style.top = e.pageY + 'px';
    mouse.style.left = e.pageX + 'px';
    mouse.style.zIndex = 3000;
}

function cursorHover(e) {
    const hovered = e.target;
    if (hovered.id == 'logo' || hovered.classList.contains('burger')) {
        mouse.classList.add('nav-active');
        tap.innerText = 'Tap';
        smile.style.display = 'none';
    } else if (hovered.classList.contains('name')){
        smile.style.display = 'block';
    } else {
        mouse.classList.remove('nav-active');
        tap.innerText = '';
        smile.style.display = 'none';
    }
}

function toggleNav(e) {

}
