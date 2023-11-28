// Define a variable for the button
const pinkButton = document.getElementById('button-pink');
console.log(pinkButton);

// Define a function that will be called when the button is clicked
function buttonClicked() {
	alert('The button was clicked!');
}

// Add an event listener to the button
pinkButton.addEventListener('click', buttonClicked);
