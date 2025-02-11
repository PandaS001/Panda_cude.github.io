const characters = "0123456789";
const numCharacters = 50;

function createFallingCharacters() {
    const body = document.body;
    for (let i = 0; i < numCharacters; i++) {
        const char = document.createElement('span');
        char.className = 'character';
        char.textContent = characters[Math.floor(Math.random() * characters.length)];
        char.style.left = Math.random() * 100 + 'vw';
        char.style.animationDelay = Math.random() * 5 + 's';
        char.style.animationDuration = Math.random() * 3 + 3 + 's';
        char.style.color = '#FFA500'; // Устанавливаем оранжевый цвет
        body.appendChild(char);
    }
}

const backButton = document.getElementById('backButton');

backButton.addEventListener('click', function(event) {
    event.preventDefault();
    window.history.back();
});

createFallingCharacters();