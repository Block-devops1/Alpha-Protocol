// 1. SELECT THE PARTS
const streakDisplay = document.getElementById('streak-display');
const messageLog = document.getElementById('message-log');
const checkInBtn = document.getElementById('check-in-btn');
const resetBtn = document.getElementById('reset-btn');

// 2. LOAD FROM MEMORY (The "Save File" check)
// We ask the browser: "Do we have a saved streak?"
let storedCount = localStorage.getItem('atomicStreakCount');

// If we found a saved number, use it. If not, start at 0.
let count = storedCount ? parseInt(storedCount) : 0;

// Update the screen immediately with the saved number
streakDisplay.innerText = count + " Days";

// 3. THE "CHECK IN" LOGIC
checkInBtn.addEventListener('click', function() {
    // Increase the count
    count = count + 1;
    
    // Update the screen
    streakDisplay.innerText = count + " Days";
    
    // Save to Memory (Hard Drive)
    localStorage.setItem('atomicStreakCount', count);

    // Give Feedback
    messageLog.innerText = "Target Hit. Streak Saved.";
    messageLog.style.color = "green";
});

// 4. THE "RELAPSE" LOGIC
resetBtn.addEventListener('click', function() {
    // Reset the count
    count = 0;
    
    // Update the screen
    streakDisplay.innerText = count + " Days";
    
    // Save the reset to Memory
    localStorage.setItem('atomicStreakCount', count);

    // Give Feedback
    messageLog.innerText = "System Reset. Restarting Protocol.";
    messageLog.style.color = "red";
});
