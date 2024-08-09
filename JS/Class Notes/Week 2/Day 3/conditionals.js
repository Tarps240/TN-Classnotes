/////////////////////////////////////Conditional statments///////////////

// Consitional statments are statmets or decision based on different conditions.
//By default js analyzes our code sequentialy so that there is flow in out page. 

/////if/////////////////////////////////////////////////////////////

//syntax
// if(condition){
//     //this is the part your truthy or falsy statment . 
// }

let num = -3;

// if(num > 0){
//     console.log(num + " is a positive number.");
// }

// if(num > 0){
//     //Template Litteral inject data
//     console.log(`${num} is a positive number.`);
// }

/////////////////if else ////////////////////////////////////////

// if(condition){
//     //this is the part your truthy or falsy statment . 
// } else{ 
//     //this is the part your truthy or falsy statment . 
// }

// if(num > 0){
//     console.log(`${num} is greater than zero.`);
// } else{
//     console.log(`${num} is not greater than zero.`);
// }

//Ternary Operators
let isRaining = true;

isRaining
    ?console.log("Put on a jacket")
    :console.log("You dont need a raincoat")

////////if esle if else /////////////////////////////////////////

// if(condition){
//     //code to return first truthy 
// } else if(condition){
//     //code to return a second truthy value 
// }else {
//     // code to return falsy value 
// }
let a = 0;

if(a > 0){
    console.log(`${a} is greater than Zero.`);
} else if(a < 0){
    console.log(`${a} is less than Zero.`);
} else if(a == 0){
    console.log(`${a} is equal to Zero.`);
} else {
    console.log(`${a} is not a number apparently.`);
}



/////////////////////////////////////////////////////Switch////////////////////////////////////////////////////////////

// switch(caseValue){
//     case 1:
//         //code
//         break
//     case 2:
//         //code
//         break
//     case 3:
//         //code
//         break
//     case 4:
//         //code
//         break
// }
let weather = "Overcast";

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

