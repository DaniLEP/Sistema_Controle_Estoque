document.addEventListener('DOMContentLoaded', () => {
    populateUserPermissionsTable();

    document.getElementById('changePasswordForm').addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Password changed successfully!');
    });

    document.getElementById('generalSettingsForm').addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Settings saved successfully!');
    });

    document.getElementById('userPermissionsTable').addEventListener('click', function(event) {
        if (event.target.classList.contains('edit')) {
            alert('Edit user clicked');
        } else if (event.target.classList.contains('delete')) {
            alert('Delete user clicked');
        }
    });

    document.getElementById('logoutLink').addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = './login/login.html'; // Redirecionar para a página de login
    });
});
