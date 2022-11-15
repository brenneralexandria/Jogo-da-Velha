// Movimentos e as marcações do tabuleiros //

const PLAYER_X = "X"
const PLAYER_O = "O";

/* Para testar os cliques dentro das celulas e validar que só será válido cliques dentro do jogo */
document.addEventListener("click", (Event) => {
    if(Event.target.matches(".cell")) {
        play(Event.target.id);
    }
});