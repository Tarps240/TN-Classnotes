/////////////////////////////////Document Object Model (DOM)/////////////////////////////
// Getting Element
// Getting elements by tag name

// let tag = document.getElementsByTagName("h1");
// console.log(tag);

// console.log(tag.length);

// for (let i = 0; i < tag.length; i++) {
//   console.log(tag[i]);
// }

// // Getting elements by class name

// const className = document.getElementsByClassName("title");

// for (let i = 0; i < className.length; i++) {
//   console.log(className[i]);
// }

// // Getting an element by id

// const grabId = document.getElementById("first-title");

// console.log(grabId);

// // Getting elements by using querySelector methods

// document.querySelector("h1");
// document.querySelector("#first-title");
// document.querySelector(".title");

// // let firstTitle = document.querySelector("h1");
// // let firstTitle = document.querySelector("#first-title");
// // let firstTitle = document.querySelector(".title");

// // Query Selector All.

// let everything = document.querySelectorAll("h1");

// for (let i = 0; i < everything.length; i++) {
//   console.log(everything[i]);
// }

// // Adding attribute
// // Adding attribute using setAttribute

// let selection = document.querySelectorAll("h1");

// // selection[3].className = "title";
// // selection[3].id = "fourth-title";

// // for (let i = 0; i < selection.length; i++) {
// //     console.log(selection[i]);
// // }

// // Adding attribute without setAttribute

// selection[3].setAttribute("class", "fancy");
// selection[3].setAttribute("id", "boats");

// for (let i = 0; i < selection.length; i++) {
//   console.log(selection[i]);
// }

// // Adding class using classList

// // Select the element to add the new class to.
// let headings = document.querySelectorAll("h1");

// // Add the class 'new-class' to the second <h1>
// headings[3].className = "New-Class";
// headings[3].Id = "Fourth Title";

// //with setattribute you can select the header (4th) element.

// headings[3].classList.add("Title", "Newer-Class", "Fresh-Class");

// // Check that the class was added.
// console.log(headings[1].className);

// // Removing class using remove

// headings[3].classList.remove("Fresh-Class"); // Removes the 'Fresh-Class'
// console.log(headings[1].className); // To confirm the class was removed

// // Adding Text to HTML element

// // Adding Text content using textContent

// headings[0].textContent = "Welcome to the DOM World"; //Adding updated text to the first <h1> element.

// console.log(headings[0].textContent); // Displays the updated text content of the first <h1>

// // Adding Text Content using innerHTML

// headings[1].innerHTML = "<span>This is a span inside an h1</span>";
// console.log(headings[1].innerHTML); // Displays the updated inner HTML of the second <h1>

// // Text Content

// headings[0].textContent = "Welcome to the DOM World";
// console.log(headings[0].textContent);

// // Inner HTML

// const techListItem = `<li>Python</li>
// <li>Javascript</li>
// <li>Java</li>
// <li>React</li>`;
// const unOrderedList = document.querySelector("ul");
// unOrderedList.innerHTML = "";
// Adding style

// Adding Style Color

const newStyle = document.querySelectorAll("h1");
console.log(newStyle);

newStyle.forEach((newStyle, i) =>  {
   

    if (i % 2 === 0) {
        newStyle.style.color = "green";
        newStyle.style.backgroundColor = "orange";
    } else {
        newStyle.style.color = "red";
    }

    // newStyle.style.background = "black";
});

// Adding Style Background Color




// Adding Style Font Size


