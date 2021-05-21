// CACHED ELEMENTS

let mouse = document.querySelector('.cursor');
let tap = document.querySelector('.cursor-text');
let burger = document.querySelector('.burger');
let nameSpan = document.querySelector('.name');
let smile = document.querySelector('.smile-img');
let nav = document.querySelector('.navbar');
let navLinks = document.querySelector('.link');
let boardBtn = document.querySelector('.b-btn');
let smallrBtn = document.querySelector('.s-btn');
let glowBtn = document.querySelector('.g-btn');
let watchBtn = document.querySelector('.w-btn');
let boardLive = document.querySelector('.b-live');
let watchLive = document.querySelector('.w-live');
let glowLive = document.querySelector('.g-live');
let smallrLive = document.querySelector('.s-live');
let boardTitle = document.querySelector('.b-title');
let smallrTitle = document.querySelector('.s-title');
let glowTitle = document.querySelector('.g-title');
let watchTitle = document.querySelector('.w-title');


// EVENT LISTENERS

window.addEventListener('mousemove', cursorMovement);
window.addEventListener('mouseover', cursorHover);
burger.addEventListener('click', toggleNav);
navLinks.addEventListener('click', removeNav);
boardBtn.addEventListener('mouseover', highlightBoard);
watchBtn.addEventListener('mouseover', highlightWatch);
glowBtn.addEventListener('mouseover', highlightGlow);
smallrBtn.addEventListener('mouseover', highlightSmallr);


// FUNCTIONS


function cursorMovement(e) {
    mouse.style.top = e.pageY + 'px';
    mouse.style.left = e.pageX + 'px';
    mouse.style.zIndex = 3000;
}

function cursorHover(e) {
    const hovered = e.target;
    if (hovered.id == 'logo' || hovered.classList.contains('burger') || hovered.classList.contains('link') || hovered.classList.contains("project-btn")) {
        mouse.classList.add('nav-active');
        tap.innerText = 'Tap';
        smile.style.display = 'none';
    } else if (hovered.classList.contains('name')){
        smile.style.display = 'block';
    } else {
        mouse.classList.remove('nav-active');
        tap.innerText = '';
        smile.style.display = 'none';
        boardTitle.style.backgroundColor = '#fff';
        watchTitle.style.backgroundColor = 'rgb(20, 20, 20)';
        watchTitle.style.color = 'white';
        glowTitle.style.backgroundColor = '#99a894';
        glowTitle.style.color = 'white';
        smallrTitle.style.backgroundColor = '#fff6e6';

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

function removeNav() {
    burger.classList.remove('active');
    gsap.to(".line1", 0.5, { rotate: "0", y: 0 });
    gsap.to(".line2", 0.5, { rotate: "0", y: 0 });
    gsap.to(".navbar", 1, { clipPath: "circle(50px at 100% -10%)" });
    document.body.classList.remove('hide');
}

function highlightBoard() {
    boardTitle.style.backgroundColor = 'yellow';
}
function highlightWatch() {
    watchTitle.style.backgroundColor = 'yellow';
    watchTitle.style.color = 'rgb(20, 20, 20)';
}
function highlightGlow() {
    glowTitle.style.backgroundColor = 'yellow';
    glowTitle.style.color = 'rgb(20, 20, 20)';
}
function highlightSmallr() {
    smallrTitle.style.backgroundColor = 'yellow';
}