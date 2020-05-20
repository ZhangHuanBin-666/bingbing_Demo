const container = document.getElementById('container');
const colors = ["#e74c3c", "#8e44ad","#3498db","#e67e22","#2ecc71"];
const squareTotal = 1000;

for(let i = 0; i < squareTotal; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    // // mouseover
    square.addEventListener('mouseover', () => {
        setColorToEl(square);
    })

    // // mouseout
    square.addEventListener('mouseout', () => {
        removeColorFromEl(square);
    });
    container.appendChild(square);
}

function setColorToEl(element){
    const color = getRandomColor();
    element.style.background = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColorFromEl(element){
    element.style.background = "#1d1d1d";
    element.style.boxShadow = `0 0 2px #000`
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}