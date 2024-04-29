"use strict";;
const btn = document.getElementById("button");
const celsiusitInput = document.getElementById("CelsiusTofarenheit");
const farenheitOutput = document.getElementById("farenheitOutput");


// window.onload = init;




function convertCelsiusToFarenheit() {
    let celsiusitInputValue = celsiusitInput.value.trim();
    let celsius = parseFloat(celsiusitInputValue);

    if (celsiusitInputValue === "" || isNaN(celsius)) {
        farenheitOutput.value = "Enter a Valid Number";
    }
    else {
        let farenheit = (celsius * 9 / 5) + 32;
        document.getElementById("farenheitOutput").value = farenheit.toFixed(2);
    }
}


function resetFields() {
    celsiusitInput.value = "";
    farenheitOutput.value = "";
}

btn.addEventListener("click", convertCelsiusToFarenheit);
