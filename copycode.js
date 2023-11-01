function multiply() {
    // Get the input values
    var firstInput = parseFloat(document.getElementById("firstInput").value);
    var secondInput = parseFloat(document.getElementById("secondInput").value);
    
    if (isNaN(firstInput) || isNaN(secondInput)) {
        alert("Invalid input. Please enter valid numbers.");
        return;
    }
    
    var result = [];

    for (var i = 0; i <= secondInput; i++) {
        result.push(firstInput * i);
    }

    // Display the results in the result container
    var resultContainer = document.getElementById("resultContainer");
    resultContainer.innerHTML = "Multiplication results: " + result.join(", ");
}
