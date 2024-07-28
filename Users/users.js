// scripts.js

const users = [
    { id: 1, username: 'Danilo Santos', status: 'Ativo' },
    { id: 2, username: 'Cleyson', status: 'Inativo' },
    { id: 3, username: 'Dyana', status: 'Ativo' },
    { id: 4, username: 'Leonardo', status: 'Inativo' },
    { id: 5, username: 'Beatriz', status: 'Ativo' },
];

function updateDashboard() {
    const totalUsers = users.length;
    const activeUsers = users.filter(user => user.status === 'active').length;
    const inactiveUsers = totalUsers - activeUsers;

    document.getElementById('totalUsers').innerText = totalUsers;
    document.getElementById('activeUsers').innerText = activeUsers;
    document.getElementById('inactiveUsers').innerText = inactiveUsers;

    const userTableBody = document.getElementById('userTableBody');
    userTableBody.innerHTML = '';

    users.forEach(user => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${user.id}</td>
            <td>${user.username}</td>
            <td>${user.status}</td>
        `;
        userTableBody.appendChild(row);
    });
}

document.addEventListener('DOMContentLoaded', updateDashboard);



// script para criar users

// scripts.js
