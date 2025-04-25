let numbers = [2, 3, 4, 5];
let product = 1;
let i = 0;

while (i < numbers.length) {
    product *= numbers[i];
    i++;
}

console.log("Добуток (while):", product);
