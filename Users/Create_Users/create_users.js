
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('userModal');
    const openModalButton = document.getElementById('openModalButton');
    const closeButton = document.querySelector('.close-button');
    const createUserForm = document.getElementById('createUserForm');

    openModalButton.addEventListener('click', () => {
        modal.style.display = 'block';
    });

    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    createUserForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        const role = document.getElementById('role').value;
        
        if (password !== confirmPassword) {
            alert('As senhas não coincidem!');
            return;
        }

        // Aqui você pode adicionar o código para enviar os dados do formulário para o servidor

        alert(`Usuário ${username} criado com sucesso!`);
        
        // Resetar o formulário após a criação do usuário
        createUserForm.reset();
        modal.style.display = 'none';
    });
});
