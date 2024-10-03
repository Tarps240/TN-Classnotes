///////////////////////////////////// DOM(Document Object Model)/////////////////////////////
    // Creating an Element
        // document.createElement("tagName");

    let title = document.createElement("h1");
    title.className = "First Title";
    title.textContent = "I am a title!";
    title.style.fontSize = "50px";

    console.log(title);

    // Creating elements

    let titles;

    for (let i = 0; i < 3; i++) {
        titles = document.createElement("h1");
        titles.className = "First Title";
        titles.textContent = i;
        titles.style.fontSize = "50px";

        document.body.appendChild(titles);

        console.log(titles);
    };

    


    // Appending child to a parent element

    document.body.appendChild(title);
    
    // Removing a child element from a parent node

    const getList = document.querySelector("ul");
    const getListItems = document.querySelectorAll("li");

    for (const list of getListItems) {
        getList.removeChild(list);
    };