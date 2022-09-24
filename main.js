// //JQuery equivalent of document.createElement
// let div = $('<div>Here is a JQuery Div!</div>')
// //JQuery equivalent of document.querySelector
// let body =$('body'); //name of the tag we want to look for 'body'

// //We add elements to other elements using appendChild
// //JQuery equivalent of appendChild()
// body.append(div);

// $('body').append($('<div>Another div</div>')); //without variables

// 2. Add the `<div>` to the body of your document
 body.append(div);

// 1. Start out by creating a `<div>` with JQuery
// 3. Set the text of the `<div>` to be Hello World
 let div = $('<div>Hello World</div>')

 //4. Add a click listener on the `<div>` that makes it so that the browser displays an `alert()` with the text `Hello world`
div.on('click', function(){
     console.log("Click!");
 })
 $('#div').on('click', () => console.log("Hello World"))







