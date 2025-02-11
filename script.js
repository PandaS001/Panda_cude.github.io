const faces = document.querySelectorAll('.cube-face');
const characters = "0123456789";
const numCharacters = 50;

function createBoard() {
    faces.forEach((face, faceIndex) => {
        for (let i = 0; i < 9; i++) {
            const square = document.createElement('div');
            square.classList.add('square');
            square.dataset.face = faceIndex;
            square.dataset.index = i;
            face.appendChild(square);
        }
    });
}

function createFallingCharacters() {
    const body = document.body;
    for (let i = 0; i < numCharacters; i++) {
        const char = document.createElement('span');
        char.className = 'character';
        char.textContent = characters[Math.floor(Math.random() * characters.length)];
        char.style.color = '#FFA500';
        char.style.fontSize = '3em';
        char.style.top = '-50px'; // Поднимаем цифры выше
        char.style.left = Math.random() * 100 + 'vw';
        char.style.animationDelay = Math.random() * 5 + 's';
        char.style.animationDuration = Math.random() * 3 + 3 + 's';
        body.appendChild(char);
    }
}

const cubeFaces = document.querySelectorAll('.cube-face');
const cubeColors = ["blue", "orange", "pink", "red"];
let currentColorIndex = 0;

function changeCubeColor() {
    cubeFaces.forEach(face => {
        face.style.backgroundColor = cubeColors[currentColorIndex];
        face.style.border = '1px solid white';
    });

    currentColorIndex = (currentColorIndex + 1) % cubeColors.length;
}

createBoard();
createFallingCharacters();

//script.js
function goBack() {
    window.history.back();
  }