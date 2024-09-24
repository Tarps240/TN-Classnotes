// /////////////////////////////////HTML5 Web Storage//////////////////////////
    // sessionStorage



    // localStorage



    // Use case of Web Storages
        // Some use case of Web Storages are
            // store data temporarily
            // saving products that the user places in his shopping cart
            // data can be made available between page requests, multiple browser tabs, and also between browser sessions using localStorage
            // can be used offline completely using localStorage
            // Web Storage can be a great performance win when some static data is stored on the client to minimize the number of subsequent requests. Even images can be stored in strings using Base64 encoding.
            // can be used for user authentication method


/////////////////////////// HTML5 Web Storage Objects////////////////////////////
// HTML web storage provides two objects for storing data on the client:
    // window.localStorage - stores data with no expiration date
    // window.sessionStorage - stores data for one session (data is lost when the browser tab is closed)Most modern browsers support Web Storage, however it is good to check browser support for localStorage and sessionStorage. Let us see the available methods for the Web Storage objects.
// Web Storage objects:
    // localStorage - to display the localStorage object
    // localStorage.clear() - to remove everything in the local storage
    // localStorage.setItem() - to store data in the localStorage. It takes a key and a value parameters.
    // localStorage.getItem() - to display data stored in the localStorage. It takes a key as a parameter.
    // localStorage.removeItem() - to remove stored item form a localStorage. It takes key as a parameter.
    // localStorage.key() - to display a data stored in a localStorage. It takes index as a parameter.


    // Setting item to the localStorage

    let skills = ["Mother", 10, "Wife", "BMW"];
    let str = JSON.stringify(skills, undefined, 4);
    localStorage.setItem("skills", str); 
    let stor = localStorage.getItem(skills)
    console.log(str);


    // Getting item from localStorage

    let skillsJSON = JSON.parse(skills, undefined, 4);
    console.log(skillsJSON);

    
    // Clearing the localStorage