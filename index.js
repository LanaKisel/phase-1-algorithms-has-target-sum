function hasTargetSum(array, target) {
  let returnValue = false
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j <= array.length - 1; j++) {
      const a = array[i];
      const b = array[j];
      const sumNumber = a + b;
      if (sumNumber === target) {
        returnValue = true
      }
    }}
    return returnValue
  }
  
  // Write your algorithm here


/* 
  Write the Big O time complexity of your function here
O(n²)	Quadratic	Nested iteration
*/

/* 
  Add your pseudocode here
  iterate thru array, 
for (let i=o; i<array.length-1; i++) {
  const j = array.length -1;
  const sumFirstNumber = i+ i+
  return sumFirstNumber
}


  */

/*
  Add written explanation of your solution here
  create a function in which 2 arguments: array and target. if any pair of numbers from array adds up to equal target returns true.
iterate thru array, 
function adds up numbers to first number in order, until i=j;
then i+ adds up numbers till j and etc until the las number

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, -2, 5], -4))


  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([-1,-3, 5], -4))
}

module.exports = hasTargetSum;
