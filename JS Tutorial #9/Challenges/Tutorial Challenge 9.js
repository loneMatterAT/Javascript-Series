// TUTORIAL CHALLENGE 9
// Create a program that uses while loop to get the summation (sum of all numbers) of an array of numbers
let arr = [5,5,5,5,5]; // We have 5 index (0,1,2,3,4)
let sum = 0;
let i = 0; // 5, 10, 15, 20, 25
// Condition
while(arr[i]) { // hanggat ang arr array natin is not undefined or unmet the condition 5 index, mag-run ang code sa ibaba ng while loop.
  // arr[0] = sum(0) + arr[5] = 5
  // arr[1] = sum(5) + arr(5) = 10
  // arr[2] = sum(10) + arr(5) = 15
  // arr[3] = sum(15) + arr(5) = 20
  // arr[4] = sum(20) + arr(5) = 25
  sum += arr[i]; 
  i++; 
  // i = 5
  // i = 10
  // i = 15
  // i = 20
  // i = 25
}

alert(sum); // Output: 25 (summation of value inside an array of numbers)