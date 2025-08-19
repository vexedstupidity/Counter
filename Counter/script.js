//Counter Program

const decreaseButton = document.getElementById("decreaseButton");
const resetButton = document.getElementById("resetButton");
const increaseButton = document.getElementById("increaseButton");
const countDisplay = document.getElementById("countDisplay");

let count = 0;

increaseButton.onclick = function() {
    count++;
    countDisplay.textContent = count;
}
resetButton.onclick = function() {
    count = 0;
    countDisplay.innerText = count;
}
decreaseButton.onclick = function() {
    count--;
    countDisplay.innerText = count;
}
