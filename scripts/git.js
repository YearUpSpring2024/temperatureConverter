"use strict";
const btn = document.getElementById("button");

window.onload = init;

function init() {
    btn.onclick = convertCelsiusToFarenheit;
}

function convertCelsiusToFarenheit() {
    let celsiusitInput = document.getElementById("CelsiusTofarenheit").value.trim();

    let celsius = parseFloat(celsiusitInput);

    if (celsius === "" || isNaN(celsius)) {
        document.getElementById("farenheitOutput").value = "Enter a Valid Number";
    }
    else {
        let celsius = parseFloat(celsiusitInput);
        let farenheit = (celsius * 9 / 5) + 32;
        document.getElementById("farenheitOutput").value = farenheit.toFixed(2);
    }
}