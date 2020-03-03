const navBurger = document.querySelector('.nav-burger');
const navContent = document.querySelector('.nav-links');

navBurger.addEventListener('click', ()=>{
    navContent.classList.toggle('toggle');
});