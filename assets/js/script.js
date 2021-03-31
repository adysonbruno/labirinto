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
        if(wallBlocks[j]==="S" || wallBlocks[j]==="F"){
            wallBlock.id = wallBlocks[j];
        }else if(wallBlocks[j]===" "){
            wallBlock.className = "hidden";
        }else{
            wallBlock.className = wallBlocks[j];
        }
        row.appendChild(wallBlock);
    }
    document.body.appendChild(row);
}

