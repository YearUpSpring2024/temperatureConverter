"use strict";
const btn = document.getElementById("button");

window.onload = init;

function init() {
    btn.onclick = convertFarenheitToCelsius;
}

function convertFarenheitToCelsius() {
    let farenheitInput = document.getElementById("farenheitToCelsius").value.trim();

    let farenheit = parseFloat(farenheitInput);


    if (farenheit === "" || isNaN(farenheitInput)) {
        document.getElementById("farenheitOutput").value = "Enter a Valid Number";
    }
    else {
        let celsius = (farenheit - 32) * 5 / 9;
        document.getElementById("celsiusOutput").value = celsius.toFixed(2);
    }
}