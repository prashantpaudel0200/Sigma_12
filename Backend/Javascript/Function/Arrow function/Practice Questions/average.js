let a = [1,2,3,4,5,55,53,23,12];
arrayAverage = (arr) =>{
    let sum=0;
    for(let i =0; i<arr.length; i++){
        sum+=arr[i];
    }
    let average = sum/ arr.length;
    console.log(average);
}