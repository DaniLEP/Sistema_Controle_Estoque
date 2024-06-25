const formCadastro = document.getElementById('formCadastro');
const valorUnitarioInput = document.getElementById('valorUnitario');
const quantidadeInput = document.getElementById('quantidade');
const valorTotalInput = document.getElementById('valorTotal');

// Adicionando evento de submit para o formulário
formCadastro.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário
    calcularValorTotal();
    // Aqui você pode adicionar lógica para salvar os dados
    alert('Dados salvos com sucesso!');
    limparForm();
});

// Função para calcular o valor total
function calcularValorTotal() {
    const valorUnitario = parseFloat(valorUnitarioInput.value);
    const quantidade = parseFloat(quantidadeInput.value);
    const valorTotal = valorUnitario * quantidade;
    valorTotalInput.value = valorTotal.toFixed(2); // Formata o valor para 2 casas decimais
}

// Função para limpar o formulário
function limparForm() {
    formCadastro.reset();
    valorTotalInput.value = ''; // Limpa o campo de valor total
}

// Função para voltar (simulação, redireciona para a página anterior)
function voltar() {
    window.history.back();
}