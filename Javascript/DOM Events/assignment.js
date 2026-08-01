let btn = document.querySelector("button");


btn.addEventListener("click", function(){
    let div = document.querySelector("#div");
    let h1 = document.querySelector("h1");
    let clr = colorGenerator();
    div.style.backgroundColor = clr;
    console.dir(clr);
})


function colorGenerator(){
let temp;
let color="";
for(let i=0; i< 6; i++){
    temp = indexGen();
    color = color + temp;
}
let x = `#${color}`;
return x;
}
function indexGen(){
    let alp = ["a", "b", "c", "d", "e", "f", "0","1","2","3","4","5","6","7","8","9"];
    let idx =  Math.floor(Math.random() * 16);

    return alp[idx];

}

// function numGen(){
//     return Math.floor(Math.random()* 10);
// }