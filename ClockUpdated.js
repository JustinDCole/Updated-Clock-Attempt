setInterval(setMinuteHandRotation, 60000)
setInterval(setHourHandRotation, 3600000)
const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')
const begin = document.getElementById('top')

// const manos = document.getElementsByClassName('.numbers').innerText // get all the numbers on the clock and their inner text
// const typeclock = Array.from(manos) // create an array out of all the numbers collected

function setSecondHandRotation () {
  while (secondHand.style.transform === 'rotate(360deg)') {
    minuteHand.style.position = begin.style.position && minuteHand.style.position !== begin.style.position// the minute hand starts at 12
  }
}
setSecondHandRotation()

setMinuteHandRotation( // on window.onload, delay the motion of either the hour hand or the minute hand for until the second hand returns to the 12 position
  window.addEventListener('load', (minuteHand) => { // set up an addeventlistener to stop the transformations of the minute hand
    minuteHand.style.transform.animationDelay = '60s'
    minuteHand.style.transform = 'rotate(6deg)'
    minuteHand.style.transform = false
  }
  ))

function setMinuteHandRotation () {
  setSecondHandRotation()
  minuteHand.style.transform = 'rotate(6deg)' // the minute hand should shift 30 degrees right
}
function setHourHand () {
  while (secondHand.style.transform === 'rotate(360deg)') {
    hourHand.style.position = begin.style.position && hourHand.style.position !== begin.style.position // the minute hand starts at 12
  }
}

setHourHand()

setHourHandRotation( // on window.onload, delay the motion of either the hour hand or the minute hand for until the second hand returns to the 12 position
  window.addEventListener('load', (hourHand) => { // set up an addeventlistener to stop the transformations of the hour hand
    hourHand.style.transform.animationDelay = '3600s'
    hourHand.style.transform = 'rotate(30deg)'
    hourHand.style.transform = false
  }))

function setHourHandRotation () {
  setHourHand()
  hourHand.style.transform = 'rotate(30deg)'
}

// Clock starts at 12:00
// IfsecondHand.style.position !== begin.style.position, increase the minute hand by 1
// If the digit is 10 or greater, indicate the shift from '0' to '1'
// If minuteHand.style.position = begin.style.position, increase the hour hand by 1.
// If the digit is 10 or greater, indicate the shift from '0' to '1' //
