const display = document.getElementById('display');

function appendToDisplay(input) {
    display.value += input;
}
function caculate() {
    display.value = eval(display.value);
}
function clearDisplay() {
    display.value = "";
}