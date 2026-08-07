// let n=5;

// for(let i = 0; i<5; i++){
//     console.log("Hello ", i+1);
// }

let arg = process.argv;
for(let i = 2; i< arg.length; i++){
    console.log("Hello to ", arg[i]);
}