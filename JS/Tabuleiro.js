// As especificidades do tabuleiro e as condições de vitória.

let CheckTurn = true;
const cells = document.querySelectorAll(".cell");
console.log(cells);

// analisar de quem é a vez de jogar.
function play(id) {
    const cell = document.getElementById(id);
    turn = CheckTurn ? PLAYER_X : PLAYER_O;
    cell.textContent = turn;
    CheckTurn = !CheckTurn;
    CheckWin(turn);
}

// Analisar quem foi o vencedor
function CheckWin(turn) {
}