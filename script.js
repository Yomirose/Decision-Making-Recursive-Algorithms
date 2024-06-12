//1 Leap Year Checker: use of if-else()

// function LeapYearChecker(year) {

//     //conditions to find out the leap year
//     if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
//         console.log(year + ' is a leap year');
//     } else {
//         console.log(year + ' is not a leap year');
//     }
// }

// // take user input
// const year = prompt('Enter a year:');

// LeapYearChecker(year);


//   2 Ticket Pricing
// function getTicketPrice(age) {
//     if (age <= 12) {
//         return 10; 
//     } else if (age >= 13 && age <= 17) {
//         return 15; 
//     } else if (age >= 18) {
//         return 20; 
//     } else {
//         return -1;
//     }
// }

// Function to determine the ticket price using switch
// function getTicketPriceSwitch(age) {
//     switch (true) {
//         case (age <= 12):
//             return 10; 
//         case (age >= 13 && age <= 17):
//             return 15; 
//         case (age >= 18):
//             return 20; 
//         default:
//             return -1; 
//     }
// }

// Recursive function to prompt for age and display the ticket price
// function promptAgeAndDeterminePrice() {
//     let age = parseInt(prompt("Please enter your age:"));
    
//     if (isNaN(age) || age < 0) {
//         alert("Invalid input. Please enter a valid age.");
//         promptAgeAndDeterminePrice(); 
//     } else {
//         let priceIfElse = getTicketPrice(age);
//         let priceSwitch = getTicketPriceSwitch(age);
        
//         // Display the results
//         alert(`Using if-else: The ticket price is $${priceIfElse}`);
//         alert(`Using switch: The ticket price is $${priceSwitch}`);
//     }
// }

// promptAgeAndDeterminePrice();



// 3 Fibonacci Sequence
let numbers =  (0, 1, 1, 2, 3, 5, 8);
// The Fibonacci sequence starts with 0 and 1

const n = 10;
function fibonacci(n) {
        if (n <= 0) {
            return n;
        } else if (n === 1) {
            return 1;
        } else {
            return fibonacci(n - 1) + fibonacci(n - 2);
        }
    }
    console.log(fibonacci(n));


    // 4 Power Function
const x = 2
const y = 5
function power(x, y){
    if(y === 0){
        return 1;
    }
    if(y ===1){
        return x;
    }
    if(y > 1){
        return x* power(x, y - 1);
    }
}
console.log(power(2, 5))