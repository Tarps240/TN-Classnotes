// Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
// September, October or November, the season is Autumn.
// December, January or February, the season is Winter.
// March, April or May, the season is Spring
// June, July or August, the season is Summer

const month = prompt("Enter a Month to find the Season: ");

switch(month){
    case "December":
    case "January":
    case "Februuary":
    case "Dec":
    case "Jan":
    case "Feb":
        window.alert("The season is Winter.");
        break
    case "March":
    case "April":
    case "May":
    case "Mar":
    case "Apr":
        window.alert("The season is Spring.");
        break
    case "June":
    case "July":
    case "August":
        window.alert("The season is Summer.");
        break
    case "September":
    case "October":
    case "November":
        window.alert("The season is Fall.");
        break
    default:
        window.alert("You didnt enter a valid month, try again?");
}