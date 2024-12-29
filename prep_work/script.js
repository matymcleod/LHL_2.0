//Web prep course

/*const testArray = [1, 2, 3];
console.log('testArray', testArray);
let arraySum;
console.log('arraySum before adding test array', arraySum);
for(let i=0; i<testArray.length; i++){
  arraySum += testArray[i]
}
console.log('arraySum after adding test array', arraySum);*/

//JS Fundamentals ||
//Construction Loops
// Q1 - Write a program that prints the sum of all odd numbers from 1 to 50 using a for loop.

// let sum = 0;
// for(let odd = 0; odd < 50; odd++){
//   if(odd % 2 !== 0) {
//     sum += odd
//   }
// }
// console.log(sum);

// Q2 - Write a program that prints the even numbers from 1 to 20 using a while loop
// let num = 1;
// while(num <= 20){
//   if(num % 2 === 0){
//   console.log(num);}
//   num++
// }

// Q3 - Write a program that prints the numbers from 5 - 15 using a for loop  

// for(let num = 5; num <= 15; num++){
//   console.log(num);
// }

// Q4 - Write a program that prints the sum of all numbers from 1 to 50.

// let sum = 0;
// let num = 1;
// while(num <= 50){
//   sum += num
//   num++
// }
// console.log(sum);

// Q5 - Write a program that prints a countdown from 10 to 1 using a for loop.
// for(let count = 10; count >= 1; count--){
//   console.log(count);
// }

// BEACON COUNTDOWN - 
// let num = 60;
// while(num <= 60 ){
//   if(num >= 0){
//     console.log(num)
//   }
//   if(num === 60) {console.log(": One minute to lift off");}
//   else if(num > 10) {console.log(": All systems green");}
//   else if(num >=6 && num <=10) {console.log(": Starting ignition");}
//   else if(num >=3 && num <=5) {console.log(": Ignition Complete");}
//   else if(num >=1 && num <=2) {console.log(": Full Power");}
//   else if(num === 0) {console.log(": Lift Off");}
//   num--
// }


// Loopy Lighthouse -

// for(let loopy = 100; loopy <= 200; loopy++) {
//   if(loopy % 12 === 0) {console.log(loopy, "LOOPYLIGHTHOUSE")}
//   else if(loopy % 3 === 0) {console.log(loopy, "LOOPY");}
//   else if(loopy % 4 === 0) {console.log(loopy, "LIGHTHOUSE");}
// }

// Arrays and basic methods
const donuts = ["glazed", "chocolate", "boston cream", "powdered", "sprinkles", "maple", "coconut", "jelly"];

// console.log(donuts[6]);

// donuts[6] = "almond";

// console.log(donuts[6]);

// donuts.forEach(function(donut){
//   donut += " hole";
//   console.log(donut);
// })

// const numberArray = [1, 2, 3, 4, 5]

// numberArray.forEach(function(add){
//   add += 2
//   console.log(add);
// })

const test = [12, 929, 11, 3, 199, 1000, 7, 1, 24, 37, 4, 19, 300, 3775, 299, 36, 209, 148, 169, 299, 6, 109, 20, 58, 139, 59, 3, 1, 139];

test.forEach(function(addHundred){
  if(addHundred % 3 === 0) {
    console.log("before", addHundred)
    addHundred += 100;
    console.log("after", addHundred);
  }
})