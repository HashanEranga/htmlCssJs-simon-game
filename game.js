let buttonColors = ['red', 'blue', 'green', 'yellow']
let gamePattern = []
const nextSequence = () =>{
    let randomNumber =Math.floor(Math.random()*4)
    console.log(randomNumber)
    return randomNumber
}

const randomColorGen = () =>{
    let randomChosenColor = buttonColors[nextSequence()]
    console.log(randomChosenColor)
    $('h1').text(randomChosenColor)
    gamePattern.push(randomChosenColor)
}

const arrayRead = () =>{
    for(let i=0; i<gamePattern.length; i++){
        console.log(gamePattern[i])
    }
}

// const flashButton = () => {
//     var redSound = new Audio('sounds/red.mp3')
//     $('#btn1').addClass('pressed')
//     redSound.play()
//     setTimeout(() => {
//         $('#btn1').removeClass('pressed')
//     }, 200)
// }

const flashButtonRed = () => {
    var redSound = new Audio('sounds/red.mp3')
    $('#btn1').addClass('pressed')
    redSound.play()
    setTimeout(() => {
        $('#btn1').removeClass('pressed')
    }, 200)
}
const flashButtonGreen = () => {
    var greenSound = new Audio('sounds/green.mp3')
    $('#btn2').addClass('pressed')
    greenSound.play()
    setTimeout(() => {
        $('#btn2').removeClass('pressed')
    }, 200)
}
const flashButtonBlue = () => {
    var blueSound = new Audio('sounds/blue.mp3')
    $('#btn3').addClass('pressed')
    blueSound.play()
    setTimeout(() => {
        $('#btn3').removeClass('pressed')
    }, 200)
}
const flashButtonYellow = () => {
    var yellowSound = new Audio('sounds/yellow.mp3')
    $('#btn4').addClass('pressed')
    yellowSound.play()
    setTimeout(() => {
        $('#btn4').removeClass('pressed')
    }, 200)
}