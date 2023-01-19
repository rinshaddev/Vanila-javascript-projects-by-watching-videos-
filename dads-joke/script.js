let jokes= document.getElementById("joke");
const jokeBtn = document.getElementById('joke-btn')


jokeBtn.addEventListener('click', generateDad)

 generateDad()

 async function generateDad(){
    const config = {
        headers:{
            Accept: 'application/json',
        },
    }

    let res = await fetch ('https://icanhazdadjoke.com',config)
    
    const data = await res.json()

    jokes.innerHTML = data.joke

}

//using .then

// function generateDad(){
//     const config = {
//         headers:{
//             Accept: 'application/json',
//         },
//     }

//     fetch ('https://icanhazdadjoke.com',config).then((res) => res.json())
//     .then((data) => {
//         jokes.innerHTML=  data.joke

      
//     })
// }