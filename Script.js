// Get the button and the navigation list from the HTML
// Note: You would need to add <button id="menu-btn">Menu</button> 
// and id="main-nav" to your <ul> in the HTML for this to work.
const menuButton = document.getElementById('menu-btn');
const navList = document.getElementById('main-nav');

// Only run if both elements exist
if (menuButton && navList) {
    // Add an event listener to the button
    menuButton.addEventListener('click', function() {
        // Toggles a CSS class named 'open' on the navigation list
        // This is where CSS takes over to show or hide the menu
        navList.classList.toggle('open');
    });
}
