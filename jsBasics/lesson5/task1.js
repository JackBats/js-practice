const averageGrade = 105;
let message;

if (averageGrade >= 101) {
    message = "Error. Average grade cannot exceed 100.";
} else if (averageGrade <= 59) {
    message = "Unsatisfactorily :("
} else if (averageGrade <= 70) {
    message = "Satisfactorily :)"
}else if (averageGrade <= 80) {
    message = "Good! :)"
}else if (averageGrade <= 90) {
    message = "Very good! :)"
}else if (averageGrade <= 100) {
    message = "Excellent! :)"
}

console.log(message);