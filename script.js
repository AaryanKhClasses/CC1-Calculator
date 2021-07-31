let label = document.getElementsByClassName('displayLabel')[0] // Gets the text of the display label
let preLabel = document.getElementsByClassName('preLabel')[0] // Gets the text of the pre label

// Number Functions
function nine() { if(label.innerHTML == '0') { label.innerHTML = '9' } else { label.innerHTML += '9' } }
function eight() { if(label.innerHTML == '0') { label.innerHTML = '8' } else { label.innerHTML += '8' } }
function seven() { if(label.innerHTML == '0') { label.innerHTML = '7' } else { label.innerHTML += '7' } }
function six() { if(label.innerHTML == '0') { label.innerHTML = '6' } else { label.innerHTML += '6' } }
function five() { if(label.innerHTML == '0') { label.innerHTML = '5' } else { label.innerHTML += '5' } }
function four() { if(label.innerHTML == '0') { label.innerHTML = '4' } else { label.innerHTML += '4' } }
function three() { if(label.innerHTML == '0') { label.innerHTML = '3' } else { label.innerHTML += '3' } }
function two() { if(label.innerHTML == '0') { label.innerHTML = '2' } else { label.innerHTML += '2' } }
function one() { if(label.innerHTML == '0') { label.innerHTML = '1' } else { label.innerHTML += '1' } }
function zero() { if(label.innerHTML == '0') { label.innerHTML = '0' } else { label.innerHTML += '0' } }

// Clear Functions
// function clear() { label.innerHTML = '0'; preLabel.innerHTML = '' } // idk why, but somehow this doesn't work in js file but works in the html file
function del() { if(label.innerHTML.length != 1) { label.innerHTML = label.innerHTML.slice(0, -1) } else { label.innerHTML = '0' } }

function afterOperation(operation) {
    preLabel.innerHTML = `${label.innerHTML} ${operation}`
    label.innerHTML = '0'
}
const operationTypes = ['+', '-', '×', '÷']
function operation(operation) {
    if(operationTypes.includes(preLabel.innerHTML)) {
        console.log(parseInt(preLabel.innerHTML.slice(0, -1)))
        preLabel.innerHTML = parseInt(preLabel.innerHTML.slice(0, -1)) + operation + parseInt(label.innerHTML)
        afterOperation(operation)
    } else {
        afterOperation(operation)
    }
}

function eqOperation(operation) {
    const func = parseInt(preLabel.innerHTML.slice(0, -1)) + operation + parseInt(label.innerHTML)
    
    preLabel.innerHTML = ''
}

function add() { operation('+') }
function subtract() { operation('-') }
function multiply() { operation('×') }
function divide() { operation('÷') }

function equals() {
    if(preLabel.innerHTML[preLabel.innerHTML.length - 1] == '+') {  eqOperation('+') }
    if(preLabel.innerHTML[preLabel.innerHTML.length - 1] == '-') {  eqOperation('-') }
    if(preLabel.innerHTML[preLabel.innerHTML.length - 1] == '×') {  eqOperation('×') }
    if(preLabel.innerHTML[preLabel.innerHTML.length - 1] == '÷') {  eqOperation('÷') }
}
