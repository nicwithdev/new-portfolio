// CACHED ELEMENTS

let mouse = document.querySelector('.cursor');
let tap = document.querySelector('.cursor-text');
let burger = document.querySelector('.burger');
let nameSpan = document.querySelector('.name');
let smile = document.querySelector('.smile-img');
let nav = document.querySelector('.navbar');
let navLink1 = document.querySelector('.link1');
let navLink2 = document.querySelector('.link2');
let navLink3 = document.querySelector('.link3');
let boardBtn = document.querySelector('.b-btn');
let smallrBtn = document.querySelector('.s-btn');
let glowBtn = document.querySelector('.g-btn');
let watchBtn = document.querySelector('.w-btn');
let boardLive = document.querySelector('.b-live');
let watchLive = document.querySelector('.w-live');
let glowLive = document.querySelector('.g-live');
let smallrLive = document.querySelector('.s-live');
let boardPic = document.querySelector('.b-pic');
let watchPic = document.querySelector('.w-pic');
let glowPic = document.querySelector('.g-pic');
let smallrPic = document.querySelector('.s-pic');
let boardTitle = document.querySelector('.b-title');
let smallrTitle = document.querySelector('.s-title');
let glowTitle = document.querySelector('.g-title');
let watchTitle = document.querySelector('.w-title');
let wave = document.querySelector('.wave');
let self = document.querySelector('.left');
let video = document.getElementById("vid");
let controller;
let slideScene;


// EVENT LISTENERS

window.onload = playVideo;
window.addEventListener('mousemove', cursorMovement);
window.addEventListener('mouseover', cursorHover);
burger.addEventListener('click', toggleNav);
navLink1.addEventListener('click', removeNav);
navLink2.addEventListener('click', removeNav);
navLink3.addEventListener('click', removeNav);
boardBtn.addEventListener('mouseover', highlightBoard);
watchBtn.addEventListener('mouseover', highlightWatch);
glowBtn.addEventListener('mouseover', highlightGlow);
smallrBtn.addEventListener('mouseover', highlightSmallr);
boardLive.addEventListener('mouseover', flipBoard);
watchLive.addEventListener('mouseover', flipWatch);
glowLive.addEventListener('mouseover', flipGlow);
smallrLive.addEventListener('mouseover', flipSmallr);


// FUNCTIONS


function cursorMovement(e) {
    mouse.style.top = e.pageY + 'px';
    mouse.style.left = e.pageX + 'px';
    mouse.style.zIndex = 3000;
}

function cursorHover(e) {
    const hovered = e.target;
    if (hovered.id == 'logo' || hovered.classList.contains('burger') || hovered.classList.contains('link') || hovered.classList.contains("project-btn") || hovered.classList.contains('back-to-top') || hovered.classList.contains("contact-link")) {
        mouse.classList.add('nav-active');
        tap.innerText = 'Tap';
        smile.style.display = 'none';
    } else if (hovered.classList.contains('name')){
        smile.style.display = 'block';
    } else if (hovered.classList.contains('right') || hovered.classList.contains('left')) {
        wave.style.borderRadius = '10% 100% 0% 0%';
        wave.style.transitionDuration = '1.2s';
    } else {
        mouse.classList.remove('nav-active');
        tap.innerText = '';
        smile.style.display = 'none';
        boardTitle.style.backgroundColor = '#fff';
        watchTitle.style.backgroundColor = 'rgb(20, 20, 20)';
        watchTitle.style.color = 'white';
        glowTitle.style.backgroundColor = '#fff6e6';
        smallrTitle.style.backgroundColor = '#fff';
        smallrPic.classList.remove('flip');
        glowPic.classList.remove('flip');
        watchPic.classList.remove('flip');
        boardPic.classList.remove('flip');
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

function removeNav(e) {
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

function flipBoard() {
    boardPic.classList.add('flip');
}
function flipWatch() {
    watchPic.classList.add('flip');
}
function flipGlow() {
    glowPic.classList.add('flip');
}
function flipSmallr() {
    smallrPic.classList.add('flip');
}

function playVideo() {
    video.play();
}

function animateSlides() {
    controller = new ScrollMagic.Controller();
    const slides = document.querySelectorAll('.slide');
    
}