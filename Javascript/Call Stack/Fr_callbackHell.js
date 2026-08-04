
// save2Db("Prashant Paudel is my name",
//     () => {
//         console.log("SUCESS1: DATA IS SAVED");
//         save2Db("Hello World", () => {
//             console.log("SUCESS2: DATA IS SAVED");
//             save2Db("Pravin Paudel", () => {
//                 console.log("SUCESS3: DATA IS SAVED");
//             }, () => {
//                 console.log("FAILURE3: DATA IS NOT SAVED");
//             })
//         }, () => {
//             console.log("FAILURE2: DATA IS NOT SAVED.")
//         });
//     },
//     () => {
//         console.log("FAILURE: DATA IS NOT SAVED. Weak Connection");
//     }
// );

// function save2Db(data){
//     return new Promise((resolve, reject)=>{
//         let internetSpeed = Math.floor(Math.random()*10)+1;
//         if(internetSpeed>4){
//                resolve("Data is saved");
//         } else{
//                reject("Failure: weak connection");  
//     }
//     });
// };


// save2Db("Prashant Paudel")
//  .then((result)=>{
//     console.log("Data1 saved");
//     console.log(result)
//     return save2Db("Pravin Paudel");
//  })
//   .then((result)=>{
//     console.log("Data2 Saved");
//     console.log(result)
//     return save2Db("Laxmi Paudel");
//   })
//   .then((result)=>{
//     console.log("Data3 Saved");
//     console.log(result)
//   })
//   .catch((error)=>{
//     console.log("Promise was rejected");
//     console.log(error);
//   });





function savetoData(data){
    return new Promise((resolve, reject)=>{
        let num = Math.floor(Math.random()* 10)+1;
        if(num>4){
            resolve("Success: Data is saved");
        } else{
            reject("Failure: Data is not saved");
        }
    });
};


savetoData("My name is Prashant Paudel")
  .then((result)=>{
    console.log(result);
    console.log("Data1: is saved");
    return savetoData("I am saving HELLO WORLD");
  })
  .then((result) =>{
    console.log(result);
    console.log("Data2: is saved");
    return savetoData("I am saving 3rd data");
  })
  .then((result)=>{
    console.log(result);
    console.log("DATA3: is saved");
  })
  .catch((error)=>{
    console.log("DATA IS NOT SAVED")
    console.log(error);
  })