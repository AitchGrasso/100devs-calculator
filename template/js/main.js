

// let display = document.querySelector('#display').innerHTML

let buttons = document.querySelectorAll('.btn')
buttons.forEach(ele => ele.addEventListener('click', buttonPress))
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
    constructor(firstArg, secondArg, operationSymbol) {
        this.first = firstArg
        this.second = secondArg
        this.operation = operationSymbol     
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
