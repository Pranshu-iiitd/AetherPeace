// Simulate loading user data
document.addEventListener('DOMContentLoaded', function() {
    // In a real app, you would fetch this from your backend
    const userData = {
      username: 'Anupriya',
      email: 'anupriya@gmail.com',
      name: 'Anupriya',
      age: 19,
      gender: 'Female',
      chatbotPersona: 'SDE',
      colorTheme: 'Dark'
    };
    
    // Populate profile page
    document.getElementById('profileUsername').textContent = userData.username;
    document.getElementById('profileName').textContent = userData.name;
    document.getElementById('profileEmail').textContent = userData.email;
    document.getElementById('profileAge').textContent = userData.age;
    document.getElementById('profileGender').textContent = userData.gender;
    document.getElementById('chatbotPersona').textContent = userData.chatbotPersona;
    document.getElementById('colorTheme').textContent = userData.colorTheme;
  });