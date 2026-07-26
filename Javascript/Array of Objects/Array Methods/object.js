let arr = [{
    name:"Prashant",
    marks:97
},
{
    name:"Jeeshant",
    marks:90
},
{
    name:"Manasvi",
    marks:99
}];
// arr.forEach((student) =>{
//     console.log(student.name);
// });

let num = [10,22,33,44,55,2,19,87];
let double = num.map((el) =>{
    return el*2;
})
let gpa = arr.map((el)=>{
    return el.marks/25;
})


let ans = num.filter((el) =>{
    return !(el%2 ==0);
});

let less50 = num.filter((el)=>{
    return el<50;
})

let status = num.every((el)=>el%2==0);
// console.log([2,4,6,0].every((el) => el%2 == 0));

let check = num.some((el)=> el%2 ==0);

let result = num.reduce((rev, el)=>
    rev + el)