# Copy Kitten

### Introduction

We'll be using CSS to get as close as we can to copying each of the three sections of the page: the button, header, and table.

### Setup

* Fork this repository on GitHub
* In your command line, use git to clone your forked repo
* Code away!

### Guidelines

* Each component you'll be copying has at least one image showing you what it's supposed to look like. The header and button also have an image showing you what happens when you hover over each component.
* Make at least one commit after finishing each component
* You may have noticed that the `index.html` file has FOUR separate CSS files `link`ed in it. These are all being loaded in, and they're being kept separate so you can work in one and then the other, but all rules from any one CSS file apply to the ENTIRE page. That means you'll have to be a bit careful that they don't overlap; for example, your rules for the button shouldn't apply to the header! You can use the `class` and `id` attributes we've added to each to target specific elements without affecting others. You could also add your own to the elements in `index.html` if you don't like the ones we have there!
* You won't need to edit the `style.css` file at all
* DO edit the three CSS files, `button.css`, `header.css`, and `table.css`. They're currently empty, but that's where you come in!

### Stretch Goals

##### Button

* Add some styling to the button for when it's clicked using a "pseudo-selector" (research required here!). Look up "inset shadow" for a neat effect!
* Capitalize only the first letter of each word in the button. With CSS!

##### Header

* Now that you've worked to make it look good horizontally, make the header vertical again. Be sure to move the "nav ribbon" (the grey part) as well. And you may have to remove the bullet points to make it pretty!

##### Table

* Add a background color to each cell when that cell is hovered with the mouse. What part of the cell gets that color?
* Try adding some space between each `<a>` of a row. What does this do to the "clickable" space?
