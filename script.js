const gameContainer = document.querySelector(".game-container")


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

    console.log(plays)

    setWinner()

    playerControl[position].className += ' active';
    changePlayer(name);
}

function setWinner() {
    winningSequences.forEach(sequency => {
        console.log("sequencia " + sequency);

        if (plays[sequency[0]] == plays[sequency[1]] &&
            plays[sequency[1]] == plays[sequency[2]]) {

            playerControl.forEach(element => {
                element.style.pointerEvents = "none"
            });

            for (i = 0; i < 3; i++) {
                playerControl[sequency[i]].parentNode.style.backgroundColor = "var(--winnerColor)";
            }

        } else {
            console.log('diferente')
        }
    });
}

function restartGame() {
    playerControl.forEach(element => {
        element.className = "axis"
    });

    plays = ['1', '2', '3', '4', '5', '6', '7', '8']

    playerControl.forEach(element => {
        element.parentNode.style.backgroundColor = "var(--field)";
        element.style.pointerEvents = "auto"
    });
}
