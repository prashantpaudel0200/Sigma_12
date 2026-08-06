let url = "https://catfact.ninja/fact";

async function getData(){
    try{
        let res = await axios.get(url);
        let result = (res.data.fact);
        return result;
    }
    catch(e){
        console.log("Error- ", e);
    }
};

let btn = document.querySelector("button");
btn.addEventListener("click", async ()=>{
    let p =document.querySelector("p");
    p.innerText = await getData();
})


