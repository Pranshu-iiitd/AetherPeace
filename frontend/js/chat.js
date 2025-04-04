// Chat functionality

document.addEventListener('DOMContentLoaded', function() {
    const chatMessages = document.querySelector('.chat-messages');
    const chatInput = document.querySelector('.chat-input textarea');
    const sendButton = document.querySelector('.btn-send');
    const newChatButton = document.querySelector('.btn-new-chat');
    
    // Sample AI responses
    const aiResponses = [
        "I understand how you're feeling. Would you like to talk more about what's bothering you?",
        "That sounds challenging. Have you tried any relaxation techniques to help with this?",
        "Many people experience similar feelings. You're not alone in this.",
        "Let's focus on your breathing for a moment. Inhale deeply for 4 seconds, hold for 7, exhale for 8.",
        "Would it help to explore some positive affirmations right now?",
        "I notice this topic comes up often for you. Would you like to explore it deeper?",
        "Remember to be kind to yourself. What's one small thing you can do today for self-care?"
    ];
    
    // Send message function
    function sendMessage() {
        const messageText = chatInput.value.trim();
        if (!messageText) return;
        
        // Add user message
        addMessage(messageText, 'user');
        
        // Clear input
        chatInput.value = '';
        chatInput.style.height = 'auto';
        
        // Simulate AI typing
        setTimeout(() => {
            const randomResponse = aiResponses[Math.floor(Math.random() * aiResponses.length)];
            addMessage(randomResponse, 'ai');
        }, 1000 + Math.random() * 2000);
    }
    
    // Add message to chat
    function addMessage(text, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}-message`;
        
        if (sender === 'ai') {
            messageDiv.innerHTML = `
                <div class="message-avatar">AP</div>
                <div class="message-content">
                    <p>${text}</p>
                </div>
            `;
        } else {
            messageDiv.innerHTML = `
                <div class="message-content">
                    <p>${text}</p>
                </div>
            `;
        }
        
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
    
    // Event listeners
    if (sendButton && chatInput) {
        sendButton.addEventListener('click', sendMessage);
        
        chatInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                sendMessage();
            }
        });
    }
    
    if (newChatButton) {
        newChatButton.addEventListener('click', function() {
            // In a real app, this would start a new chat session
            addMessage("Hello! I'm AetherPeace, your mental wellness companion. How are you feeling today?", 'ai');
        });
    }
    
    // Tool functions
    window.startMeditation = function() {
        alert("Starting a 5-minute guided meditation session...");
        // In a real app, this would open a meditation player
    };
    
    window.playCalmingSounds = function() {
        alert("Playing calming nature sounds...");
        // In a real app, this would start sound playback
    };
    
    window.showBreathingExercise = function() {
        alert("Starting 4-7-8 breathing exercise...");
        // In a real app, this would show a breathing animation
    };
    
    // Initialize with welcome message if chat is empty
    if (chatMessages && chatMessages.children.length === 0) {
        setTimeout(() => {
            addMessage("Hello! I'm AetherPeace, your mental wellness companion. How are you feeling today?", 'ai');
        }, 500);
    }
});