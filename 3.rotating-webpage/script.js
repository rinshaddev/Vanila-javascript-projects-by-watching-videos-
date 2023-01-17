const openBtn = document.getElementById('open');
const closeBtn = document.getElementById('close');
const container = document.querySelector(".container");
const nav = document.querySelector("nav")

openBtn.addEventListener("click",() => {
    container.classList.add("show-nav")
    nav.style.display= 'block';

});

closeBtn.addEventListener("click",() => {
    container.classList.remove("show-nav")
    nav.style.display = "none"
})