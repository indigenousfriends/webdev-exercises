// Let's play around with DOM properties! We'll use IFAs social media links for this exercise.

// Facebook http://facebook.com/indigenousfriends
// Instargram https://www.instagram.com/indigenousfriends
// LinkedIn https://www.linkedin.com/company/indigenous-friends-association/
// TikTok https://www.tiktok.com/@indigenousfriends





// Set up variables where you see appropriate
const facebookLink = document.getElementById('link-facebook');
console.log(facebookLink.attributes);

// You don't have to write a function for each one, but you can if you want to


// Use setAttribute to add the href attribute to the link. Make the link go to the matching Social Media url for IFA (urls above).
facebookLink.setAttribute('href', 'http://facebook.com/indigenousfriends');


// Use innerHTML to change the text in the link to the matching Social Media platform
// facebookLink.textContent = '<img src="./icons/facebook.svg" alt="facebook" class="image">Facebook';
facebookLink.innerHTML = '<img src="./icons/facebook.svg" alt="facebook" class="image"><span>Facebook</span>';



// Use the style attribute to change the color of the link to the matching Social Media platform
// See the CSS file for the color values. Try using CSS variables!
facebookLink.style.color = 'red';


// Try changing the target attribute to "_blank" to open the link in a new tab
facebookLink.setAttribute('target', '_blank');