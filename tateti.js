const tablero =
    [['O', '', 'x'], ['O', 'x', 'O'], ['O', 'O', "O"]]

function hayGanador(tablero){
    // Chequeo filas
    for (let i = 0; i < 3; i++){
        if (tablero[i][0] !== '' && tablero[i][0] === tablero[i][1] && tablero[i][1] === tablero[i][2]){
            return tablero[i][0] === 'x' ? 'Gano cruz' : 'Gano circulo';
        }
    }
    // Chequeo columnas
    for (let i = 0; i < 3; i++){
        if (tablero[0][i] !== '' && tablero [0][i] === tablero[1][i] && tablero[1][i] === tablero[2][i]){
            return tablero[0][i] === 'x' ? 'Gano cruz' : 'Gano circulo';
        }
    }
    //Chequeo primera diagonal
        if (tablero[0][0] !== '' && tablero[0][0] === tablero[1][1] && tablero[1][1] === tablero[2][2]){
            return tablero[0][0] === 'x' ? 'Gano cruz' : 'Gano circulo';
        }

    // Chequeo segunda diagonal
    if (tablero [0][2] !== '' && tablero[0][2] === tablero[1][1] && tablero [1][1] === tablero[2][0]){
        return tablero [0][2] === 'x' ? 'Gano cruz' : 'Gano circulo'
    }
}