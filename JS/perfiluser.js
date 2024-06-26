document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('profile-form');
    const inputs = form.querySelectorAll('input');
    const saveButton = form.querySelector('button[type="submit"]');

// Desativa entradas e botão salvar por padrão
    inputs.forEach(input => input.disabled = true);
    saveButton.disabled = true;

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm-password').value;

        if (password !== confirmPassword) {
            alert('As senhas não coincidem!');
        } else {
            alert('Dados salvos com sucesso!');
            // Aqui você pode adicionar o código para salvar os dados no servidor
        }
    });
});

function enableEditing() {
    const form = document.getElementById('profile-form');
    const inputs = form.querySelectorAll('input');
    const saveButton = form.querySelector('button[type="submit"]');

    inputs.forEach(input => input.disabled = false);
    saveButton.disabled = false;
}
