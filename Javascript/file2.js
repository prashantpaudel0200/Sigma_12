let heros=[
    ["Ironman", "Spiderman", "Thor"],
    ["Batman", "Wonder women", "Flash"]
]
for (let i=0; i<heros.length; i++){
        console.log(i+1);
    for(let j=0; j<heros[i].length; j++){
        console.log(` ${[i],[j]}.${heros[i][j]}`);
    }
}
for(name of heros){
    console.log(name);
}