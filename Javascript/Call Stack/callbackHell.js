let h1 = document.querySelector("h1");
setInterval(()=>{
    let color = getRandomColor();
    h1.style.color = color;
}, 2000);

function getRandomColor(){
    
    let r = Math.floor(Math.random()*255);
    let g = Math.floor(Math.random()*255);
    let b = Math.floor(Math.random()*255);
    let color = `rgb(${r}, ${g}, ${b})`;
    return color;
}