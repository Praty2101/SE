document.getElementById('login-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  // Check username and password combinations
  if (username === 'admin' && password === '1234') {
      window.location.href = 'main.html'; // Redirect to main.html for admin
  } else if (username === 'user' && password === '1234') {
      window.location.href = 'user.html'; // Redirect to user.html for regular users
  } else {
      document.getElementById('error-message').textContent = 'Invalid username or password';
  }
});
