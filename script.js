// DOM Elements
const messagesDiv = document.getElementById('chat-messages');
const chatInputDiv = document.getElementById('chat-input');
const chatWidget = document.getElementById('chat-widget');
const chatContent = document.getElementById('chat-content');
const minimizeBtn = document.getElementById('minimize-btn');

// Bot Responses
const botResponses = {
    start: "Hello! I can help you with information about different eye diseases. Please select a disease you want to know more about.",
    glaucoma: "Glaucoma is a group of eye diseases that damage the optic nerve, often caused by abnormally high pressure in the eye.<a href='glaucoma.html' style='float:right'><strong>Learn More</strong></a>",
    cataracts: "Cataracts occur when the lens of the eye becomes cloudy. This condition causes blurry vision and is often seen in older adults.<a href='cataracts.html' style='float:right'><strong>Learn More</strong></a>",
    astigmatism: "Abnormal shaping of the cornea causing blurry vision and or headaches.<a href='astigmatism.html' style='float:right'><strong>Learn More</strong></a>",
    retinal_detachment: "Detachment of the retina from the eye causing light not reaching the optical nerve.<a href='retinalDetachment.html' style='float:right'><strong>Learn More</strong></a>",
    macular_degeneration: "Degeneration of the macula in the retina which is responsible for central vision. <a href='macularDegeneraton.html' style='float:right'><strong>Learn More</strong></a>",
    colour_blindness: "Different way of seeing colors <a href='colorBlindness.html' style='float:right'><strong>Learn More</strong></a>",
    diabetic_retinopathy: "Blood vessels that nourish the retina get cut off because of the increased sugar in blood causing you to lose vision <a href='diabeticRetinopathy.html' style='float:right'><strong>Learn More</strong></a>",
    strabismus: "Loss of control of the mucles of the eye causing an alignment issue<a href='strabismus.html' style='float:right'><strong>Learn More</strong></a>"
};

// Toggle Chat Widget
function toggleChat(event) {
    if (event.target === minimizeBtn) return;  // Prevent toggle when clicking minimize button itself
    
    chatWidget.classList.toggle('open');
    if (chatWidget.classList.contains('open')) {
        chatContent.style.display = 'flex';  // Use flex to align items
        clearMessages();
        startChat();
        minimizeBtn.innerHTML = '&#9650;'; // Change icon to "up"
    } else {
        chatContent.style.display = 'none';
        minimizeBtn.innerHTML = '&#9660;'; // Change icon to "down"
    }
}

// Minimize Chat Widget
function minimizeChat(event) {
    event.stopPropagation();
    chatWidget.classList.remove('open');
    chatContent.style.display = 'none';
    minimizeBtn.innerHTML = '&#9660;';
}

// Clear Messages
function clearMessages() {
    messagesDiv.innerHTML = '';
}

// Start Chat with Greeting
function startChat() {
    addMessage("Hi, I'm here to help! Click below to get started.", 'bot');
    showButtons(['Glaucoma', 'Cataracts', 'Astigmatism', 'Retinal Detachment', 'Macular degeneration', 'Colour Blindness', 'Diabetic Retinopathy', 'Strabismus']);
}

// Show Options as Buttons
function showButtons(options) {
    const buttonsDiv = document.createElement('div');
    buttonsDiv.className = 'buttons';
    options.forEach(option => {
        const button = document.createElement('button');
        button.className = 'button';
        button.textContent = option;
        button.onclick = () => handleButtonClick(option.toLowerCase().replace(/\s+/g, '_'));
        buttonsDiv.appendChild(button);
    });

    chatInputDiv.innerHTML = '';
    chatInputDiv.appendChild(buttonsDiv);
}

// Handle Button Click (User Interaction)
function handleButtonClick(option) {
    const userMessage = option.charAt(0).toUpperCase() + option.slice(1);
    addMessage(userMessage, 'user');
    showBotResponse(option);
}

// Show Bot Response
function showBotResponse(option) {
    const response = botResponses[option] || "I'm sorry, I don't have information on that topic.";
    addMessage(response, 'bot');
    showButtons(['Glaucoma', 'Cataracts', 'Astigmatism', 'Retinal Detachment', 'Macular degeneration', 'Colour Blindness', 'Diabetic Retinopathy', 'Strabismus']);
}

// Add Message to the Chat
function addMessage(text, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}`;
    messageDiv.innerHTML = text;

    // Limit the number of messages displayed
    if (messagesDiv.children.length >= 10) {
        messagesDiv.removeChild(messagesDiv.firstChild);
    }

    messagesDiv.appendChild(messageDiv);
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

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

