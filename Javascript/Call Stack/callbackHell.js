let h1 = document.querySelector("h1");

function changeColor(color, delay) {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
        h1.style.color = color;
        resolve("Color changed successfully");
    }, delay);
});
}

let requestPromise = changeColor("red", 1000)
 .then((result)=>{
    console.log(result);
    console.log("Color change");
    return changeColor("green", 1000);
 })
 .then((result)=>{
    console.log(result);
    console.log("Color changed");
    return changeColor("pink",2000)
 })
 .then((result)=>{
    console.log(result);
    console.log("Color changed")
    return changeColor("blue", 1000);
 })
 .then((result)=>{
    console.log(result);
    console.log("Reached to final color");
 })
 .catch(()=>{
    console.log("Color is not changed");
    
 })










// changeColor("red", 1000)
//   .then((result)=>{
//     console.log("color changed");
//     return changeColor("orange", 1000);
//   })
//   .then((result)=>{
//     console.log("color2, changed");
//     return changeColor("pink", 1000);
//   })
//   .then(()=>{
//     console.log("Color3, is changed");
//     return changeColor("blue", 1000);
//   })
//   .then((result)=>{
//     console.log(result);
//     console.log("Color4 is saved");
//   })
//   .catch(()=>{
//     console.log("Failure: Color is not changed")
//   })


// changeColor("red", 1000, () => {
//     changeColor("orange", 1000, () => {
//         changeColor("pink", 1000, ()=>{
//             changeColor("blue", 1000);
//         });
//     });
// });
// //callback nesting -> callback hell