// Global loading messages
const messages = [
    "We see you squinting, Let us help with that!",
    "This loaded 5 seconds ago, make sure you're not lagging",
    "Finding misplaced code",
    "Eye'm working on it, Hold tight!",
    "Reminder to give your eyes breaks every 10-15 minutes!"
];

// Show Loading Screen
function showLoadingScreen() {
    const loadingScreen = document.getElementById('loading-screen');
    const loadingMessage = document.getElementById('loading-message');
    const randomIndex = Math.floor(Math.random() * messages.length);
    loadingMessage.textContent = messages[randomIndex];
    loadingScreen.classList.add('active');
}

// Hide Loading Screen
function hideLoadingScreen() {
    const loadingScreen = document.getElementById('loading-screen');
    loadingScreen.classList.remove('active');
}

// Add loading screen HTML if not already present
if (!document.getElementById('loading-screen')) {
    document.body.insertAdjacentHTML('afterbegin', `
        <div id="loading-screen">
            <p id="loading-message"></p>
        </div>
    `);
}

// Show loading screen when the page starts to load
window.addEventListener('load', () => {
    showLoadingScreen();
    setTimeout(() => {
        hideLoadingScreen();
    }, 2000);  // Optional: Delay the hide for 2 seconds, you can adjust as needed
});
