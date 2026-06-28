"use strict";

/* PLANNING / PSEUDOCODE
Tiana - June 27, 2026

1. Initialize score = 0, totalQuestions = 4

2. Question 1: What type of core strength physical training do I practice 6 days a week?
    - Variable name: physicalTrainingAnswer
    - Correct answer: "pilates"
    - Validation: Check if string is empty or null. Convert input to lowercase.
    - Check: Strict equality (===) to "pilates". If correct, score ++.

3. Question 2: What is my all-time favorite dessert? (Hint: It is a traditional custard)
    - Variable name: favoriteDessertAnswer
    - Correct answer: "flan"
    - Validation: Check if string is empty or null. Convert to lowercase.
    - Check: Strict equality (===) to "flan". If correct, score ++.

4. Question 3: How many total members are there in the music group BTS?
    - Variable name: btsCountAnswer
    - Correct answer: 7
    - Validation: Check if string is empty or null. Convert to a Number.
    - Check: Strict numerical equality (===) to 7. If correct, score ++.

5. Question 4: What style of minimal pottery dish did I create featuring a green healthy fruit?
    - Variable name: potteryDishAnswer
    - Correct answer: "avocado"
    - Validation: Check if string is empty or null. Convert to lowercase.
    - Check: Strict equality (===) to "avocado". If correct, score ++.

6. Math: How will I calculate the percentage? 
    - percentage = (score / totalQuestions) * 100

7. Final feedback logic (if / else if / else):
    - Grade perfectly on a 4, a passing tier for 3, and below 3 needs improvement.
    - Use a logical operator to determine specific tailored feedback text.

Logical operators I will use:
- `||` (OR) in validation to alert users if they left a prompt completely blank or cancelled it.
- `&&` (AND) in feedback logic to verify if a score lands exactly within a passing but imperfect range (score === 3).
- `!` (NOT) in validation to check if a numeric string is not a valid number (isNaN).
*/

console.log("=== My Quiz Game ===");

// 1. Initialize variables
let score = 0;
const totalQuestions = 4;

// 2. Question 1: Pilates
let physicalTrainingAnswer = prompt("Question 1: What type of core strength physical training do I practice 6 days a week?");
console.log("User Input Q1:", physicalTrainingAnswer);

if (!physicalTrainingAnswer || physicalTrainingAnswer.trim() === "") {
    alert("You didn't type anything! That counts as incorrect.");
} else {
    // Convert to lowercase for case-insensitive matching
    let formattedTraining = physicalTrainingAnswer.trim().toLowerCase();
    if (formattedTraining === "pilates") {
        console.log("Q1 Result: Correct!");
        score++;
    } else {
        console.log("Q1 Result: Incorrect.");
    }
}

// 3. Question 2: Flan Dessert
let favoriteDessertAnswer = prompt("Question 2: What is my all-time favorite dessert? (Hint: It's a classic smooth custard!)");
console.log("User Input Q2:", favoriteDessertAnswer);

if (!favoriteDessertAnswer || favoriteDessertAnswer.trim() === "") {
    alert("You skipped the question! Marked as incorrect.");
} else {
    let formattedDessert = favoriteDessertAnswer.trim().toLowerCase();
    if (formattedDessert === "flan") {
        console.log("Q2 Result: Correct!");
        score++;
    } else {
        console.log("Q2 Result: Incorrect.");
    }
}

// 4. Question 3: BTS Member Count (Numeric check)
let btsCountAnswer = prompt("Question 3: How many members are in the music group BTS?");
console.log("User Input Q3:", btsCountAnswer);

if (!btsCountAnswer || btsCountAnswer.trim() === "") {
    alert("Blank response detected! Marked as incorrect.");
} else {
    // Process string into a number
    let formattedCount = Number(btsCountAnswer.trim());
    // Using comparison and logical NOT (!) operator to ensure input is a valid number
    if (isNaN(formattedCount)) {
        alert("That wasn't a valid number! Counts as incorrect.");
    } else if (formattedCount === 7) {
        console.log("Q3 Result: Correct!");
        score++;
    } else {
        console.log("Q3 Result: Incorrect.");
    }
}

// 5. Question 4: Avocado Dish
let potteryDishAnswer = prompt("Question 4: What specific fruit design did I paint on my minimalist aesthetic pottery dish?");
console.log("User Input Q4:", potteryDishAnswer);

if (!potteryDishAnswer || potteryDishAnswer.trim() === "") {
    alert("Empty response. Marked as incorrect.");
} else {
    let formattedDish = potteryDishAnswer.trim().toLowerCase();
    if (formattedDish === "avocado") {
        console.log("Q4 Result: Correct!");
        score++;
    } else {
        console.log("Q4 Result: Incorrect.");
    }
}

// 6. Calculate percentage using math operators
let finalPercentage = (score / totalQuestions) * 100;
console.log("Final Score:", score, "out of", totalQuestions);
console.log("Percentage Score:", finalPercentage + "%");

// 7. Final feedback using if / else if / else & Logical Operators
let performanceMessage = "";

if (score === 4) {
    performanceMessage = "Perfect score! You know me exceptionally well!";
} else if (score === 3) {
    // Demonstrating the && (AND) logical operator
    performanceMessage = "Great job! You got most of them right.";
} else if (score === 2 || score === 1) {
    // Demonstrating the || (OR) logical operator
    performanceMessage = "Not bad, but you could definitely get to know my interests better.";
} else {
    performanceMessage = "Oops! You got a 0. Time to look through my vlogs or profile again!";
}

// Final summary alert block
alert("=== Quiz Results ===\n" +
      "Correct Answers: " + score + " / " + totalQuestions + "\n" +
      "Your Score: " + finalPercentage + "%\n\n" +
      "Feedback: " + performanceMessage);
