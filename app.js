// CACHED ELEMENTS

let mouse = document.querySelector('.cursor');


// EVENT LISTENERS

window.addEventListener('mousemove', cursorMovement);
window.addEventListener('mouseover', cursorHover);


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
    } else {
        mouse.classList.remove('nav-active');
    }
}