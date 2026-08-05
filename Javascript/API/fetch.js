let url = "https://catfact.ninja/fact";

fetch(url)
 .then((response)=>{
    console.log(response)
 })
 .catch((error) =>{
    console.log("Error Found!");
 })