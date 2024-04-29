"use strict";
// button
const btn = document.getElementById("convert");
// reset
const reset = document.getElementById("resetBtn");
// input
const farenheitInput = document.getElementById("farenheitInput");
// errormessage
const errormessage = document.getElementById("errorMessage");
// output
const celsiusOutput = document.getElementById("celsiusOutput");



function convertFarenheitToCelsius() {
    let farenheitInputValue = farenheitInput.value.trim();
    let farenheit = parseFloat(farenheitInputValue);


    if (farenheitInputValue === "" || isNaN(farenheit)) {
        errormessage.innerHTML = "Enter a valid number"
        celsiusOutput.value = "";
    }
    else {
        let celsius = (farenheit - 32) * 5 / 9;
        celsiusOutput.value = celsius.toFixed(2);
    }
}


function resetFields() {
    errormessage.innerHTML = ""
    farenheitInput.value = "";
    celsiusOutput.value = "";
}

btn.addEventListener("click", convertFarenheitToCelsius);