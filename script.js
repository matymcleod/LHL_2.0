const testArray = [1, 2, 3];

console.log('testArray', testArray);


let arraySum;
console.log('arraySum before adding test array', arraySum);
for(let i=0; i<testArray.length; i++){
  arraySum += testArray[i]
}
console.log('arraySum after adding test array', arraySum);