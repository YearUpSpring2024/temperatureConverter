"use strict";
// button
const btn = document.getElementById("convert");
// reset
const reset = document.getElementById("resetBtn");
// input
const farenheitInput = document.getElementById("farenheitInput");
// output
const celsiusOutput = document.getElementById("celsiusOutput");


function convertFarenheitToCelsius() {
    let farenheitInputValue = farenheitInput.value.trim();
    let farenheit = parseFloat(farenheitInputValue);


    if (farenheitInputValue === "" || isNaN(farenheit)) {
        celsiusOutput.value = "Enter a Valid Number";
    }
    else {
        let celsius = (farenheit - 32) * 5 / 9;
        celsiusOutput.value = celsius.toFixed(2);
    }
}


function resetFields() {
    farenheitInput.value = "";
    celsiusOutput.value = "";
}

btn.addEventListener("click", convertFarenheitToCelsius);