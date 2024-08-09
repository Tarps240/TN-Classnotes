// Window prompt() method
// The window prompt methods display a prompt box with an input on your browser to take input values and the input data can be stored in a variable. The prompt() method takes two arguments. The second argument is optional.

//prompt("what is your name?")
let weather = prompt("What weather would you like to check?");

switch(weather){
    case "Rain":
        console.log(`You need a raincoat!`);
        break
    case "Sunny":
        console.log(`Get outside.`);
        break
    case "Overcast":
        console.log(`Bring an umbrella`);
        break
    case "Tornado":
        console.log(`Hide!`);
        break
    default:
        console.log(`There is no weather, it's the end times!`);
}


//Prompt your user with a question and console.log() and view in your browser 



//confirm() 

