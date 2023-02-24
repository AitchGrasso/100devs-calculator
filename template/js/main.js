const numberButtons = document.querySelectorAll('.num-btn')
buttons.forEach(ele => ele.addEventListener('click', buttonPress))

const opeeratorButtons = document.querySelectorAll('.num-btn')
buttons.forEach(ele => ele.addEventListener('click', buttonPress))

const equalButton = document.querySelectorAll('.num-btn').addEventListener('click', buttonPress)

const decimalButton = document.querySelectorAll('.num-btn').addEventListener('click', buttonPress)

const displayCurrent = document.querySelector('#display-current');
const displayPrevious = document.querySelector('#display-previous');

console.log(buttons)

// function buttonPress(Event){
//     let display = []
//     let value = Event.target.attributes[0].value
//     console.log(value)
//     display = display.push(value)
//     console.log(display)
//     document.querySelector('#display').innerHTML = display
//     // display = display.concat(value)
//     // document.querySelector('#display').innerHTML = ${Event.}
//     // console.log('HI, imdoing something right')
//     console.log(Event)
// }

class Calculator {
    constructor(displayCurrent, displayPrevious) {
        this.displayCurrent = displayCurrent
        this.displayPrevious = displayPrevious
        this.clear()  
    }

    clear() {
        this.currentOperand = ""
        this.previousOperand = ""
        this.operation = null
    }

    // no delete button

    appendNumber(number) {
        if (number === "." && this.currentOperand.includes(".")) return;
        this.currentOperand = this.currentOperand.toString() + number.toString();
    }

    flushOperator(operation) {
        if (this.currentOperand === "") return;
        if (this.previousOperand)
    }

    add(){
        return this.first + this.second
    }
    
     subtract(){
        return this.first - this.second
    }
    
     multiply(){
        return this.first * this.second
    }
    
     divide(){
        return this.first / this.second
    }
}

// + ascii 43
// - ascii 45
// * ascii 42
// / ascii 47
// = ascii 61
// . ascii 46

let sessionOne = new Calculator(12, 15, '+')
