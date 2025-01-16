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
// const donuts = ["glazed", "chocolate", "boston cream", "powdered", "sprinkles", "maple", "coconut", "jelly"];

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

// const test = [12, 929, 11, 3, 199, 1000, 7, 1, 24, 37, 4, 19, 300, 3775, 299, 36, 209, 148, 169, 299, 6, 109, 20, 58, 139, 59, 3, 1, 139];

// test.forEach(function(addHundred){
//   if(addHundred % 3 === 0) {
//     console.log("before", addHundred)
//     addHundred += 100;
//     console.log("after", addHundred);
//   }
// })

// const mapArray = test.map(function(element){
//   element += 100;
//   return element;
// })
// console.log(test);
// console.log(mapArray);

// const bills = [50.23, 19.12, 34.01, 100.11, 12.15, 9.90, 29.11, 12.99, 10.00, 99.22, 102.20, 100.10, 6.77, 2.22];

// const totals = bills.map(function(total){
//   total *= 1.15;
//   return Number(total.toFixed()); // Converts string to number and toFixed method rounds to a max of 2 decimal places
//   }
// )
// console.log(totals);


// NESTED LOOPS AND ARRAYS

// const numbers = [
//   [243, 12, 23, 12, 45, 45, 78, 66, 223, 3],
//   [34, 2, 1, 553, 23, 4, 66, 23, 4, 55],
//   [67, 56, 45, 553, 44, 55, 5, 428, 452, 3],
//   [12, 31, 55, 445, 79, 44, 674, 224, 4, 21],
//   [4, 2, 3, 52, 13, 51, 44, 1, 67, 5],
//   [5, 65, 4, 5, 5, 6, 5, 43, 23, 4424],
//   [74, 532, 6, 7, 35, 17, 89, 43, 43, 66],
//   [53, 6, 89, 10, 23, 52, 111, 44, 109, 80],
//   [67, 6, 53, 537, 2, 168, 16, 2, 1, 8],
//   [76, 7, 9, 6, 3, 73, 77, 100, 56, 100]
// ];

// for(let row = 0; row < numbers.length; row++){
//   for(let column = 0; column < numbers[row].length; column++){
//     if(numbers[row][column] % 2 === 0){
//       console.log(numbers[row][column], "EVEN")
//     } console.log(numbers[row][column], "ODD")
//   }
// }

// OBJECTS

// const umbrella = {
//   color: "pink",
//   isOpen: true,
//   open: function() {
//     if(umbrella.isOpen === true){
//       return "The umbrella is already open!"
//     } else {
//       umbrella.isOpen = true;
//       return "Maty opens the umbrella"
//     }
//   },
//   close: function() {
//     if(umbrella.isOpen === false) {
//       return "The umbrella is already closed"
//     } else {
//       umbrella.isOpen = false;
//       return "Maty closed the umbrella"
//     }
//   }
// };

// // console.log(umbrella.close(), umbrella.open());

// const breakfast = {
//   menuItem: "The Lumberjack",
//   price: 9.95,
//   options: ["eggs", "sausage", "toast", "hashbrowns", "pancakes"]
// }

// // console.log(breakfast.options[0]);
// // console.log(breakfast.price);

// const savingsAccount = {
//   balance: 1000,
//   interestRatePercent: 1,
//   deposit: function addMoney(amount) {
//     if(amount > 0) {
//       savingsAccount.balance += amount;
//     }
//   },
//   withdraw: function removeMoney(amount) {
//     let verifyBalance = savingsAccount.balance - amount;
//     if(amount > 0 && verifyBalance >= 0) {
//       savingsAccount.balance -= amount;
//     }
//   },
//   printAccountSummary: function() {
//     return `Welcome!\nYour balance is currently \$${savingsAccount.balance} and your interest rate is ${savingsAccount.interestRatePercent}\%`
//   }
// }
// console.log(savingsAccount.printAccountSummary())
// savingsAccount.withdraw(500);
// console.log(savingsAccount.printAccountSummary())
// savingsAccount.deposit(5000);
// console.log(savingsAccount.printAccountSummary())

const facebookProfile = {
  name: "Maty",
  friends: 0,
  messages: ["fuck Trump", "fuck Politics", "fuck the world"],
  postMessage: function(message){
   messages = facebookProfile.messages.push(message);
  }
}

facebookProfile.postMessage("fuck this shit");
// console.log(facebookProfile.messages);

const arr1 = ["a", "b", "C", "d", "e", "f"];
const arr2 = [1, 2, 3, 4, 5, 6]
console.log('arr1 ==>>',arr1);

// const arrMethod = arr1.push("hello"); // push adds elements to the end of an array and mutates the original array
// const arrMethod = arr1.pop(); // pop removes the last element of the array and mutates the original array
// const arrMethod = arr1.shift(); // shift removes the first element of an array and mutates the original array
// const arrMethod = arr1.unshift(); // unshift adds given elements to the start of an array and mutates the original array.
// const arrMethod = arr1.splice(1,2); // splice removes elements from a given index range and mutated the original array.
// const arrMethod = arr1.splice(0, 4, "peepee", "poopoo");
const arrMethod = arr1.slice(1, 2); // slice removes a specified range with a given start index and end index and does not mutate the original array
// const arrMethod = arr1.sort();
// const arrMethod = arr1.concat();
// const arrMethod = arr1.map();
// const arrMethod = arr1.filter();

console.log('arr1 after array method is called ==>>',arrMethod);
console.log('arr1 check if mutated ==>>',arr1);
