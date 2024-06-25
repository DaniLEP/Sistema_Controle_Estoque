document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;

    // Basic validation: check if passwords match
    if (password !== confirmPassword) {
        document.getElementById('error-msg').textContent = 'Passwords do not match';
        return;
    }

    // You can add additional validation and server-side logic here

    // For simplicity, let's just alert the user with the registered data
    alert('Registration successful!\nName: ' + name + '\nEmail: ' + email);

    // Clear the form after successful registration (optional)
    document.getElementById('registerForm').reset();
});
