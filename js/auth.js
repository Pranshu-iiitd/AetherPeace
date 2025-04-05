// Store all users data
let allUsers = JSON.parse(localStorage.getItem('aetherpeace_users')) || [];

// Handle login form submission
document.getElementById('loginForm')?.addEventListener('submit', function(e) {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  
  // Find user in database
  const user = allUsers.find(u => u.email === email && u.password === password);
  
  if (user) {
    // Store current user in session
    localStorage.setItem('current_user', JSON.stringify(user));
    window.location.href = 'profile.html';
  } else {
    alert('Invalid email or password');
  }
});

// Handle signup form submission
document.getElementById('signupForm')?.addEventListener('submit', function(e) {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;
  
  if (password !== confirmPassword) {
    alert('Passwords do not match!');
    return;
  }
  
  // Check if user already exists
  if (allUsers.some(u => u.email === email)) {
    alert('User with this email already exists');
    return;
  }
  
  // Create new user object
  const newUser = {
    id: Date.now().toString(),
    username,
    email,
    password, // Note: In production, you should NEVER store plain passwords
    name: username,
    age: '',
    gender: '',
    chatbotPersona: 'Therapist',
    colorTheme: 'Dark',
    createdAt: new Date().toISOString()
  };
  
  // Add to users database
  allUsers.push(newUser);
  localStorage.setItem('aetherpeace_users', JSON.stringify(allUsers));
  
  // Set as current user and redirect
  localStorage.setItem('current_user', JSON.stringify(newUser));
  window.location.href = 'profile.html';
});

// Logout functionality
document.getElementById('logout')?.addEventListener('click', function() {
  localStorage.removeItem('current_user');
  window.location.href = 'index.html';
});
