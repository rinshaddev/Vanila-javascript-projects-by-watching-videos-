const toggles = document.querySelectorAll(".faq-toggle")

toggles.forEach(ind => {
    ind.addEventListener("click", () => {
        ind.parentNode.classList.toggle("active")
    })
})