const splitLeft = document.querySelector('.left');
const right = document.querySelector('.right');
const container = document.querySelector(".container");

splitLeft.addEventListener('mouseenter', ()=> container.classList.add('hover-left'));
splitLeft.addEventListener('mouseleave', ()=> container.classList.remove('hover-left'));


right.addEventListener('mouseenter',()=> container.classList.add('hover-right'))
right.addEventListener('mouseleave',()=> container.classList.remove('hover-right'))

