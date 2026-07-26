let arr1=[3,45,56,34,-23,56];
let arr2=[10,20,30,40,50];
let ans = arr1.every((el)=> {
    return (el%10 ==0);
}
);
let ans2 = arr2.every((el)=>el%10 ==0);



function getMin(nums){
    let min = nums.reduce((min, el)=>{
    if(min>el){
        return el;
    } else{
        return min;
    }
});
return min; 
}