// Osszeadas //

let numericArray = [1, 3, 2, 5, 4, 6, 9];
let sum = 0;
for (let i = 0; i < numericArray.length; i++) {
sum += numericArray[i];
}
console.log("Sum: ", sum);

// Szamlalas //

let db = 0;
for (let i = 0; i < numericArray.length; i++) {
    if (numericArray[i] % 2 == 0) {
        db ++;
    }
}
console.log ("Even numbers: ", db);

// Szelsoertek//

let biggest = numericArray[0];
for (let i = 0; i < numericArray.length; i++) {
    if (numericArray[i] > biggest) {
        biggest = numericArray[i];
    }
}
console.log("Biggest element: ", biggest);




