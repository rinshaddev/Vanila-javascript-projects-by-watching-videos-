

const secondHand = document.getElementById('second');
const minuteHand = document.getElementById('minute');
const hourHand = document.getElementById('hour');

window.onload = setInterval(() => {
    setClock();
}, 10000/60);

function setClock(){
    const currentDate = new Date()
    const secondsRatio = currentDate.getSeconds() / 60
    const minuteRatio = (secondsRatio + currentDate.getMinutes() )/ 60
    const hourRatio = (minuteRatio + currentDate.getHours()) /12 
    setRotation(secondHand, secondsRatio)
    setRotation(minuteHand, minuteRatio)
    setRotation(hourHand, hourRatio)
    
    
}

function setRotation(element , rotationRatio) {
    element.style.transform=`rotate(${rotationRatio * 360}deg)`
}