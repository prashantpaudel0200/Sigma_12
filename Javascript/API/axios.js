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

let url2 = "https://dog.ceo/api/breeds/image/random";
let btn2 = document.querySelector("#img");

btn2.addEventListener("click", async()=>{
    let img = document.querySelector("img");
    let link = await getImage();
    img.setAttribute("src", link); 
})



async function getImage(){
    try{
        let req = await axios.get(url2);
        console.log(req.data.message);
        return req.data.message;
    }
    catch(err){
        console.log("Error- ",err);
    }
}