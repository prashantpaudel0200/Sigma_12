//Question 1:
function sqrsum(...arg) {
    return arg.reduce((sum, el) => {
        return sum += el**2;
    })
}
function average(...arg){
    let sum = arg.reduce((el,sum)=>{
        return sum+=el;
    });
    return sum = sum/arg.length;
}

//Question 2
let num = [1,3,5,7,9,11,13,15];
let new_array = num.map((num)=> {
    return num+5;
});

//Question 3:
function caseconvertor(...arg){
let case1 = arg.map((letter)=>{
    return letter.toUpperCase();
}) 
return case1;
}
// Question 4:
function doubleAndReturn(arr, ...arg){
    let double = arr.map((el)=>{
        return el*2;
    })
    return [...arg, ...double];
}

//INPUT
//doubleAndReturn([1,2,3],[11,22])
//output:
//[11,22,2,4,6]

