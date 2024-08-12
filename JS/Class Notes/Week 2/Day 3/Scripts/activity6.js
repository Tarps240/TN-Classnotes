// Check if a day is weekend day or a working day. Your script will take day as an input.
//     What is the day  today? Saturday
//     Saturday is a weekend.
//     What is the day today? saturday
//     Saturday is a weekend.
//     What is the day today? Friday
//     Friday is a working day.
//     What is the day today? Friday
//     Friday is a working day.

const day = prompt("Enter day of the week to see if you have to work: ");

switch(day){
    case "Saturday":
    case "Sunday":
        window.alert(`${day} is a weekend.`);
        break
    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
    case "Friday":
        window.alert(`${day} is a workday, sorry.`);
        break
    default:
        window.alert("Make sure your days are capitalized.");
}