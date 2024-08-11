// Write a code which can give grades to students according to theirs scores:
// 90-100, A
// 70-89, B
// 60-69, C
// 50-59, D
// 0-49, F

let finalGrade = prompt("Enter student numerical grade: ");

if(finalGrade > 90) {
    window.alert("You got an A!");
} else if(finalGrade >= 70 && finalGrade <= 89) {
    window.alert("You got a B!");
} else if(finalGrade >= 60 && finalGrade <= 69) {
    window.alert("You got a C!");
} else if(finalGrade >= 50 && finalGrade <= 59) {
    window.alert("You got a D, try harder.")
} else if(finalGrade >= 0 && finalGrade <= 49) {
    window.alert("You failed, try harder next time, I'm sure you can do it!");
} else {
    window.alert("You didnt enter a valid grade range, refresh and try again please.");
}