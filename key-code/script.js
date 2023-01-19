const insert = document.getElementById("insert")




window.addEventListener("keydown", (e) =>{
   
    insert.innerHTML = `<div class="key" id="key">
    ${e.key === ' ' ?"space" :e.key}
    <small>event.key</small>
</div>
<div class="key" >
    ${e.keycode}
    <small>event.keyCode</small>
</div>
<div class="key" >
    ${e.code}
    <small>event.keyCode</small>
</div>`

})