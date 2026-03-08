// Task 1: Largest of Three Numbers
// Create three numbers and print the largest

// Solution:
let num1 = 20;
let num2 = 40;
let num3 = 60;

if (num1 > num2 && num1 > num3) {
  console.log(num1);
} else if (num2 > num1 && num2 > num3) {
  console.log(num2);
} else {
  console.log(num3);
}

// ----------------------------------------------------------------------------

// Task 2: Positive, Negative or Zero
// Check a number and print:
// • Positive
// • Negative
// • Zero

// Solution:
let num = 20;

if (num > 0) {
  console.log("Number is Positive");
} else if (num < 0) {
  console.log("Number is Negative");
} else {
  console.log("Number is Zero");
}


// ---------------------------------------------------------------------------

// Task 3: Simple Login System
// Create:
// let correctUsername = "admin";
// let correctPassword = "1234";
// Check:
// • If both correct → "Login Successful"
// • Else → "Invalid Credentials"

// Solution:
let correctUsername = "admin";
let correctPassword = "1234";

if (correctUsername === "admin" && correctPassword === "1234") {
  console.log("Login Successful");
} else {
  console.log("Invalid Credentials");
}


// -----------------------------------------------------------------------------

// Task 4: Electricity Bill
// Units consumed:
// • 0–100 → 10 per unit
// • 101–200 → 15 per unit
// • 200+ → 20 per unit
// Calculate total bill.

// Solution:
let unitConsumed = 650;

if (unitConsumed >= 0 && unitConsumed <= 100) {
  let totalBill = unitConsumed * 10;
  console.log(totalBill);
} else if (unitConsumed > 100 && unitConsumed <= 200) {
  let totalBill = unitConsumed * 15;
  console.log(totalBill);
} else if (unitConsumed > 200) {
  let totalBill = unitConsumed * 20;
  console.log(totalBill);
}


// -----------------------------------------------------------------------------------

// Task 5: Print Even Numbers 1–50

// Solution:
for (let i = 1; i <= 50; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// -------------------------------------------------------------------------------------

// Task 6: Reverse Counting
// Print numbers from 20 to 1.

// Solution:
for (let i = 20; i >= 1; i--) {
  console.log(i);
}

// -------------------------------------------------------------------------------------

// Task 7: Factorial Calculator
// Find factorial of a number.
// Example:
// 5! = 5 × 4 × 3 × 2 × 1

// Solution:
let n = 5;
let factorial = 1;
for (let i = 1; i <= n; i++) {
  factorial = factorial * i;
}

console.log("Factorial of " + num + " is:" + factorial);


// --------------------------------------------------------------------------------------

// Task 8: Count Digits
// Take a number like:
// 12345
// Count how many digits it has


// Solution:
let digits = 12345;
let count = digits.toString().length;
console.log(count);


// --------------------------------------------------------------------------------------

// Task 9: Sum of Even Numbers (1–100)

// Solution:
let sum = 0
for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    sum += i;
  }
}

console.log("Sum of even numbers from 1 to 100 is:", sum);

// -------------------------------------------------------------------------------------

// Task 10: Prime Number Checker
// Check if a number is prime.

// Solution:
let num = 7;
let isPrime = true;

if (num <= 1) {
  isPrime = false;
} else {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }
}

if (isPrime) {
  console.log(num + " is a Prime Number");
} else {
  console.log(num + " is Not a Prime Number");
}


// ------------------------------------------------------------------------------------

// Task 11: ATM Machine
// User enters amount.
// • If balance sufficient → deduct amount
// • Else → "Insufficient balance"

// Solution:
let balance = 55000;
let amount = 0;

if (amount <= balance) {
  balance = balance - amount;
  console.log("Transaction succesful");
  console.log("Remaining balance:", balance);
} else {
  console.log("Insufficient balance");
}

// -----------------------------------------------------------------------------------

// Task 12: Password Strength Checker
// Check if password:
// • At least 8 characters
// • Contains number
// • Contains uppercase letter

// Solution:

let password = "Abc12345";

let hasNumber = /\d/.test(password);
let hasUpperCase = /[A-Z]/.test(password);
let isLongEnough = password.length >= 8;

if (hasNumber && hasUpperCase && isLongEnough) {
  console.log("Strong Password");
} else {
  console.log("Weak Password");
}

// ------------------------------------------------------------------------------------

// Task 13: FizzBuzz
// From 1–50:
// • Multiple of 3 → "Fizz"
// • Multiple of 5 → "Buzz"
// • Both → "FizzBuzz"

// Solution:

for (let i = 1; i <= 50; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz")
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}


// ----------------------------- End Task -------------------------------------------