# sass-class
I'm going to spend the day (2/15/18) learning about Sass and will push the results to this repo.

## Why Sass?
I discovered Sass during my Project 2 at GA. I decided that I was more concerned with acheiving a minimum viable product than with learning a new tool due to timing. 

## 
Why is Sass Useful and Why Does One Use it?
Sass seems like it is useful beyond my current needs currently. Pretty much anything I'm corncerned with in terms of styling, I can achieve with CSS3. One thing I love within Sass is that you can next styling within an element. So, if you have an anchor tag and you would like to add a hover property to it, you can include that within a nested styling, which I do in this page. 

 
Sass seems like it's useful for larger scale applications that might be harder to navigate. You can store variables in a seperate .scss file and import them into your main working file. You can also do the same thing with functions. If you have a large project and want to change a color, you can find the variable with that color, and simply change it's property value instead of targetting a specific element, class or ID. You can also set up a color pallette with your variables and call those instead of a specific hex number. Sass also comes with built in functions that you can use to manipulate the styling of your elements by a percentage or number of degrees. 
 
One can style with JS variables as well, and I'm sure you can find other libraries that will accomplish the same thing as sass. Alternates to Sass that I am aware of are Less & Stylus. Both are compiled into CSS.  

## History of Sass
Sass was developed in the mid-2000's by Natalie Weizenbaum & Chris Eppstein. It was designed by Hampton Catlin. It is open source and is open to outside contributors. Natalie Weizanbaum is still involved with the source code and is helping to broaden use cases of Sass. 

## Thoughts on Sass
I think it's pretty cool. For any projects I have in the near future, I don't think it will be necessary to use Sass. That being said, I'm glad to have a basic understanding of how to operate within this type of development environmemt. I think as my programming and styling skills improve, being able to write functions within an .scss file will be incredibly useful and fun, but for the moment this capability was a little beyond my limits unfortunately. I'm also glad to have had exposure to compiling an .scss file to .css using Gulp as a tasking tool. 
## Conceptual Hurdles
Conditional Sass values dependant on the values of other elements is something that I can see as being useful. However the programmatic aspects of Sass are currently not entirely within my grasp. I leanred a function which changes the color of the text based on the darkness of the background, and once I learn more about how to compare values I am excited to get into writing my own Sass functions.

## Useful Resources?
Youtube was a great friend of mine in learning Sass. 

Derek Banas - SASS Tutorial
https://www.youtube.com/watch?v=wz3kElLbEHE

Brad Traversy - Sass Workflow & Dev Server From Scratch Using Gulp (teaching you how to compile)
https://www.youtube.com/watch?v=rmXVmfx3rNo

Also the Sass docs are great
https://sass-lang.com/install

## Some Potential Interview Questions?

How might you setup a dev environment in Node with which to compile your Sass code into CSS?

Write a function in Sass to set the text color of an element dependant on the state of the animation of it's background-color.

How might you solve the same problem using Sass functions that is also accomplishable using JavaScript?

## Setup instructions
If you'd like, you can clone this repo down onto your local machine. Once this is accomplished, make sure you have Node installed globally and run 'npm i' within the local repository's directory. You will also need to 'npm i -g gulp' which will also you to actually use the 'npm start' script and launch the server.
