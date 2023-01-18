const contents = document.querySelectorAll(".content");
console.log (contents)

window.addEventListener('scroll',checkBox)

checkBox();


function checkBox(){
    const triggerBottom = window.innerHeight/ 6 * 4 ;
   
    contents.forEach(box => {
        const boxTop = box.getBoundingClientRect().top

        
        if (boxTop < triggerBottom ){
            box.classList.add('show')
        }else {
            box.classList.remove('show')
        }
    })
}