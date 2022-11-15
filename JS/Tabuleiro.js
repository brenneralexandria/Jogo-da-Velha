// As especificidades do tabuleiro e as condições de vitória.
const cells = document.querySelectorAll(".cell");

let NextTurn = true;

const WinningMoves = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [2,5,8],
    [1,4,7],
    [6,3,0],
    [8,4,0],
    [6,4,2]
]

// analisar de quem é a vez de jogar.
function play(id) {
    const cell = document.getElementById(id);
    turn = NextTurn ? PLAYER_X : PLAYER_O;
    cell.textContent = turn;
    cell.classList.add(turn);
    AnalyzeVictory(turn);
}

// Analisar quem foi o vencedor
function AnalyzeVictory(turn) {
    const Winner = WinningMoves.some((wmoves) => {
        return wmoves.every((i) => {
            return cells[i].classList.contains(turn);
        })
    });

    if (Winner) {
        FinishGame(turn);
    } else if (AnalyzeTie()) {
        FinishGame();
    } else {
        NextTurn = !NextTurn;
    }
}

function AnalyzeTie() {
    let x = 0;
    let o = 0;

    for (i in cells) {
      if(!isNaN(i)) {
        if (cells[i].classList.contains(PLAYER_X)) {
            x++;
        }
        if (cells[i].classList.contains(PLAYER_O)) {
            o++;
         }  
      }
    }

    return x + o === 9 ? true : false;
}

function FinishGame(Winner = null) {
    const ResultMessage = document.getElementById("ResultMessage");
    const h2 = document.createElement("h2");
    const h3 = document.createElement("h3");
    let Mensage = null;

    ResultMessage.style.display = "block";
    ResultMessage.appendChild(h2);
    ResultMessage.appendChild(h3);

    if (Winner) {
        h2.innerHTML = `The player <span>${Winner}</span> won`;
    } else {
        h2.innerHTML = "The game ended in a draw";
    }
}