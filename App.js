const display = document.querySelector(".display");
let calc = "";

function addToDisplay(input) {
    display.value += input;
    if (input === "x")
        calc += "*";
    else
        calc += input;
}

function clearDisplay() {
    display.value = "";
    calc = "";
}

function calculate() {
    try {
        display.value = eval(calc);
    } catch (error) {
        display.value = "Error";
    }
}