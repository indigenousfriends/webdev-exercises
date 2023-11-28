// Let's see if we can get our buttons to do something when we click them!

// We can start by getting a reference to the button element
// Define a variable for the button here using const and getElementById
const buttonElement = document.getElementById('button-pink');
console.log(buttonElement);
console.log("----------");

const someElem = '<h1>hello</h1>';
document.createElement(someElem);

const allButtons = document.querySelectorAll('.btn');
console.log(allButtons);

// Let's see it in the console!

// Great! Now let's write a function to call when the button is clicked
// This is where the action happens!
// Let's make an alert pop up when the button is clicked
function buttonClicked() {
	alert("You clicked a button!");
	this.style.backgroundColor = "red";
}

function pinkButtonClicked() {
	alert("You clicked the BARBIE button!");
}

// Now let's add an event listener to the button
// Use the addEventListener method to add a click event listener to the button
// This connects the button to the function we wrote above.

allButtons.forEach(function(button) {
	button.addEventListener('click', buttonClicked);
});

buttonElement.addEventListener('click', pinkButtonClicked);