

// let display = document.querySelector('#display').innerHTML

let buttons = document.querySelectorAll('.btn')
buttons.forEach(ele => ele.addEventListener('click', buttonPress))
console.log(buttons)

function buttonPress(Event){
    let display = []
    let value = Event.target.attributes[0].value
    console.log(value)
    display = display.push(value)
    console.log(display)
    document.querySelector('#display').innerHTML = display
    // display = display.concat(value)
    // document.querySelector('#display').innerHTML = ${Event.}
    // console.log('HI, imdoing something right')
    console.log(Event)
}