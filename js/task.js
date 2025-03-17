const buttonStart = document.getElementById('start')
const buttonStop = document.getElementById('stop')
const view = document.getElementById('view')
let intervalId
let isPressed = false;

// старт счета
function startCount() {
    isPressed = !isPressed;
    
    if (!isPressed) {
        clearInterval(intervalId);
    } else {
        intervalId = setInterval(runCount, 1000);
    }
}
// счетчик в окне
let sec = 0;
function runCount() {
    console.log(++sec);
    view.textContent = sec

    
}

// остановка счетчика
function stopCount() {
     clearInterval(intervalId);
    sec = 0;
    console.log(sec);
    view.textContent = sec;
   
   
   
}
buttonStart.addEventListener('click', startCount)
buttonStop.addEventListener('click', stopCount)