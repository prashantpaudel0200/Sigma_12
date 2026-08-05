let url = "https://catfact.ninja/fact";

// fetch(url)
//  .then((response)=>{
//     return response.json();
//     })
//   .then((data)=>{
//     console.log("Data1 - ",data.fact);
//     return fetch(url);
//   })  
//   .then((response)=>{
//     return response.json();
//   })
//   .then((data2)=>{
//     console.log("Data2- ",data2.fact);
//   })
//  .catch((error) =>{
//     console.log("Error- ",error);
//  })
async function getFacts(){
    let res = await fetch(url);
    console.log(res);
    let fine =await res.json();
    console.log(fine.fact);
}








 console.log("I am Happy.")