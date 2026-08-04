let jsonRes = 
       '{"fact":"Long, muscular hind legs enable snow leopards to leap seven times their own body length in a single bound.","length":106}'

let validRes = JSON.parse(jsonRes);
// console.log(validRes);
// console.log("validRes is a object now, and we can access key-value pair.");
// console.log(validRes.fact);
console.log(validRes.length);

let student = {
    name : "Prashant Paudel",
    course : "BSC CSIT"
};
console.log(JSON.stringify(student));

