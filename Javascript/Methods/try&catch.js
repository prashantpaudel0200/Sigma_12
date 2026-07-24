console.log("Before Try:");
try {
    console.log(a);
} catch(err){
    console.log("caught an error..... 'a' is not define.");
    console.log(err);
}
console.log(":After try-catch block.");
