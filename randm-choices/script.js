const txtArea  = document.getElementById("tex-content");
const tagEl = document.getElementById("tags");

txtArea.focus()

txtArea.addEventListener('keyup', (e) => {
    createTags(e.target.value)

    if(e.key === 'Enter'){
         setTimeout(() => {
            e.target.value =''
         },10) 
         randomSelector();
    }
})

function createTags(input){
    const tags = input.split(',').filter(tag => tag.trim()!== "").map(tag => tag.trim())
    tagEl.innerHTML = ''

    tags.forEach(tag => {
        const neal = document.createElement('span');
        neal.classList.add ('tag')
        neal.innerHTML = tag
        tagEl.appendChild(neal)
    });

 
}

function randomSelector(){
   const times = 30


   const  interval = setInterval( () => {
    const randomTag = pickRandomTag()

    highLightTag(randomTag)


    setTimeout(() => {
        removeHighLight(randomTag)
    }, 100);
   }, 100)



   setTimeout(() => {
        clearInterval(interval)


        setTimeout(() => {
            const randomTag = pickRandomTag();

            highLightTag(randomTag)
        }, 100);
   },times*100)
}

function pickRandomTag() {
     const tags = document.querySelectorAll('.tag')
     return tags[Math.floor(Math.random() * tags.length)];
}

function highLightTag (tag) {
    tag.classList.add('highlight')
}

function removeHighLight(tag) {
    tag.classList.remove('highlight');
}