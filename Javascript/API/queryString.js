let url = "http://universities.hipolabs.com/search?country=";
// let country = "nepal";
async function getUni(desh){
    try{
    let req = await axios.get(url+desh);
    return (req.data);
    } catch(err){
        console.log("Error- ",err);
    }
}

let btn = document.querySelector("button");
let input = document.querySelector("input");


btn.addEventListener("click", async()=>{
    let desh = input.value;
    let colArray = await getUni(desh);
    showarry(colArray);
    console.log(colArray);
});
let p =document.querySelector("p");
 function showarry(collary){
    let list = document.querySelector("#list");
    list.innerText = "";
    for(coll of collary){
        console.log(coll.name);
        let li = document.createElement("li");
        li.innerText = coll.name;
        list.appendChild(li);
        let p = document.createElement("p");
        p.innerText = (`${coll["state-province"]} state, ${input.value}`);
        
        list.appendChild(p);
    }
 }