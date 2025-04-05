import chalk from "chalk";

const averageGrade = 70;
let message;

switch (true) {
    case (averageGrade <= 59):
        message = "Unsatisfactorily :("
        break;
    case (averageGrade <= 70):
        message = "Satisfactorily :)"
        break;
    case (averageGrade <= 80):
        message = "Good! :)"
        break;
    case (averageGrade <= 90):
        message = "Very good! :)"
        break;
    case (averageGrade <= 100):
        message = "Excellent! :)"
        break;
    default:
        message = "Error. Average grade cannot exceed 100.";
}

console.log((message));