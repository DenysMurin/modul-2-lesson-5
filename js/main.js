// !обработчик событий
const button = document.getElementById('myButton')
function buttonClicker() {
    alert('кнопка нажата')
}
button.addEventListener('click', buttonClicker)

// !объект события
const link = document.getElementById('myLink')
function linkClicker(event) {
    event.preventDefault();
    alert(`you pressed ${event.target.innerText}`);
}
link.addEventListener('click', linkClicker)
// !Всплытие событий
const outerDiv = document.getElementById('outerDiv');
const innerDiv = document.getElementById('innerDiv');
const innerButton = document.getElementById('innerButton');
function buttonClick() {
    alert('button pressed')
}
function divClick() {
    alert('Div pressed')
}
innerButton.addEventListener('click', buttonClick);
innerDiv.addEventListener('click', divClick);
outerDiv.addEventListener("click", divClick);
// !Делегирование событий
const list = document.getElementById('myList')
function listItem(event) {
    alert(`you choosed ${event.target.innerText}`);
}
list.addEventListener('click', listItem)
// !legacy
function countRoadmaps() {
    for (let i = 1; i <= 5; i++) {
        alert(`roadmap # ${i}`)
        
    }
}
// !Использование свойства DOM объекта
elem.onclick = function () {
    alert('зачем нажал?')
}