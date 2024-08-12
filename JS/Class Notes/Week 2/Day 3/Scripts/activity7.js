// Write a program which tells the number of days in a month.

//   Enter a month: January
//   January has 31 days.

//   Enter a month: February
//   February has 28 days.

const month = prompt("Enter a month to see how many days it has: ");

switch(month){
    case "September":
    case "April":
    case "June":
    case "November":
        window.alert(`${month} has 30 days.`);
        break
    case "January":
    case "March":
    case "May":
    case "July":
    case "August":
    case "September":
    case "October":
    case "December":
        window.alert(`${month} has 31 days.`);
        break
    case "February":
        window.alert(`${month} has 28 days unless it's a leapyear, in which case it has 29.`);
        break
    default:
        window.alert("Did you enter a month? Try again please.");
}