document.getElementById('consultaForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário

    // Obtém a data selecionada
    const dataConsulta = document.getElementById('dataConsulta').value;

    // Verifica se a data foi selecionada
    if (!dataConsulta) {
        alert('Por favor, selecione uma data.');
        return;
    }

    // Simula dados de retiradas (substitua com dados reais de uma API ou banco de dados)
    const dadosRetiradas = [
        { sku: 'SKU001', nome: 'Macarrão', fornecedor: 'LEVE', quantidade: 20, tipo: 'Proteína', quantidadeCadastrada: 30, quantidadeUtilizada: 10, valorGasto: 50, UnidadeMedida: 'kg', ValorUnitario: 1, data: '2024-07-15'},
        { sku: 'SKU002', nome: 'Feijão', fornecedor: 'CAMIL', quantidade: 15, tipo: 'Mantimento', quantidadeCadastrada: 20, quantidadeUtilizada: 5, valorGasto: 40, UnidadeMedida: 'kg', ValorUnitario: 1, data: '2024-01-14'},
        { sku: 'SKU003', nome: 'Arroz', fornecedor: 'CAMIL', quantidade: 25, tipo: 'Doações Recebidas', quantidadeCadastrada: 30, quantidadeUtilizada: 5, valorGasto: 60, UnidadeMedida: 'kg', ValorUnitario: 1, data: '2024-09-13'},
        { sku: 'SKU004', nome: 'Leite Condensado', fornecedor: 'Pirancanjuba', quantidade: 12, tipo: 'Mantimento', quantidadeCadastrada: 15, quantidadeUtilizada: 3, valorGasto: 30, UnidadeMedida: 'kg', ValorUnitario: 1, data: '2024-03-14'},
        { sku: 'SKU005', nome: 'Alface-Americano', fornecedor: 'CEAGESP', quantidade: 8, tipo: 'Hortaliça', quantidadeCadastrada: 15, quantidadeUtilizada: 3, valorGasto: 30, UnidadeMedida: 'kg', ValorUnitario: 1, data: '2024-02-14'}
        // Adicione mais dados conforme necessário
    ];

    // Filtra os dados com base na data selecionada
    const resultados = dadosRetiradas.filter(item => item.data === dataConsulta);

    // Obtém o corpo da tabela para preencher com os resultados
    const tbody = document.querySelector('#tabelaResultados tbody');
    tbody.innerHTML = ''; // Limpa resultados anteriores

    // Adiciona os resultados à tabela
    resultados.forEach(item => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${item.sku}</td>
            <td>${item.nome}</td>
            <td>${item.fornecedor}</td>
            <td>${item.quantidade}</td>
            <td>${item.tipo}</td>
            <td>${item.quantidadeCadastrada}</td>
            <td>${item.quantidadeUtilizada}</td>
            <td>${item.valorGasto}</td>
            <td>${item.UnidadeMedida}</td>
            <td>${item.ValorUnitario}</td>
            <td>${item.data}</td>
        `;
        tbody.appendChild(tr);
    });

    // Exibe uma mensagem se nenhum resultado for encontrado
    if (resultados.length === 0) {
        tbody.innerHTML = '<tr><td colspan="11" class="text-center">Nenhum dado encontrado para a data selecionada.</td></tr>';
    }
});

// Função para exportar os dados como PDF
document.getElementById('exportarPDF').addEventListener('click', function() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    doc.text('Relatório de Retiradas de Produtos', 10, 10);

    const tabela = document.querySelector('#tabelaResultados');
    const rows = [];
    tabela.querySelectorAll('tr').forEach(tr => {
        const cells = Array.from(tr.querySelectorAll('th, td')).map(td => td.textContent);
        rows.push(cells);
    });

    doc.autoTable({
        head: [rows[0]],
        body: rows.slice(1),
        startY: 20
    });

    doc.save('relatorio_retiradas.pdf');
});

// Função para exportar os dados como Excel
document.getElementById('exportarExcel').addEventListener('click', function() {
    const tabela = document.querySelector('#tabelaResultados');
    const wb = XLSX.utils.table_to_book(tabela, { sheet: 'Relatório' });

    XLSX.writeFile(wb, 'relatorio_retiradas.xlsx');
});
