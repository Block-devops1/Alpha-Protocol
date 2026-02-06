alert("I am connected")
//1. Select the parts(like finding the terminals)
const streakDisplay = document.getElementById('streak-display');
const messageLog = document.getElemrntById('message-log');
const checkInBtn = document.getElementById('check-in-btn');
const resetBtn = document.getElementById('reset-btn');

//2. Set the starting state (the default variable)
let count = 0;

// 3. wire up the "checck in" button
checkInBtn.addEventListener( 'click', function() {
    count = count + 1; //increase logic
    streakDisplay.innerText = count + "Days";// update screen
    messageLog.innerText="Good job, Lambert.Keep the fire burning.";//feedback
    messageLog.style.color = "green";
});

//4. wire up the "relapse" button
resetBtn.addEventListener('click', function() {
    count = 0; // reset logic
    streakDisplay.innerText = count + "Days";// update screen
    messageLog.innerText="System Reset, Don't give up Lambert. Every day is a new chance to start fresh.";//feedback
    messageLog.style.color = "red";
});