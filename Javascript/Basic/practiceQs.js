// let num=100;
// if(num%10 ==0){
//     console.log("The number is divisible by 10");
// }else {
//     console.log("The number is not divisible by 10");
// }
// let name=prompt("Enter your name: ");
// let age=prompt("Enter your age: ");
// alert(`${name} is ${age} years old`);

// let q=prompt("Enter the quater number");
// switch (q){
//     case '1':
//         console.log("January, February, March");
//         break;
//     case '2':
//         console.log("April, May, June");
//         break;
//     case '3':
//         console.log("Junly, Augest, September");
//         break;
//     case '4':
//         console.log("Octuber, November, December");
//         break;
//     default:
//         console.log("Refresh and enter valid Quater Number.");
// }
// let password=prompt("Enter your password");
// let message='Helloworld';
// console.log("Message before methods:",message);
// let newmessage=message.trim().toUpperCase();
// console.log(newmessage);
// let msg="IloveCoding.";
// let array=["Prashant", "Pravin","Laxmi","Kamal"];
// let info=["Prashant",19, "B.Sc. CSIT"];
let fruits = ["Mango","Apple","Pineapple"];
fruits[0] = "Banana";
fruits[5] = "Orange";
fruits.push("Grapes");
fruits.pop();
fruits.splice(1,1,"Papaya");
fruits.sort();
console.log(fruits);
let num=[[1,2],[3,4],[6,7],[500,100]];
alert(num);
console.log(num[1][1]);