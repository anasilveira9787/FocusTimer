// DOM
// Document Object Model

//Refatoração - deixa o código mais entendível, mais performático e não altera a funcionalidade

const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const buttonSet = document.querySelector('.set')
const buttonSoundOn = document.querySelector('.sound-on')
const buttonSoundOff = document.querySelector('.sound-off')

//Event-driven
//programação imperativa
//callback

buttonPlay.addEventListener('click', function() {    
    buttonPlay.classList.add('hide')
    buttonPause.classList.remove('hide')
    buttonSet.classList.add('hide')
    buttonStop.classList.remove('hide')

})

buttonPause.addEventListener('click', function() {    
    buttonPause.classList.add('hide')
    buttonPlay.classList.remove('hide')

})

buttonStop.addEventListener('click', function() {    
    buttonPlay.classList.remove('hide')
    buttonPause.classList.add('hide')
    buttonSet.classList.remove('hide')    
    buttonStop.classList.add('hide')
})

buttonSoundOn.addEventListener('click', function() {    
    buttonSoundOn.classList.add('hide')
    buttonSoundOff.classList.remove('hide')
})

buttonSoundOff.addEventListener('click', function() {    
    buttonSoundOn.classList.remove('hide')
    buttonSoundOff.classList.add('hide')
})
