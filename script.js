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
function point() { if(label.innerHTML == '0') { label.innerHTML = '0.' } else { label.innerHTML += '.' } }

// Clear Functions
// function clear() { label.innerHTML = '0'; preLabel.innerHTML = '' } // idk why, but somehow this doesn't work in js file but works in the html file
function del() { if(label.innerHTML.length != 1) { label.innerHTML = label.innerHTML.slice(0, -1) } else { label.innerHTML = '0' } }

function afterOperation(operation) { // This function is used to add the operation to the preLabel
    preLabel.innerHTML = `${label.innerHTML} ${operation}` // Adds the operation to the preLabel
    label.innerHTML = '0' // Resets the label to 0
}

// Operation Functions
function add() { // This function is used to add the operation to the preLabel
    if(preLabel.innerHTML.includes('+')) { // If the preLabel already has a + operation
        preLabel.innerHTML = (parseInt(preLabel.innerHTML.slice(0, -1)) + parseInt(label.innerHTML)).toString() + ' +' // Adds the numbers and operation to the preLabel
        label.innerHTML = '0' // Resets the label to 0
    } else if(preLabel.innerHTML.includes('-')) { // If the preLabel already has a - operation
        subtract() // Calls the subtract function
        preLabel.innerHTML = (parseInt(preLabel.innerHTML.slice(0, -1)) + parseInt(label.innerHTML)).toString() + ' +' // Adds the numbers and operation to the preLabel
        label.innerHTML = '0' // Resets the label to 0
    } else if(preLabel.innerHTML.includes('×')) { // If the preLabel already has a × operation
        multiply() // Calls the multiply function
        preLabel.innerHTML = (parseInt(preLabel.innerHTML.slice(0, -1)) + parseInt(label.innerHTML)).toString() + ' +' // Adds the numbers and operation to the preLabel
        label.innerHTML = '0' // Resets the label to 0
    } else if(preLabel.innerHTML.includes('÷')) { // If the preLabel already has a ÷ operation
        divide() // Calls the divide function
        preLabel.innerHTML = (parseInt(preLabel.innerHTML.slice(0, -1)) + parseInt(label.innerHTML)).toString() + ' +' // Adds the numbers and operation to the preLabel
        label.innerHTML = '0' // Resets the label to 0
    } else { // If the preLabel doesn't have any operations
        afterOperation('+') // Calls the afterOperation() function
    }
}

// ! ALl the next operations are similar to the previous one.
function subtract() {
    if(preLabel.innerHTML.includes('+')) {
        add()
        preLabel.innerHTML = (parseInt(preLabel.innerHTML.slice(0, -1)) - parseInt(label.innerHTML)).toString() + ' -'
        label.innerHTML = '0'
    } else if(preLabel.innerHTML.includes('-')) {
        preLabel.innerHTML = (parseInt(preLabel.innerHTML.slice(0, -1)) - parseInt(label.innerHTML)).toString() + ' -'
        label.innerHTML = '0'
    } else if(preLabel.innerHTML.includes('×')) {
        multiply()
        preLabel.innerHTML = (parseInt(preLabel.innerHTML.slice(0, -1)) - parseInt(label.innerHTML)).toString() + ' -'
        label.innerHTML = '0'
    } else if(preLabel.innerHTML.includes('÷')) {
        divide()
        preLabel.innerHTML = (parseInt(preLabel.innerHTML.slice(0, -1)) - parseInt(label.innerHTML)).toString() + ' -'
        label.innerHTML = '0'
    } else {
        afterOperation('-')
    }
}

function multiply() {
    if(preLabel.innerHTML.includes('+')) {
        add()
        preLabel.innerHTML = (parseInt(preLabel.innerHTML.slice(0, -1)) * parseInt(label.innerHTML)).toString() + ' ×'
        label.innerHTML = '0'
    } else if(preLabel.innerHTML.includes('-')) {
        subtract()
        preLabel.innerHTML = (parseInt(preLabel.innerHTML.slice(0, -1)) * parseInt(label.innerHTML)).toString() + ' ×'
        label.innerHTML = '0'
    } else if(preLabel.innerHTML.includes('×')) {
        preLabel.innerHTML = (parseInt(preLabel.innerHTML.slice(0, -1)) * parseInt(label.innerHTML)).toString() + ' ×'
        label.innerHTML = '0'
    } else if(preLabel.innerHTML.includes('÷')) {
        divide()
        preLabel.innerHTML = (parseInt(preLabel.innerHTML.slice(0, -1)) * parseInt(label.innerHTML)).toString() + ' ×'
        label.innerHTML = '0'
    } else {
        afterOperation('×')
    }
}

function divide() {
    if(preLabel.innerHTML.includes('+')) {
        add()
        preLabel.innerHTML = (parseInt(preLabel.innerHTML.slice(0, -1)) / parseInt(label.innerHTML)).toString() + ' ÷'
        label.innerHTML = '0'
    } else if(preLabel.innerHTML.includes('-')) {
        subtract()
        preLabel.innerHTML = (parseInt(preLabel.innerHTML.slice(0, -1)) / parseInt(label.innerHTML)).toString() + ' ÷'
        label.innerHTML = '0'
    } else if(preLabel.innerHTML.includes('×')) {
        multiply()
        preLabel.innerHTML = (parseInt(preLabel.innerHTML.slice(0, -1)) / parseInt(label.innerHTML)).toString() + ' ÷'
        label.innerHTML = '0'
    } else if(preLabel.innerHTML.includes('÷')) {
        preLabel.innerHTML = (parseInt(preLabel.innerHTML.slice(0, -1)) / parseInt(label.innerHTML)).toString() + ' ÷'
        label.innerHTML = '0'
    } else {
        afterOperation('÷')
    }
}

function equals() {
    if(preLabel.innerHTML.includes('+')) {
        add()
        label.innerHTML = (parseInt(preLabel.innerHTML.slice(0, -1)) + parseInt(label.innerHTML)).toString()
        preLabel.innerHTML = ''
    } else if(preLabel.innerHTML.includes('-')) {
        subtract()
        label.innerHTML = (parseInt(preLabel.innerHTML.slice(0, -1)) - parseInt(label.innerHTML)).toString()
        preLabel.innerHTML = ''
    } else if(preLabel.innerHTML.includes('×')) {
        multiply()
        label.innerHTML = (parseInt(preLabel.innerHTML.slice(0, -1)) * parseInt(label.innerHTML)).toString()
        preLabel.innerHTML = ''
    } else if(preLabel.innerHTML.includes('÷')) {
        divide()
        label.innerHTML = (parseInt(preLabel.innerHTML.slice(0, -1)) / parseInt(label.innerHTML)).toString()
        preLabel.innerHTML = ''
    }
}