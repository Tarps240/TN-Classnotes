# Flexing @Media

Today, we're going to make a responsive website that uses media queries. For the content, let's make it plain: a grid of 20 boxes. The CSS for each square is already in your `style.css`, though feel free to change it.

Here are the different column layouts we want:

1. When the screen is less than 600px, make 1 column of 20.

2. When the screen is between 600px and 800px, make 2 columns of 10.

3. When the screen is between 800px and 1000px, make 10 columns of 2.

4. When the screen is greater than 1000px, make 20 columns of 1.


### Setting Up

3. Whether you used a snippet or not, let's use Emmet to make 20 divs with the "square" class (defined already in our CSS file!) and a number in each one. Type the following code (without backticks if you're viewing this as straight markdown) into the body and hit enter: `div.square{$}*20`. Now you've got most of the html you need for this assignment and you can get started!

Try to use these emmet and/or snippets whenever you can; they'll save you a lot of time!


### Hints

* You can add further container-type divs to the HTML. In fact, you'll probably have to! This way you can rotate rows to columns and back with ease.


### Tools You Should Use

* Media queries with `max-width` and `min-width`.
* `flex-direction`.


### Stretch Goals:

1. Adjust the look in some way (up to you!) for portrait vs landscape mode.
2. Use an entirely different thing to query for besides width and orientation! Do something fun with it!
