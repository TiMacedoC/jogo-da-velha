winningSequences = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]

const playerControl = document.querySelectorAll('div[name="player"]');

changePlayer("axis");

var plays = ['1', '2', '3', '4', '5', '6', '7', '8']


// Muda quem o simbolo que vai ser renderizado na tela
function changePlayer(player) {

    playerControl.forEach(element => {

        if (!(element.className.endsWith('active'))) {

            if (player == 'circle') {
                element.className = "axis"
            } else {
                element.className = "circle"
            }
        }

    });
}


function makePlay(position, name) {

    plays[position] = name;

    setWinner()

    playerControl[position].className += ' active';
    changePlayer(name);
}



function setWinner() {
    winningSequences.forEach(sequency => {

        if (plays[sequency[0]] == plays[sequency[1]] &&
            plays[sequency[1]] == plays[sequency[2]]) {

            // Não deixa mais clicar quando é definido o ganhador
            playerControl.forEach(element => {
                element.style.pointerEvents = "none";
                element.parentNode.style.pointerEvents = "none";
            });

            // Pinta os espaços onde a sequencia é vencedora 
            for (i = 0; i < 3; i++) {
                playerControl[sequency[i]].parentNode.style.backgroundColor = "var(--winnerColor)";
            }


        }
    });
}

function restartGame() {
    playerControl.forEach(element => {
        element.className = "axis"
    });

    plays = ['1', '2', '3', '4', '5', '6', '7', '8']


    // VOlta a cor do quadrado para a original e devolve o poder de clicar
    playerControl.forEach(element => {
        element.parentNode.style.backgroundColor = "var(--field)";
        element.style.pointerEvents = "auto";
        element.parentNode.style.pointerEvents = "auto";
    });


}
