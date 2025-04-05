// Load profile data
document.addEventListener('DOMContentLoaded', function() {
  const currentUser = JSON.parse(localStorage.getItem('current_user'));
  
  if (!currentUser) {
    window.location.href = 'login.html';
    return;
  }
  
  // Populate profile page
  document.getElementById('profileUsername').textContent = currentUser.username;
  document.getElementById('profileName').textContent = currentUser.name || 'Not set';
  document.getElementById('profileEmail').textContent = currentUser.email;
  document.getElementById('profileAge').textContent = currentUser.age || 'Not set';
  document.getElementById('profileGender').textContent = currentUser.gender || 'Not set';
  document.getElementById('chatbotPersona').textContent = currentUser.chatbotPersona || 'Therapist';
  document.getElementById('colorTheme').textContent = currentUser.colorTheme || 'Dark';
  
  // Edit profile functionality
  document.querySelector('.btn-edit-profile').addEventListener('click', function() {
    const newName = prompt('Enter your name:', currentUser.name);
    const newAge = prompt('Enter your age:', currentUser.age);
    const newGender = prompt('Enter your gender:', currentUser.gender);
    
    if (newName !== null) {
      // Update current user
      currentUser.name = newName;
      currentUser.age = newAge;
      currentUser.gender = newGender;
      
      // Update in localStorage
      localStorage.setItem('current_user', JSON.stringify(currentUser));
      
      // Update in all users database
      const allUsers = JSON.parse(localStorage.getItem('aetherpeace_users')) || [];
      const userIndex = allUsers.findIndex(u => u.id === currentUser.id);
      if (userIndex !== -1) {
        allUsers[userIndex] = currentUser;
        localStorage.setItem('aetherpeace_users', JSON.stringify(allUsers));
      }
      
      // Refresh profile
      location.reload();
    }
  });
});
