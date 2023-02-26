const gameData = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
];

let editedPlayer = 0;
let activePlayer = 0;
let currentRound = 1;
let gameIsover = false;

const players = [
    {
        name: '',
        symbol: 'X'
    },
    {
        name: '',
        symbol: 'O'
    },
];

const playerConfigOverlayElement = document.getElementById('config-overlay');
const backdropElement = document.getElementById('backdrop');
const formElement = document.querySelector('form');
const errorOutput = document.getElementById('config-error');
const gameAreaElement = document.getElementById('active-game');
const activePlayerName = document.getElementById('active-player-name');
const gameOverElement = document.getElementById('game-over');

const editPlayer1BtnElement = document.getElementById('edit-player-1-btn');
const editPlayer2BtnElement = document.getElementById('edit-player-2-btn');
const cancelConfigBtnElement = document.getElementById('cancel-config-btn');
const startNewGameBtnElement = document.getElementById('start-game-btn');
// const gameFieldElement = document.querySelectorAll('#game-board li');
const gameBoard = document.getElementById('game-board');

editPlayer1BtnElement.addEventListener('click', openPlayerConfig);
editPlayer2BtnElement.addEventListener('click', openPlayerConfig);

cancelConfigBtnElement.addEventListener('click', closePlayerConfig);
backdropElement.addEventListener('click', closePlayerConfig);

formElement.addEventListener('submit', savePlayerConfig);
startNewGameBtnElement.addEventListener('click', startNewGame);

// for (const gameFieldElements of gameFieldElement) {
//     gameFieldElements.addEventListener('click', selectGameField);
// }
gameBoard.addEventListener('click', selectGameField);