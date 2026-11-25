let url = "https://icanhazdadjoke.com/";
const config = { headers:{Accept: "application/json"} };
async function getJoke(){
    let req = await axios.get(url, config);
    console.log(req.data.joke);
}




