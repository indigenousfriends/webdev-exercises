console.log('Hello World! Our JavaScript is running!');

// Let's find the button by its ID #
// We have to save in a variable (const) so we can use it later
// We can call it anything we want, but it's best to call it something that makes sense
const testButton = document.querySelector('#test-button');

// In order to do something when the button is clicked, we need to create a function
// We can call it anything we want, but it's best to call it something that makes sense
function buttonClicked() {
	// Add functionalityt here
	// This alert is just an example to show that our interaction is working
	alert('Button was clicked!');

	// We can change style properties of an HTML element using JavaScript
	// Here we are changing the background color of the button to red
	testButton.style.backgroundColor = 'red';
	// We can also change the background color of the entire page or any other element
	document.body.style.backgroundColor = 'blue';
}

// Add an event listener to the button that we created on line 4
// The event listener calls the function buttonClicked when the button is clicked
testButton.addEventListener('click', buttonClicked);
