const cells = document.querySelectorAll(".cell");
const message = document.getElementById("message");
const resetButton = document.getElementById("reset");

let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let gameActive = true;

const checkWinner = () => {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6] // Diagonals
    ];

    for (let pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            gameActive = false;
            message.textContent = `${board[a]} Wins!`;
            return;
        }
    }

    if (!board.includes("")) {
        gameActive = false;
        message.textContent = "It's a Draw!";
    }
};

cells.forEach((cell, index) => {
    cell.addEventListener("click", () => {
        if (!gameActive || board[index] !== "") return;
        board[index] = currentPlayer;
        cell.textContent = currentPlayer;
        checkWinner();
        currentPlayer = currentPlayer === "X" ? "O" : "X";
    });
});

resetButton.addEventListener("click", () => {
    board = ["", "", "", "", "", "", "", "", ""];
    cells.forEach(cell => (cell.textContent = ""));
    message.textContent = "";
    gameActive = true;
    currentPlayer = "X";
});
