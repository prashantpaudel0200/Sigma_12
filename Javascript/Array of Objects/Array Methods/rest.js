// function sum(...arg){
//     for(let i= 0; i<arg.length; i++){
//         console.log("You gave us : ",arg[i]);
//     }
// }

// function sum(...arg){
//     return arg.reduce((sum, el)=> sum+el );
// }

// function findmax(...arg){
//     return arg.reduce((max, el)=> {
//         return max>el? max:el;
//     })
// };


function mini(...arg){
    return arg.reduce((min, el)=>{
        if(min>el)
            return el;
        else
            return min;
    })
};