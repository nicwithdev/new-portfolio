// CACHED ELEMENTS

let mouse = document.querySelector('.cursor');
let tap = document.querySelector('.cursor-text');
let burger = document.querySelector('.burger');
let nameSpan = document.querySelector('.name');
let smile = document.querySelector('.smile-img');
let nav = document.querySelector('.navbar');


// EVENT LISTENERS

window.addEventListener('mousemove', cursorMovement);
window.addEventListener('mouseover', cursorHover);
burger.addEventListener('click', toggleNav);
nav.addEventListener('scroll', topPositionChange);


// FUNCTIONS


function cursorMovement(e) {
    mouse.style.top = e.pageY + 'px';
    mouse.style.left = e.pageX + 'px';
    mouse.style.zIndex = 3000;
}

function cursorHover(e) {
    const hovered = e.target;
    if (hovered.id == 'logo' || hovered.classList.contains('burger') || hovered.classList.contains('link')) {
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
    if (!e.target.classList.contains('active')) {
    e.target.classList.add('active');
    gsap.to(".line1", 0.5, { rotate: "45", y: 3.5 });
    gsap.to(".line2", 0.5, { rotate: "-45", y: -3.5 });
    gsap.to(".navbar", 1, { clipPath: "circle(2500px at 100% -10%)" });
    document.body.classList.add('hide');
} else {
    e.target.classList.remove('active');
    gsap.to(".line1", 0.5, { rotate: "0", y: 0 });
    gsap.to(".line2", 0.5, { rotate: "0", y: 0 });
    gsap.to(".navbar", 1, { clipPath: "circle(50px at 100% -10%)" });
    document.body.classList.remove('hide');
}
}


function topPositionChange() {
    nav.style["top"] = '0px';
}
