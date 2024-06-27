document.getElementById('loginForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;


    if (username === 'Danilo' && password === '123') {
        alert('Login successful!');
        window.location = "./home.html"
 
    } else {    
        document.getElementById('error-msg').textContent = 'E-mail ou Senha inválidos';
    }
});
