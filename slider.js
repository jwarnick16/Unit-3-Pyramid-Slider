function printPyramid(height) {
    let container = document.getElementById("pyramid"); // Finds container with ID of "pyramid"
    container.innerHTML = ""; // Tells function to override whatever is in the pyramid <div>
    let brickSymbol = document.getElementById("input").value;
    let n = height; // Takes in user input as height parameter
    for (let i = 1; i <= n; i++) { // Outer loop
        let rowStr = ""; // Creates an empty string for each row
        for (let j = 0; j < n - i; j++) { // First inner loop to replace blank spaces with periods so they will not be ignored by HTML
            rowStr += " "; // Adds periods to blank spaces
        }
        for (let k = - 1; k < i; k++) { // Second inner loop, places hashes as bricks based on user input
            rowStr += brickSymbol; // Assigning hashes as bricks
        }
        container.innerHTML += rowStr + "<br>"; // Creates breaks between each row so pyramid appears stacked
    }
}


function sliderListener() {
    let listener = document.getElementById("pHeight"); // Collects value and passes it to the slider
    let height = listener.value; // Sets slider value
    printPyramid(height); // Passes slider value to element ID pHeight to determine size of pyramid
}

document.getElementById("pHeight").addEventListener("input", sliderListener); // Listen for changes in the slider
document.getElementById("input").addEventListener("change", sliderListener);
