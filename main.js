// jQuery
$(document).ready(function() {
    // Event listener for No button click
    $(".no").click(function() {
        alert("Wrong choice. Choose again.");
    });

    // Event listener for No button cursor hover
    $(".no").mouseenter(function() {
        var moveHorizontal = randomHorizontal();
        var moveVertical = randomVertical();
        $(this).animate({left: moveHorizontal, top: moveVertical});
    });

    // Event listener for Yes button click
    $(".yes").click(function() {
        // Hide the No button when the Yes button is clicked
        $(".no").hide();
    });
})


// FUNCTION: used to move the No button horizontally on hover
function randomHorizontal() {
    // Loop until a satisfactory horizontal value is calculated
    while(true) {
        // Find width of screen
        var width = window.innerWidth;

        // Find the location of the button in the window
        var noLocation = $(".no").position().left;

        // Calculate a random number
        var randHorizontal = Math.floor(Math.random() * (width + 1));
        
        // Find the width of the No button
        var noWidth = $(".no").width();

        // Ensure the button does not exceed the screen widths
        if((noLocation + randHorizontal + noWidth) < width) {
            return randHorizontal + "px";
        }
    }
}


// FUNCTION: used to move the No button vertically on hover
function randomVertical() {
    // Loop until a satisfactory vertical value is calculated
    while(true) {
        // Find height of screen
        var height = window.innerHeight;

        // Find the location of the button in the window
        var noLocation = $(".no").position().top;

        // Calculate a random number
        var randVertical = Math.floor(Math.random() * (height + 1));
        
        // Find the height of the No button
        var noHeight = $(".no").height();

        // Ensure the button does not exceed the screen heights
        if((noLocation + randVertical + noHeight) < height) {
            return randVertical + "px";
        }
    }
}