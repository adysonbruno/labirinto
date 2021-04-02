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
            wallBlock.classList.add("empty","P");
        }else if(wallBlocks[j] === " ") {
            wallBlock.className = "empty";
        }else if(wallBlocks[j] === "R"){
            wallBlock.classList.add("empty","R");
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

let modal = document.createElement("div")
modal.id = "modal";
let h2Modal = document.createElement("h2");
h2Modal.innerText = "Parabéns Você venceu!"
modal.appendChild(h2Modal);
let count = 0;

document.addEventListener('keydown', (event) => {
    let playerPositionRow = parseInt(player.parentElement.dataset.row);
    let playerPositionColumn = parseInt(player.parentElement.dataset.column);
    const keyName = event.key;
    let numberOfPokeballs = document.getElementsByClassName("P").length;
    let numberOfTeamRocket = document.getElementsByClassName("R").length;

    if (keyName === "ArrowUp") {
        playerPositionRow -= 1;
        // animeImagem.setAttribute("style",
        //     "background-image: url(/keyboard-events/assets/img/" + event.target.id + ".png");
        player.style.backgroundImage = "url('/labirinto/assets/img/playerUp.png')"
    } else if (keyName === "ArrowDown") {
        playerPositionRow += 1;
        player.style.backgroundImage = "url('/labirinto/assets/img/playerDown.png')"
    } else if (keyName === "ArrowLeft") {
        playerPositionColumn -= 1;
        player.style.backgroundImage = "url('/labirinto/assets/img/playerLeft.png')"
    } else if (keyName === "ArrowRight") {
        playerPositionColumn += 1;
        player.style.backgroundImage = "url('/labirinto/assets/img/playerRight.png')"
    }
    let newParent = document.querySelector(`[data-row=\'${playerPositionRow}\'][data-column=\'${playerPositionColumn}\']`);

    if (newParent !== null) {

        if(newParent.classList[1] === "P"){
            newParent.classList.remove("P");
        }

        if (newParent.className === "empty" || newParent.className === "S") {
            newParent.appendChild(player);
        } else if (newParent.className === "F") {
            newParent.appendChild(player);
            // alert("Você venceu!!!");
            document.body.appendChild(modal)
        }

        if(numberOfPokeballs === 0 && numberOfTeamRocket>0){
            let teamRocket = document.getElementsByClassName("R");
            teamRocket[0].classList.remove("R")
        }

    }

    // if(newParent.className === "W"){
    //     count++;
    //     newParent.className = "empty";
    //     newParent.appendChild(player);
    // }else if(newParent.className === "empty"){
    //     newParent.appendChild(player);
    // }

})

