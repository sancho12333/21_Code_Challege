// let h = 9119;
// let val = "";
// var str = h.toString();
// let k = str.split("");
// for (let index = 0; index < k.length; index++) {
//   val += Math.pow(k[index], 2);
// }

// console.log(parseInt(val));

// function squareDigits(num){
//   return Number(('' + num).split('').map(function (val) { return val * val;}).join(''));

// }
// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer


// Given two integers a and b, which can be positive or negative, find the sum of all the integers between including them too and return it. If the two numbers are equal return a or b.

// // Note: a and b are not ordered!
// GetSum(1, 0) == 1   // 1 + 0 = 1
// GetSum(1, 2) == 3   // 1 + 2 = 3
// GetSum(0, 1) == 1   // 0 + 1 = 1
// GetSum(1, 1) == 1   // 1 Since both are same
// GetSum(-1, 0) == -1 // -1 + 0 = -1
// GetSum(-1, 2) == 2  // -1 + 0 + 1 + 2 = 2

// let k = -1;
// let j = 2;
// for (let i = 0; i <= -1; i++) {
//   console.log(i);
// }
// let a = 0;
// let b = 1;
// let k, j = 0;
// let he = Number(a) === Number(b);
// if (he != 0) {
//   k = a;
//   j = b;
// } else {
//   k = b;
//   j = a;
// }
// console.log(k, j)

// var matrix = arr(3).fill(null).map(() => arr(3).fill());
// matrix.forEach(i => console.log(i));
// matrix[0][0] = 0;
// matrix[0][1] = 1;
// matrix[0][2] = 2;
// matrix[1][0] = 3;
// matrix[1][1] = 4;
// matrix[1][2] = 99;
// matrix[1][3] = 99;
// matrix[2][0] = 5;




// console.log(matrix)sdsad


// //Function JS Arrow 
// let calAge3 = birthYear => 2037 - birthYear;
// let age3 = calAge3(1991);
// console.log(age3);

// // multi para in funtion
// let yearsUntilRetirement = (birthYear, Name) => {
//   let age = 2037 - birthYear;
//   let retirement = 65 - age;
//   return `Ten toi la: ${Name} and tuoi toi la ${retirement}`;
// }

// console.log(yearsUntilRetirement(1991, "TienDat"));


// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//   let applePieces = cutFruitPieces(apples);
//   let orangePieces = cutFruitPieces(oranges);


//   let juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`
//   return juice;
// }

// let calAge = function (birthYear) {
//   return 2037 - birthYear;
// } 

// let yearsUntilRetirement = function (birthYear, Name) {
//   let age = calAge(birthYear);
//   let retirement = 65 - age;
//   // return retirement;
// if(retirement > 0){
//   return retirement;
// }else{
//   return -1;
//   console.log(`${Name} has already retired !!!`);
//   console.log(`${Name} has already retired !!!`);
// }

//   // return `Ten toi la: ${Name} and tuoi toi la ${retirement}`;
// }
// console.log(yearsUntilRetirement(1991, 'TienDat'));

// let inputPoint1 = prompt("Please enter your name1:").split(',');
// let inputPoint2 = prompt("Please enter your name2:").split(',');
// let count = 0;
// let sum = 0;
// let calAverage = function (inputPoint) {
//   for (let index = 0; index < inputPoint.length; index++) {
//     count++;
//     sum += inputPoint[index];
//     if (count == inputPoint.length - 1) {
//       let ave = sum / count;
//       return ave;
//     }
//   }
// }

// let k = 3


// console.log(calAverage(inputPoint1));

// let calAverage = (a, b, c) => (a + b + c) / 3;

// let Dol = calAverage(1, 2, 3);
// let Koa = calAverage(4, 5, 6);

// let checkWinner = function (avgDol, avgKoa) {
//   if (avgDol >= 2 * avgKoa) {
//     console.log(`the Dolphin winner ${avgDol} vs. ${avgKoa}`);
//   } else if (avgKoa >= 2 * avgDol) {
//     console.log(`the Dolphin winner ${avgKoa} vs. ${avgDol}`);
//   } else {
//     console.log("No Team Win!!!");
//   }
// }
// console.log(checkWinner(Dol, Koa));

// let jonas = {
//   firstName: 'jonas',
//   lastName: 'Schmedtmann',
//   age: 2037 - 1991,
//   job: 'teach',
//   friends: ['Michael','Peter','Steven']
// };

// console.log(jonas);
// console.log(object);
// for (let i = 0; i < 4; i++) {
//   for (let j = 0; j < 3; j++) {
//     console.log("i = " + i + "j = " + j);
//   }
// }


// //Matrix
// let arr = [[11, 2, 4], [4, 5, 6], [10, 8, -12]];
// // let arr = [1, 2, 3, 4, 5];
// let sum = 0;
// let sum1 = 0;
// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr[i].length; j++) {
//     if (i == j) {
//       sum += arr[i][j];
//     }
//     if (i + j == arr.length - 1) {
//       sum1 += arr[i][j];
//     }
//   }
// }
// console.log(Math.abs(sum - sum1));
// let count = 0;
// let count1 = 0;
// let count2 = 0;
// let arr = [-4, 3, -9, 0, 4, 1]
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > 0) {
//     count++;
//   } else if (arr[i] < 0) {
//     count1++;
//   } else {
//     count2++
//   }
// }
// console.log((count / arr.length).toFixed(6) + "\n" + (count1 / arr.length).toFixed(6) + "\n" + (count2 / arr.length).toFixed(6));

// function PlusMinus(arr) {
//   let count = 0;
//   let count1 = 0;
//   let count2 = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//       count++;
//     } else if (arr[i] < 0) {
//       count1++;
//     } else {
//       count2++
//     }
//   }
//   console.log((count / arr.length).toFixed(6) + "\n" + (count1 / arr.length).toFixed(6) + "\n" + (count2 / arr.length).toFixed(6));
// }
// let arr = [-4, 3, -9, 0, 4, 1]
// PlusMinus(arr);

//Tam Giac
// let row = 6;
// for (let i = 0; i < row; i++) {
//   let k = ' ';
//   for (let j = row; j > 0; j--) {
//     if (j - 1 <= i) {
//       k += '*';
//     } else {
//       k += ' ';
//     }
//   }
//   console.log(k);
// }

// Mini-Max Sum
// let arr = [1, 3, 5, 7, 9];
// let max = Math.max(...arr);
// let min = Math.min(...arr);
// let minSum = 0;
// let maxSum = 0;

// for (let i = 0; i < arr.length; i++) {
//   minSum += arr[i];
//   maxSum += arr[i];
// }
// console.log((minSum - max) + " " + (maxSum - min));