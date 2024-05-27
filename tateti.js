const tablero =
    [['O', '', 'x'], ['O', 'x', 'O'], ['O', 'O', "O"]]

function hayGanador(tablero) {
    for (let i = 0; i < 3; i++) {
        if (tablero[i][0] !== '' && tablero[i][0] === tablero[i][1] && tablero[i][1] === tablero[i][2]) {
            return tablero[i][0] === 'x' ? 'Gano cruz' : 'Gano circulo';
        }
    }
}