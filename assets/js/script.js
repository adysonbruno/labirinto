const map = [
    "WWWWWWWWWWWWWWWWWWWWW",
    "W   W     W     W W W",
    "W W W WWW WWWWW W W W",
    "W W W   W     W W   W",
    "W WWWWWWW W WWW W W W",
    "W         W     W W W",
    "W WWW WWWWW WWWWW W W",
    "W W   W   W W     W W",
    "W WWWWW W W W WWW W F",
    "S     W W W W W W WWW",
    "WWWWW W W W W W W W W",
    "W     W W W   W W W W",
    "W WWWWWWW WWWWW W W W",
    "W       W       W   W",
    "WWWWWWWWWWWWWWWWWWWWW",
];

for(let i=0;i<map.length;i++){
    let row = document.createElement("div");
    row.className = "row";
    let wallBlocks = map[i].split("");
    for(let j=0;j<wallBlocks.length;j++){
        let wallBlock = document.createElement("div");

        if(wallBlocks[j]===" "){
            wallBlock.className = "empty";
        }else{
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

document.addEventListener('keydown', (event) => {
    let playerPositionRow = parseInt(player.parentElement.dataset.row);
    let playerPositionColumn = parseInt(player.parentElement.dataset.column);
    const keyName = event.key;

    if(keyName==="ArrowUp"){
        playerPositionRow -=1;
    }else if(keyName==="ArrowDown"){
        playerPositionRow +=1;
    }else if(keyName==="ArrowLeft"){
        playerPositionColumn-=1;
    }else if(keyName==="ArrowRight"){
        playerPositionColumn+=1;
    }
    let newParent = document.querySelector(`[data-row=\'${playerPositionRow}\'][data-column=\'${playerPositionColumn}\']`);

    if(newParent!==null){
        if(newParent.className==="empty" || newParent.className==="S"){
            newParent.appendChild(player)
        }else if (newParent.className==="F"){
            newParent.appendChild(player)
            alert("Você venceu!!!")
        }
    }
})
