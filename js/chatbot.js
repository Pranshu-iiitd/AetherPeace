// Password protection
document.getElementById('passwordForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const password = document.getElementById('chatPassword').value;
    
    if (password === '1465') {
      document.getElementById('passwordGate').style.display = 'none';
      document.getElementById('chatInterface').style.display = 'block';
      initializeChat();
    } else {
      alert('Incorrect password. Please try again.');
    }
  });
  
  // Chatbot functionality
  function initializeChat() {
    const chatMessages = document.getElementById('chatMessages');
    const messageForm = document.getElementById('messageForm');
    const messageInput = document.getElementById('messageInput');
    const chatList = document.getElementById('chatList');
    
    // Sample chat history
    const chats = [
      { id: 1, title: 'Feeling anxious today', date: '2023-05-15' },
      { id: 2, title: 'Sleep issues', date: '2023-05-10' },
      { id: 3, title: 'Work stress', date: '2023-05-05' }
    ];
    
    // Populate chat history
    chats.forEach(chat => {
      const chatItem = document.createElement('div');
      chatItem.className = 'chat-item';
      chatItem.innerHTML = `
        <strong>${chat.title}</strong>
        <small>${chat.date}</small>
      `;
      chatItem.addEventListener('click', () => loadChat(chat.id));
      chatList.appendChild(chatItem);
    });
    
    // Bot responses
    const botResponses = [
      "I'm here to listen. Can you tell me more about how you're feeling?",
      "That sounds challenging. Many people find it helpful to practice deep breathing when they feel this way.",
      "Your feelings are valid. Would you like to explore some coping strategies together?",
      "I understand this is difficult for you. Remember, it's okay to feel this way.",
      "Let's focus on one small step you can take right now to feel better.",
      "Would it help to talk about what's been going well recently?",
      "I hear you. Sometimes just expressing these thoughts can be relieving."
    ];
    
    // Handle new messages
    messageForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const message = messageInput.value.trim();
      if (!message) return;
      
      // Add user message
      addMessage(message, 'user');
      messageInput.value = '';
      
      // Simulate bot thinking
      setTimeout(() => {
        const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
        addMessage(randomResponse, 'bot');
      }, 1000);
    });
    
    // Add a new message to the chat
    function addMessage(text, sender) {
      const messageDiv = document.createElement('div');
      messageDiv.className = `message ${sender}-message`;
      messageDiv.textContent = text;
      chatMessages.appendChild(messageDiv);
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }
    
    // Load a chat from history (simulated)
    function loadChat(chatId) {
      chatMessages.innerHTML = '';
      addMessage(`Loading chat #${chatId}...`, 'bot');
      setTimeout(() => {
        chatMessages.innerHTML = '';
        addMessage("Hello! How can I help you today?", 'bot');
      }, 500);
    }
    
    // Start with welcome message
    addMessage("Hello! I'm Aether, your mental health support companion. How are you feeling today?", 'bot');
  }