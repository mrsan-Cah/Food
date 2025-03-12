// Example script to handle form submission and basic validation

document.getElementById('signupForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (username && email && password) {
        // Simulate a successful signup process
        alert("Account Created Successfully!");
        
        // Redirect to login page after successful signup
        window.location.href = 'login.html';  // This will redirect to the login page
    } else {
        alert("Please fill out all fields.");
    }
});

document.getElementById('loginForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    if (email && password) {
        // Simulate a successful login process
        alert("Login Successful!");
        
        // Redirect to home page (index.html) after successful login
        window.location.href = 'index.html';  // This will redirect to the index page
    } else {
        alert("Please fill out all fields.");
    }
});
