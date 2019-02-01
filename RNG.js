document.addEventListener("DOMContentLoaded", function(event) { 
var numOfRandomNumbers
var numSize
var numSet = []

function calculateRandomNum(num1,num2) {
    var i = 0
    while(i<num1) {
        numSet.push(randomIntFromInterval(1,num2))
        i++
    }

}

function randomIntFromInterval(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

window.alert('Random number generator.')
numOfRandomNumbers = Number(window.prompt('How many random numbers do you need?'))
while(Number.isInteger(numOfRandomNumbers) == false) {
    window.alert('That is not a number.')
    numOfRandomNumbers = Number(window.prompt('How many random numbers do you need?'))
}
numSize = Number(window.prompt("What's the max value do you want your number(s)?"))
while(Number.isInteger(numSize) == false) {
    window.alert('That is not a number.')
    numSize = Number(window.prompt("What's the max value do you want your number(s)?"))
}

calculateRandomNum(numOfRandomNumbers,numSize)

document.getElementById("Numbers").innerHTML = "These are your numbers,<br> <br>" + numSet;
  });