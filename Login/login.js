document.getElementById('loginForm').addEventListener('submit', async function(event) {
        event.preventDefault();
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;


        if (username === 'Admin' && password === 'Reciclar') {
            window.location = "../adm.html"; 
    
        } 
        else if(username === 'Danilo' && password === 'Reciclar'){
            window.location = "../Home/home.html"; 

        }

        else if(username === 'Daiane' && password === 'Reciclar'){
            window.location = "#"; 

        }
        else {    
            document.getElementById('error-msg').textContent = 'Login ou Senha inválidos';
        }
    }
);
