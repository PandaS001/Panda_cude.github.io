const faces = document.querySelectorAll('.cube-face');
const characters = "0123456789"; // Только цифры
const numCharacters = 50;

let boardState = Array(6).fill(null).map(() => Array(9).fill(""));
let currentPlayer = 'X';
let gameActive = true;

const restartButton = document.getElementById('restartButton'); // Получаем кнопку

function createBoard() {
    faces.forEach((face, faceIndex) => {
        for (let i = 0; i < 9; i++) {
            const square = document.createElement('div');
            square.classList.add('square');
            square.dataset.face = faceIndex;
            square.dataset.index = i;
            square.addEventListener('click', handleSquareClick);
            face.appendChild(square);
        }
    });
}

function handleSquareClick(event) {
    if (!gameActive) return;

    const square = event.target;
    const faceIndex = parseInt(square.dataset.face);
    const squareIndex = parseInt(square.dataset.index);

    if (boardState[faceIndex][squareIndex] !== "") return;

    boardState[faceIndex][squareIndex] = currentPlayer;
    square.textContent = currentPlayer;

    if (checkWin(faceIndex, squareIndex, currentPlayer)) {
        alert(`Победил ${currentPlayer}!`);
        gameActive = false;
        return;
    }

    if (isBoardFull()) {
        alert("Ничья!");
        gameActive = false;
        return;
    }

    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function checkWin(faceIndex, squareIndex, currentPlayer) {
    // ЗАГЛУШКА (нужно реализовать логику для куба!)
    const face = boardState[faceIndex];
    const row = Math.floor(squareIndex / 3);
    const col = squareIndex % 3;

    if (face[row * 3] === currentPlayer && face[row * 3 + 1] === currentPlayer && face[row * 3 + 2] === currentPlayer) return true;
    if (face[col] === currentPlayer && face[col + 3] === currentPlayer && face[col + 6] === currentPlayer) return true;

    if (squareIndex % 2 === 0) {
        if ((squareIndex === 0 || squareIndex === 4 || squareIndex === 8) &&
            face[0] === currentPlayer && face[4] === currentPlayer && face[8] === currentPlayer) return true;

        if ((squareIndex === 2 || squareIndex === 4 || squareIndex === 6) &&
            face[2] === currentPlayer && face[4] === currentPlayer && face[6] === currentPlayer) return true;
    }

    return false;
}

function isBoardFull() {
    for (let i = 0; i < 6; i++) {
        if (boardState[i].includes("")) return false;
    }
    return true;
}

function createFallingCharacters() {
    const body = document.body;
    for (let i = 0; i < numCharacters; i++) {
        const char = document.createElement('span');
        char.className = 'character';
        char.textContent = characters[Math.floor(Math.random() * characters.length)];
        char.style.left = Math.random() * 100 + 'vw';
        char.style.animationDelay = Math.random() * 5 + 's';
        char.style.animationDuration = Math.random() * 3 + 3 + 's';
        body.appendChild(char);
    }
}

// Обработчик кнопки "Начать сначала"
restartButton.addEventListener('click', () => {
    location.reload(); // Простейший способ перезагрузить страницу
});

createBoard();
createFallingCharacters();

const backButton = document.getElementById('backButton');

backButton.addEventListener('click', function(event) {
    event.preventDefault();
    window.history.back();
});