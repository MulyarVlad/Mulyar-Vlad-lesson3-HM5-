let question = prompt("Woud you like to add, sub, mult or div?")

let firstDigit = +prompt("Enter the first digit");
let secondDigit = +prompt("Enter the second digit");


if (question === 'add') {
    console.log(firstDigit + secondDigit);
} else if (question === 'sub') {
    console.log(firstDigit - secondDigit);
} else if (question === 'mult') {
    console.log(firstDigit * secondDigit);
} else if (question === 'div') {
    console.log(firstDigit / secondDigit);
}