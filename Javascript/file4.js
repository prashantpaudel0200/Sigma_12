let arr = [1,2,3,4,5,6,2,3];
let num = 2;
let i;
for(i = 0; i < arr.length; i++){
    if( arr[i] == num)
        {
            arr.splice(i, 1);
        }
}
