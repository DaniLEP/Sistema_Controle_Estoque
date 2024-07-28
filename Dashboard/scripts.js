// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    // Logout Functionality
    document.getElementById('logoutLink').addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = 'login.html'; // Redirecionar para a página de login
    });

    // Gráfico de Usuários
    const userCtx = document.getElementById('userChart').getContext('2d');
    const userChart = new Chart(userCtx, {
        type: 'doughnut',
        data: {
            labels: ['Active Users', 'Inactive Users'],
            datasets: [{
                data: [120, 30],
                backgroundColor: ['#4CAF50', '#f44336'],
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'User Distribution'
                }
            }
        }
    });

    // Gráfico de Atividades
    const activityCtx = document.getElementById('activityChart').getContext('2d');
    const activityChart = new Chart(activityCtx, {
        type: 'line',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [{
                label: 'Activity',
                data: [65, 59, 80, 81, 56, 55, 40],
                fill: false,
                borderColor: '#4CAF50',
                tension: 0.1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Monthly Activity'
                }
            }
        }
    });
});
