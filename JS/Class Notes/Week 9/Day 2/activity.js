// Create an index.html file and put four p elements as above: Get the first paragraph by using document.querySelector(tagname) and tag name

const paragraph = document.querySelector("p");

console.log(paragraph);

// Get each of the the paragraph using document.querySelector('#id') and by their id

let paragraph1 = document.querySelector('#text-container1');
let paragraph2 = document.querySelector('#text-container2');
let paragraph3 = document.querySelector('#text-container3');
let paragraph4 = document.querySelector('#text-container4');

console.log(paragraph1);
console.log(paragraph2);
console.log(paragraph3);
console.log(paragraph4);

// Get all the p as nodeList using document.querySelectorAll(tagname) and by their tag name

let allParagraphs = document.querySelectorAll("p");
console.log("allParagraphs");

// Loop through the nodeList and get the text content of each paragraph

allParagraphs.forEach((p, index) => {
    console.log(`Paragraph ${index + 1}:`, p.textContent);
});

// Set a text content to paragraph the fourth paragraph, Fourth Paragraph

paragraph4.textContent = "Fourth Paragraph";

// Set id and class attribute for all the paragraphs using different attribute setting methods

paragraph1.setAttribute("class", "para-one");
paragraph2.id = "para-two";
paragraph3.className = "para-three";
paragraph4.id = "para-four";

// Change stye of each paragraph using JavaScript(eg. color, background, border, font-size, font-family)

paragraph1.style.color = "blue";
paragraph1.style.backgroundColor = "lightgray";
paragraph1.style.border = "1px solid black";
paragraph1.style.fontSize = "16px";
paragraph1.style.fontFamily = "Arial, sans-serif";

paragraph2.style.color = "purple";
paragraph2.style.backgroundColor = "yellow";
paragraph2.style.border = "2px dashed black";
paragraph2.style.fontSize = "18px";
paragraph2.style.fontFamily = "Verdana, sans-serif";

paragraph3.style.color = "orange";
paragraph3.style.backgroundColor = "lightblue";
paragraph3.style.border = "1px dotted red";
paragraph3.style.fontSize = "20px";
paragraph3.style.fontFamily = "Courier New, monospace";

paragraph4.style.color = "green";
paragraph4.style.backgroundColor = "pink";
paragraph4.style.border = "3px double green";
paragraph4.style.fontSize = "22px";
paragraph4.style.fontFamily = "Georgia, serif";


// Select all paragraphs and loop through each elements and give the first and third paragraph a color of green, and the second and the fourth paragraph a red color

allParagraphs.forEach((p, index) => {
    if (index === 0 || index === 2) {
      p.style.color = "green"; // First and third paragraphs
    } else {
      p.style.color = "red"; // Second and fourth paragraphs
    }
  });

// Set text content, id and class to each paragraph.

paragraph1.textContent = "First Paragraph - Updated";
paragraph2.textContent = "Second Paragraph - Updated";
paragraph3.textContent = "Third Paragraph - Updated";
paragraph4.textContent = "Fourth Paragraph - Updated";

paragraph1.id = "new-id-para1";
paragraph2.id = "new-id-para2";
paragraph3.id = "new-id-para3";
paragraph4.id = "new-id-para4";

paragraph1.className = "new-class-para1";
paragraph2.className = "new-class-para2";
paragraph3.className = "new-class-para3";
paragraph4.className = "new-class-para4";