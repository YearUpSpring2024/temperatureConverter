"use strict";;

// button
const btn = document.getElementById("conver");
// the input
const celsiusitInput = document.getElementById("CelsiusTofarenheit");
// outPut
const farenheitOutput = document.getElementById("farenheitOutput");
// error message
const errorMessage = document.getElementById("errorMessage");


// window.onload = init;




function convertCelsiusToFarenheit() {
    let celsiusitInputValue = celsiusitInput.value.trim();
    let celsius = parseFloat(celsiusitInputValue);

    if (celsiusitInputValue === "" || isNaN(celsius)) {
        errorMessage.innerHTML = "Please enter a real number"
        farenheitOutput.value = "";
    }
    else {
        let farenheit = (celsius * 9 / 5) + 32;
        document.getElementById("farenheitOutput").value = farenheit.toFixed(2);
    }
}


function resetFields() {
    errorMessage.innerHTML = ""
    celsiusitInput.value = "";
    farenheitOutput.value = "";
}

btn.addEventListener("click", convertCelsiusToFarenheit);
