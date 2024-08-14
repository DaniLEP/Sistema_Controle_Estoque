// scripts.js

document.addEventListener('DOMContentLoaded', function() {
    const productList = document.getElementById('product-list');
    const addProductBtn = document.getElementById('add-product-btn');
    const productInput = document.getElementById('product-input');
    const quantityInput = document.getElementById('quantity-input');

    // Adicionar evento de click para cada checkbox
    productList.addEventListener('change', function(e) {
        if (e.target.classList.contains('product-checkbox')) {
            const listItem = e.target.closest('li');
            listItem.classList.toggle('selected', e.target.checked);
        }
    });

    // Adicionar evento de click para o botão de remover
    productList.addEventListener('click', function(e) {
        if (e.target.classList.contains('remove-btn')) {
            const listItem = e.target.closest('li');
            listItem.remove();
        }
    });

    // Adicionar novo produto à lista
    addProductBtn.addEventListener('click', function() {
        const productName = productInput.value.trim();
        const productQuantity = quantityInput.value.trim();

        if (productName !== '' && productQuantity !== '' && !isNaN(productQuantity) && productQuantity > 0) {
            const li = document.createElement('li');

            const label = document.createElement('label');
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.className = 'product-checkbox';
            label.appendChild(checkbox);
            label.appendChild(document.createTextNode(` ${productName}`));

            const quantity = document.createElement('input');
            quantity.type = 'number';
            quantity.className = 'quantity-input';
            quantity.value = productQuantity;
            quantity.min = '1';

            const removeBtn = document.createElement('button');
            removeBtn.className = 'remove-btn';
            removeBtn.textContent = 'Remover';

            li.appendChild(label);
            li.appendChild(quantity);
            li.appendChild(removeBtn);

            productList.appendChild(li);
            productInput.value = '';
            quantityInput.value = '1';
        }
    });
});
