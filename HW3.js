// //Task 3.1
// Створюємо масив чисел
// let numbers = [2, 3, 4, 5];
// let product = 1;
// let i = 0;
// // Через цикл For Або While якщо
// while (i < numbers.length) {
//     product *= numbers[i];
//     i++;
// }

// console.log("(while):", product);


// //Task 3.2

// for (let i = 0; i <= 22; i++) {
//     if (i % 2 === 0) {
//         console.log(i + " is even");
//     } else {
//         console.log(i + " is odd");
//     }
// }

// //Task 3.3

// function randArray(k) {
//     let arr = [];
//     for (let i = 0; i < k; i++) {
//         let randomNum = Math.floor(Math.random() * 7500) + 1;
//         arr.push(randomNum);
//     }
//     return arr;
// }
// console.log(randArray(27)); 

// //Task 3.4

// function raiseToDegree(a, b) {
//     if (Number.isInteger(a) && Number.isInteger(b)) {
//         return a ** b; // Піднесення до степеня
//     } else {
//         return "Введені не цілі числа!";
//     }
// }

// let a = parseInt(prompt("Введіть ціле число a:"));
// let b = parseInt(prompt("Введіть ціле число b:"));

// let result = raiseToDegree(a, b);
// console.log(result);

// //Task 3.5
// function findMin() {
//     let min = arguments[0];

//     for (let i = 1; i < arguments.length; i++) {
//         if (arguments[i] < min) {
//             min = arguments[i];
//         }
//     }

//     return min;
// }
// console.log(findMin(10, 15, -7, -4, 0.4));

// //Task 3.6
// function findUnique(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] === arr[j]) {
//                 return false;
//             }
//         }
//     }
//     return true;
// }

// console.log(findUnique([1, 2, 3, 6, 8]));  // => false
// console.log(findUnique([1, 2, 3, 6, 12])); // => true

// //Task 3.7
// function lastElem(arr, count) {
//     if (count === undefined) {
//         return arr[arr.length - 1];
//     } else {
//         return arr.slice(-count);
//     }
// }

// // Example
// console.log(lastElem([3, 4, 10, -5]));
// console.log(lastElem([3, 4, 10, -5], 2));
// console.log(lastElem([3, 4, 10, -5], 8));

// //Task 3.8
function capitalizeFirstLetter(str) {
    let words = str.split(' ');
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
    return words.join(' ');
}

console.log(capitalizeFirstLetter('i love study at university'));
