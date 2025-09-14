// Game state
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'O';
let gameActive = true;
let scores = { O: 0, X: 0 };

// Winning combinations
const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6] // Diagonals
];

// Make a move
function makeMove(cellIndex) {
    if (!gameActive || gameBoard[cellIndex] !== '') {
        showAlert('This cell is already occupied!');
        return;
    }

    // Update game board
    gameBoard[cellIndex] = currentPlayer;
    
    // Update UI
    const cell = document.getElementById(`cell-${cellIndex}`);
    if (currentPlayer === 'O') {
        cell.innerHTML = '<i class="fa-regular fa-circle text-6xl"></i>';
    } else {
        cell.innerHTML = '<i class="fa-solid fa-xmark text-6xl"></i>';
    }

    // Check for win
    if (checkWin()) {
        gameActive = false;
        scores[currentPlayer]++;
        updateScores();
        showAlert(`${currentPlayer} wins!`);
        return;
    }

    // Check for draw
    if (checkDraw()) {
        gameActive = false;
        showAlert('It\'s a draw!');
        return;
    }

    // Switch player
    currentPlayer = currentPlayer === 'O' ? 'X' : 'O';
    updateTurnIndicator();
}

// Check for win
function checkWin() {
    return winningCombinations.some(combination => {
        return combination.every(index => {
            return gameBoard[index] === currentPlayer;
        });
    });
}

// Check for draw
function checkDraw() {
    return gameBoard.every(cell => cell !== '');
}

// Update scores
function updateScores() {
    document.getElementById('score-o').textContent = scores.O;
    document.getElementById('score-x').textContent = scores.X;
}

// Update turn indicator
function updateTurnIndicator() {
    const turnElement = document.getElementById('current-turn');
    turnElement.textContent = currentPlayer;
    turnElement.className = currentPlayer === 'O' ? 'text-blue-400 font-bold' : 'text-red-400 font-bold';
}

// Show alert
function showAlert(message) {
    const alert = document.getElementById('alert');
    const alertMessage = document.getElementById('alert-message');
    alertMessage.textContent = message;
    alert.classList.remove('hidden');
    
    // Hide alert after 3 seconds
    setTimeout(() => {
        alert.classList.add('hidden');
    }, 3000);
}

// Reset game
function resetGame() {
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'O';
    gameActive = true;
    
    // Clear board
    for (let i = 0; i < 9; i++) {
        document.getElementById(`cell-${i}`).innerHTML = '';
    }
    
    // Update turn indicator
    updateTurnIndicator();
}

// Initialize game when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    updateTurnIndicator();
});
