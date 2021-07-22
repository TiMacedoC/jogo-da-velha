const gameContainer = document.querySelector(".game-container")


const playControl = [
    { name: "circle", active: false },
    { name: "circle", active: false },
    { name: "circle", active: false },
    { name: "circle", active: false },
    { name: "circle", active: false },
    { name: "circle", active: false },
    { name: "circle", active: false },
    { name: "circle", active: false },
    { name: "circle", active: false },
]

const playerControl = document.querySelectorAll('div[name="player"]');

changePlayer("circle");


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

    playerControl[position].className += ' active';

    console.log(position, name);
    console.log(playerControl);

    changePlayer(name);
}

function restartGame() {
    playerControl.forEach(element => {
        element.className = "axis"
    });
}

