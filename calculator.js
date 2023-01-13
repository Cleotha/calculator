let num1 = 8
let num2 = 2
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2
let sumEL=document.getElementById("sum-el")

function add() {
    let add = num1 + num2
    sumEL.textContent = "SUM: " + add
    num1.textContent = num1 + "+"
}
function subtract() {
    let subtract = num1 - num2
    sumEL.textContent = "SUM: " + subtract
}
function divide() {
    let divide = num1 / num2
    sumEL.textContent = "SUM: " + divide
}
function multiply() {
    let multiply = num1 * num2
    sumEL.textContent = "SUM: " + multiply
}