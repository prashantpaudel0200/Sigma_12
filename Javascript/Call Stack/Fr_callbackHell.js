
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



function save2Db(data){
    return new Promise((resolve, reject)=>{
        let internetSpeed = Math.floor(Math.random()*10)+1;
        if(internetSpeed>4){
               resolve("Data is saved");
        } else{
               reject("Data is not saved, weak connection");  
    }
    });
};


let result = save2Db("Prashant Paudel");
result.then(()=>{
    console.log("Promise was resolved.");
})
.catch(()=>{
    console.log("Promise was rejected!");
})