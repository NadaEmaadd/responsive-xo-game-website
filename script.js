let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let isGameActive = true;

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const statusDisplay = document.getElementById("status");

function makeMove(cell, index) {
    if (board[index] !== "" || !isGameActive) return;

    board[index] = currentPlayer;
    cell.textContent = currentPlayer;

    if (checkWin()) {
        statusDisplay.textContent = `الفائز: ${currentPlayer}`;
        isGameActive = false;
    } else if (board.every(cell => cell !== "")) {
        statusDisplay.textContent = "تعادل!";
        isGameActive = false;
    } else {
        currentPlayer = currentPlayer === "X" ? "O" : "X";
        statusDisplay.textContent = `الدور الحالي: ${currentPlayer}`;
    }
}

function checkWin() {
    return winningConditions.some(condition => {
        const [a, b, c] = condition;
        return board[a] === currentPlayer &&
               board[a] === board[b] &&
               board[a] === board[c];
    });
}

function resetGame() {
    board = ["", "", "", "", "", "", "", "", ""];
    currentPlayer = "X";
    isGameActive = true;
    statusDisplay.textContent = "الدور الحالي: X";
    document.querySelectorAll(".cell").forEach(cell => cell.textContent = "");
}
