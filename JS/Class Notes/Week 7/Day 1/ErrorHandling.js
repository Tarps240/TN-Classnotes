// ////////////////////////////Error Handling///////////////////////////////////
// Error Types

// try{
//     //Code that might throw an error.
// } catch(err) {
//     //code to be executed if an error occours.
// } finally {
//     //will always be executed regardless if there is an error.
// }


try {
    let lastName = "Lewis";
    let fullName = firstName + " " + lastName;
} catch(err) {
    console.log("Name of the error: " + err.name);
    console.log("Message of the error: " + err.message)
} finally {
    console.log("In any case, I will be executed.")
}

const throwError = () => {
    let message;
    let x = prompt("Enter a number.");
    try {
        if (x === null || x.trim() === "") throw new Error (x === null ? "Canceled" : "Empty");
    } catch(err) {
        console.log(err.name);
        console.log(err.message);
    }
}
throwError();


// const err = {
//     name: "ReferenceError",
//     message: "First name is not defined"
// }