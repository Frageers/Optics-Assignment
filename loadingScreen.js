// Global loading messages
const messages = [
    "We see you squinting, Let us help with that!",
    "This loaded 5 seconds ago, make sure you're not lagging",
    "Finding misplaced code",
    "Eye'm working on it, Hold tight!",
    "Reminder to give your eyes breaks every 10-15 minutes!"
];

// Show Loading Screen with 35% chance
function showLoadingScreen() {
    const randomChance = Math.random();
    if (randomChance < 0.35) {  // 35% chance (0 to 0.35)
        const loadingScreen = document.getElementById('loading-screen');
        const loadingMessage = document.getElementById('loading-message');
        const randomIndex = Math.floor(Math.random() * messages.length);
        loadingMessage.textContent = messages[randomIndex];
        loadingScreen.classList.add('active');
    }
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
    showLoadingScreen();  // Will show 35% of the time
    setTimeout(() => {
        hideLoadingScreen();
    }, 3000);  // Hide after 3 seconds
});

// Trigger loading screen when navigating back to index
const learnMoreLinks = document.querySelectorAll('a[href="index.html"]');
learnMoreLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent the default navigation
        showLoadingScreen();  // Will show 35% of the time
        setTimeout(() => {
            window.location.href = e.target.href; // Navigate after loading screen is shown
        }, 3000);  // Wait 3 seconds before navigating
    });
});
