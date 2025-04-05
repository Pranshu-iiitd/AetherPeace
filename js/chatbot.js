async function getBotResponse(userMessage) {
    const apiKey = 'YOUR_OPENAI_API_KEY';  // Do NOT expose this in production
    const url = 'https://api.openai.com/v1/chat/completions';

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: userMessage }]
        })
    });

    const data = await response.json();
    return data.choices[0].message.content;
}

// Modify the message submission event
messageForm.addEventListener('submit', async function(e) {
    e.preventDefault();
    const message = messageInput.value.trim();
    if (!message) return;

    addMessage(message, 'user');
    messageInput.value = '';

    // Show loading message
    addMessage("Thinking...", "bot");

    try {
        const botReply = await getBotResponse(message);
        chatMessages.lastChild.remove(); // Remove "Thinking..." message
        addMessage(botReply, 'bot');
    } catch (error) {
        chatMessages.lastChild.remove();
        addMessage("Error getting response. Try again later.", 'bot');
    }
});
