const cells = document.querySelectorAll(".cell");
const message = document.getElementById("message");
const resetButton = document.getElementById("reset");
const currentPlayerIndicator = document.getElementById("current-player");

let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let gameActive = true;

const winPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6]            // Diagonals
];

const playSound = (type) => {
    const audio = new Audio(type === "win" ? "win.mp3" : "click.mp3");
    audio.play();
};

const checkWinner = () => {
    for (let pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            gameActive = false;
            message.textContent = `${board[a]} Wins! 🎉`;
            playSound("win");
            pattern.forEach(index => cells[index].classList.add("winner-line"));
            return;
        }
    }

    if (!board.includes("")) {
        gameActive = false;
        message.textContent = "It's a Draw! 🤝";
        return;
    }
};

cells.forEach((cell, index) => {
    cell.addEventListener("click", () => {
        if (!gameActive || board[index] !== "") return;
        board[index] = currentPlayer;
        cell.textContent = currentPlayer;
        playSound("click");
        checkWinner();
        currentPlayer = currentPlayer === "X" ? "O" : "X";
        currentPlayerIndicator.textContent = currentPlayer;
    });
});

resetButton.addEventListener("click", () => {
    board = ["", "", "", "", "", "", "", "", ""];
    cells.forEach(cell => {
        cell.textContent = "";
        cell.classList.remove("winner-line");
    });
    message.textContent = "";
    gameActive = true;
    currentPlayer = "X";
    currentPlayerIndicator.textContent = currentPlayer;
});
