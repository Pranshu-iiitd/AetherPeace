// Handle login form submission
document.getElementById('loginForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // In a real app, you would send this to your backend
    console.log('Login attempt with:', email, password);
    
    // For demo purposes, redirect to profile page
    window.location.href = 'profile.html';
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
    
    // In a real app, you would send this to your backend
    console.log('Signup attempt with:', username, email, password);
    
    // For demo purposes, redirect to profile page
    window.location.href = 'profile.html';
  });