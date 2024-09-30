/////////////////////////////////Document Object Model (DOM)/////////////////////////////
// Getting Element
    // Getting elements by tag name

    let tag = document.getElementsByTagName("h1");
    console.log(tag);

    console.log(tag.length);

    for (let i = 0; i < tag.length; i++) {
        console.log(tag[i]);
    };

    // Getting elements by class name

    const className = document.getElementsByClassName("title");

    for (let i = 0; i < className.length; i++) {
        console.log(className[i]);
    };

    // Getting an element by id

    const grabId = document.getElementById('first-title');

    console.log(grabId);

    // Getting elements by using querySelector methods

    document.querySelector("h1");
    document.querySelector('#first-title');
    document.querySelector(".title");

    // let firstTitle = document.querySelector("h1");
    // let firstTitle = document.querySelector("#first-title");
    // let firstTitle = document.querySelector(".title");

// Query Selector All.

    let everything = document.querySelectorAll("h1");

    for (let i = 0; i < everything.length; i++) {
        console.log(everything[i]);
    }


// Adding attribute
    // Adding attribute using setAttribute
    
    let selection = document.querySelectorAll("h1");

    // selection[3].className = "title";
    // selection[3].id = "fourth-title";

    // for (let i = 0; i < selection.length; i++) {
    //     console.log(selection[i]);
    // }

    // Adding attribute without setAttribute
    
   selection[3].setAttribute("class", "fancy");
   selection[3].setAttribute("id", "boats");

   for (let i = 0; i < selection.length; i++) {
         console.log(selection[i]);
    }

    // Adding class using classList

    // Select the element to add the new class to. 
    let headings = document.querySelectorAll("h1");

    // Add the class 'new-class' to the second <h1>
    headings[1].classList.add("new-class");

    // Check that the class was added.
    console.log(headings[1].className);


    // Removing class using remove

    headings[1].classList.remove("new-class"); // Removes the 'new-class'
    console.log(headings[1].className); // To confirm the class was removed

// Adding Text to HTML element
    // Adding Text content using textContent

    headings[0].textContent = "Welcome to the DOM World"; //Adding updated text to the first <h1> element.
    console.log(headings[0].textContent); // Displays the updated text content of the first <h1>

    // Adding Text Content using innerHTML

    headings[1].innerHTML = "<span>This is a span inside an h1</span>";
    console.log(headings[1].innerHTML); // Displays the updated inner HTML of the second <h1>

    // Text Content

    headings[0].textContent = "Welcome to the DOM World";
    console.log(headings[0].textContent);

    // Inner HTML

    headings[1].innerHTML = "<span>This is a span inside an h1</span>";
    console.log(headings[1].innerHTML); // Displays the updated inner HTML of the second <h1>

// Adding style
    // Adding Style Color

    headings[0].style.color = "blue";
    console.log(headings[0].style.color);

    // Adding Style Background Color

    headings[1].style.backgroundColor = "lightgray";
    console.log(headings[1].style.backgroundColor);
    
    // Adding Style Font Size

    headings[2].style.fontSize = "30px";
    console.log(headings[2].style.fontSize);