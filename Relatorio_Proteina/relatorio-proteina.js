document.getElementById('consultaForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const dataConsulta = document.getElementById('dataConsulta').value;

    if (!dataConsulta) {
        alert('Por favor, selecione uma data.');
        return;
    }

    const dadosProdutos = [
        { sku: 'SKU001', nome: 'Coxão-Mole', fornecedor: 'JBS', quantidade: 20, unidade: 'kilo', valorTotal: 500.99, valorUnitario: 12.50, dataCadastro: '2024-07-01', dataVencimento: '2024-08-2'},
        { sku: 'SKU002', nome: 'Carne Moída', fornecedor: 'Friboi', quantidade: 15, unidade: 'kilo', valorTotal: 40.50, valorUnitario: 42.67, dataCadastro: '2024-06-15', dataVencimento: '2024-07-15'},
        { sku: 'SKU003', nome: 'Coxa de Frango', fornecedor: 'SEARA', quantidade: 25, unidade: 'kilo', valorTotal: 60.40, valorUnitario: 62.4, dataCadastro: '2024-05-20', dataVencimento: '2024-07-20'},
        { sku: 'SKU004', nome: 'Tulipa', fornecedor: 'SEARA', quantidade: 150, unidade: 'gramas', valorTotal: 550, valorUnitario: 82.5, dataCadastro: '2024-07-01', dataVencimento: '2024-07-15'},
        { sku: 'SKU005', nome: 'Peito de Frango', fornecedor: 'Friboi', quantidade: 150, unidade: 'kilo', valorTotal: 4.000, valorUnitario: 112.67, dataCadastro: '2024-06-15', dataVencimento: '2024-07-15'},
        { sku: 'SKU006', nome: 'Carde-Largato', fornecedor: 'JBS', quantidade: 250, unidade: 'gramas', valorTotal: 600.00, valorUnitario: 22.4, dataCadastro: '2024-05-20', dataVencimento: '2024-07-12'}
        // Adicione mais produtos conforme necessário
    ];

    const resultados = dadosProdutos.filter(item => item.dataCadastro <= dataConsulta && item.dataVencimento >= dataConsulta);

    const tbody = document.querySelector('#tabelaResultados tbody');
    tbody.innerHTML = '';

    resultados.forEach(item => {
        const tempoConsumo = calcularTempoConsumo(item.dataCadastro, item.dataVencimento);
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${item.sku}</td>
            <td>${item.nome}</td>
            <td>${item.fornecedor}</td>
            <td>${item.quantidade}</td>
            <td>${item.unidade}</td>
            <td>${item.valorTotal}</td>
            <td>${item.valorUnitario}</td>
            <td>${item.dataCadastro}</td>
            <td>${item.dataVencimento}</td>
            <td>${tempoConsumo}</td>
        `;
        tbody.appendChild(tr);
    });

    if (resultados.length === 0) {
        tbody.innerHTML = '<tr><td colspan="10" class="text-center">Nenhum dado encontrado para a data selecionada.</td></tr>';
    } else {
        gerarGrafico(resultados);
    }
});

function calcularTempoConsumo(dataCadastro, dataVencimento) {
    const data1 = new Date(dataCadastro);
    const data2 = new Date(dataVencimento);
    const diferenca = Math.abs(data2 - data1);
    return Math.ceil(diferenca / (1000 * 60 * 60 * 24));
}

function gerarGrafico(dados) {
    const ctx = document.getElementById('chartProdutos').getContext('2d');
    const nomesProdutos = dados.map(item => item.nome);
    const quantidades = dados.map(item => item.quantidade);

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: nomesProdutos,
            datasets: [{
                label: 'Quantidade de Produtos',
                data: quantidades,
                backgroundColor: '#F20DE7',
                borderColor: 'rgba(0, 123, 255, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

document.getElementById('downloadExcel').addEventListener('click', function() {
    const tabela = document.getElementById('tabelaResultados');
    const wb = XLSX.utils.table_to_book(tabela, { sheet: "Relatório" });
    XLSX.writeFile(wb, 'relatorio-proteina.xlsx');
});
