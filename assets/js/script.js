const map = [
    "WWWWWWWWWWWWWWWWWWWWW",
    "W   W     WP    W W W",
    "W W W WWW WWWWW W W W",
    "W WPW   W     W W   W",
    "W WWWWWWW W WWW W W W",
    "W         W     W W W",
    "W WWW WWWWW WWWWW WRW",
    "W W   W   W W     W W",
    "W WWWWW W W W WWW W F",
    "S     W W W W WPW WWW",
    "WWWWW W W W W W W W W",
    "W       W W   W W W W",
    "W WWWWWWW WWWWW W W W",
    "W      PW       W   W",
    "WWWWWWWWWWWWWWWWWWWWW",
];

for (let i = 0; i < map.length; i++) {
    let row = document.createElement("div");
    row.className = "row";

    let wallBlocks = map[i].split("");
    for (let j = 0; j < wallBlocks.length; j++) {
        let wallBlock = document.createElement("div");

        if(wallBlocks[j] === "P"){
            wallBlock.classList.add("empty","Pokeball");
        }else if(wallBlocks[j] === " ") {
            wallBlock.className = "empty";
        }else if(wallBlocks[j] === "R"){
            wallBlock.classList.add("empty","Rocket");
        } else {
            wallBlock.className = wallBlocks[j];
        }
        wallBlock.dataset.row = `${i}`;
        wallBlock.dataset.column = `${j}`;

        row.appendChild(wallBlock);
    }
    document.body.appendChild(row);
}

let player = document.createElement("div");
player.id = "player";

let parent = document.getElementsByClassName("S");
parent[0].appendChild(player)

let modal = document.getElementById("modal")
modal.id = "modal";

let h2Modal = document.getElementById("modal-h2")

let buttonReset = document.getElementById("modal-reset");

document.addEventListener('keydown', (event) => {
    let playerPositionRow = parseInt(player.parentElement.dataset.row);
    let playerPositionColumn = parseInt(player.parentElement.dataset.column);

    const keyName = event.key;

    let numberOfPokeballs = document.getElementsByClassName("Pokeball").length;
    let numberOfTeamRocket = document.getElementsByClassName("Rocket").length;

    if (keyName === "ArrowUp") {
        playerPositionRow -= 1;
        player.style.backgroundImage = "url('./assets/img/playerUp.png')"
    } else if (keyName === "ArrowDown") {
        playerPositionRow += 1;
        player.style.backgroundImage = "url('./assets/img/playerDown.png')"
    } else if (keyName === "ArrowLeft") {
        playerPositionColumn -= 1;
        player.style.backgroundImage = "url('./assets/img/playerLeft.png')"
    } else if (keyName === "ArrowRight") {
        playerPositionColumn += 1;
        player.style.backgroundImage = "url('./assets/img/playerRight.png')"
    }

    let newParent = document.querySelector(`[data-row=\'${playerPositionRow}\'][data-column=\'${playerPositionColumn}\']`);

    if (newParent !== null) {
        if(newParent.classList[1] === "Pokeball"){
            newParent.classList.remove("Pokeball");
        }else if(newParent.classList[1] === "Rocket"){
            modal.className = "visible";
            h2Modal.innerText = "Para passar você precisa coletar todas as Pokeballs"
        }

        if (newParent.className === "empty" || newParent.className === "S") {
            newParent.appendChild(player);
        } else if (newParent.className === "F") {
            newParent.appendChild(player);
            buttonReset.className = "visible";
            modal.className = "visible";
            h2Modal.innerText = "Parabéns Você venceu!";
        }

        if(numberOfPokeballs === 0 && numberOfTeamRocket>0){
            let teamRocket = document.getElementsByClassName("Rocket");
            teamRocket[0].classList.remove("Rocket")
        }
    }
})

const form = document.getElementById("form");

form.addEventListener("submit", checkNotification);
function checkNotification (event) {
    event.preventDefault();
    modal.className = "hidden";

}

form.addEventListener("reset", reset);
function reset (event) {
    event.preventDefault();
    location.reload();
}
