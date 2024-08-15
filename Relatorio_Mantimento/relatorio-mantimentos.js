// document.addEventListener('DOMContentLoaded', function() {
//     const dashboard = document.getElementById('dashboard');
//     const ctxProdutos = document.getElementById('chartProdutos').getContext('2d');
//     const downloadPDFButton = document.getElementById('downloadPDF');
//     const downloadExcelButton = document.getElementById('downloadExcel');
  
//     // Dados dos produtos (exemplo)
//     const produtos = [
//         { SKU: '001', Mantimento: 'Arroz', Fornecedor: 'Fornecedor 1', QuantKG: 50, UnidadeMedida: 'kg', ValorUnitario: 1, ValorTotal: 50, DataCadastro: '2024-01-01', DataVencimento: '2024-06-01' },
//         { SKU: '002', Mantimento: 'Feijão', Fornecedor: 'Fornecedor 2', QuantKG: 30, UnidadeMedida: 'kg', ValorUnitario: 1, ValorTotal: 30, DataCadastro: '2024-01-10', DataVencimento: '2024-07-10' },
//         { SKU: '003', Mantimento: 'Macarrão', Fornecedor: 'Fornecedor 3', QuantKG: 20, UnidadeMedida: 'kg', ValorUnitario: 0.5, ValorTotal: 10, DataCadastro: '2024-02-01', DataVencimento: '2024-08-01' },
//         { SKU: '004', Mantimento: 'Farinha', Fornecedor: 'Fornecedor 4', QuantKG: 25, UnidadeMedida: 'kg', ValorUnitario: 1, ValorTotal: 25, DataCadastro: '2024-03-01', DataVencimento: '2024-09-01' }
//     ];
  
//     // Função para calcular diferença em dias entre duas datas
//     function calcularDiferencaDias(data1, data2) {
//         const diff = Math.abs(new Date(data2) - new Date(data1));
//         return Math.ceil(diff / (1000 * 60 * 60 * 24));
//     }
  
//     // Função para formatar a data no formato dd/mm/yyyy
//     function formatarData(data) {
//         const date = new Date(data);
//         const day = date.getDate().toString().padStart(2, '0');
//         const month = (date.getMonth() + 1).toString().padStart(2, '0');
//         const year = date.getFullYear();
//         return `${day}/${month}/${year}`;
//     }
  
//     // Gerar dados para o gráfico de produtos (bar chart)
//     const labelsProdutos = produtos.map(produto => produto.Mantimento);
//     const dataQuantKG = produtos.map(produto => produto.QuantKG);
//     const dataPesoTotal = produtos.map(produto => produto.ValorTotal);
  
//     new Chart(ctxProdutos, {
//         type: 'bar',
//         data: {
//             labels: labelsProdutos,
//             datasets: [
//                 {
//                     label: 'Quantidade (kg)',
//                     data: dataQuantKG,
//                     backgroundColor: '#007bff'
//                 },
//                 {
//                     label: 'Valor Total (kg)',
//                     data: dataPesoTotal,
//                     backgroundColor: '#28a745'
//                 }
//             ]
//         },
//         options: {
//             scales: {
//                 y: {
//                     beginAtZero: true
//                 }
//             }
//         }
//     });
  
//     // Renderizar os produtos no dashboard
//     produtos.forEach(produto => {
//         const productDiv = document.createElement('div');
//         productDiv.classList.add('product');
//         const produtoInfo = `
//             <div class="product-info">
//                 <div><strong>SKU:</strong> ${produto.SKU}</div>
//                 <div><strong>Mantimento:</strong> ${produto.Mantimento}</div>
//                 <div><strong>Fornecedor:</strong> ${produto.Fornecedor}</div>
//                 <div><strong>Quantidade (kg):</strong> ${produto.QuantKG}</div>
//                 <div><strong>Unidade de Medida:</strong> ${produto.UnidadeMedida}</div>
//                 <div><strong>Valor Unitário (kg):</strong> ${produto.ValorUnitario}</div>
//                 <div><strong>Valor Total (kg):</strong> ${produto.ValorTotal}</div>
//                 <div><strong>Data de Cadastro:</strong> ${formatarData(produto.DataCadastro)}</div>
//                 <div><strong>Data de Vencimento:</strong> ${formatarData(produto.DataVencimento)}</div>
//                 <div><strong>Consumir em até:</strong> ${calcularDiferencaDias(produto.DataCadastro, produto.DataVencimento)} dias</div>
//             </div>
//         `;
  
//         productDiv.innerHTML = produtoInfo;
//         dashboard.appendChild(productDiv);
//     });
  
//     // Função para baixar o relatório em PDF
//     downloadPDFButton.addEventListener('click', function() {
//         const { jsPDF } = window.jspdf;
//         const doc = new jsPDF();
//         doc.text('Relatório de Mantimento', 10, 10);
//         produtos.forEach((produto, index) => {
//             doc.text(`\nMantimento ${index + 1}`, 10, 20 + (index * 10));
//             doc.text(`SKU: ${produto.SKU}`, 10, 30 + (index * 10));
//             doc.text(`Mantimento: ${produto.Mantimento}`, 10, 40 + (index * 10));
//             doc.text(`Fornecedor: ${produto.Fornecedor}`, 10, 50 + (index * 10));
//             doc.text(`Quantidade (kg): ${produto.QuantKG}`, 10, 60 + (index * 10));
//             doc.text(`Unidade de Medida: ${produto.UnidadeMedida}`, 10, 70 + (index * 10));
//             doc.text(`Peso Unitário (kg): ${produto.ValorUnitario}`, 10, 80 + (index * 10));
//             doc.text(`Peso Total (kg): ${produto.ValorTotal}`, 10, 90 + (index * 10));
//             doc.text(`Data de Cadastro: ${formatarData(produto.DataCadastro)}`, 10, 100 + (index * 10));
//             doc.text(`Data de Vencimento: ${formatarData(produto.DataVencimento)}`, 10, 110 + (index * 10));
//             doc.text(`Consumir em até: ${calcularDiferencaDias(produto.DataCadastro, produto.DataVencimento)} dias`, 10, 120 + (index * 10));
//         });
//         doc.save('relatorio-mantimento.pdf');
//     });
  
//     // Função para baixar o relatório em Excel
//     downloadExcelButton.addEventListener('click', function() {
//         const wb = XLSX.utils.book_new();
//         const wsData = [
//             ["SKU", "Mantimento", "Fornecedor", "Quantidade (kg)", "Unidade de Medida", "Valor Unitário (kg)", "Valor Total (kg)", "Data de Cadastro", "Data de Vencimento", "Consumir em até", "Retirada em"]
//         ];
//         produtos.forEach(produto => {
//             wsData.push([
//                 produto.SKU,
//                 produto.Mantimento,
//                 produto.Fornecedor,
//                 produto.QuantKG,
//                 produto.UnidadeMedida,
//                 produto.ValorUnitario,
//                 produto.ValorTotal,
//                 formatarData(produto.DataCadastro),
//                 formatarData(produto.DataVencimento),
//                 calcularDiferencaDias(produto.DataCadastro, produto.DataVencimento) + " dias"
//             ]);
//         });
//         const ws = XLSX.utils.aoa_to_sheet(wsData);
//         XLSX.utils.book_append_sheet(wb, ws, "Mantimento");
//         XLSX.writeFile(wb, 'relatorio-mantimento.xlsx');
//     });
// });

document.getElementById('consultaForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const dataConsulta = document.getElementById('dataConsulta').value;

    if (!dataConsulta) {
        alert('Por favor, selecione uma data.');
        return;
    }

    const dadosProdutos = [
        { sku: 'SKU001', nome: 'Macarrão', fornecedor: 'Leve', quantidade: 20, unidade: 'kilos', valorTotal: 500.99, valorUnitario: 12.50, dataCadastro: '2024-07-01', dataVencimento: '2024-08-2'},
        { sku: 'SKU002', nome: 'Feijão', fornecedor: 'Camil', quantidade: 15, unidade: 'kilos', valorTotal: 40.50, valorUnitario: 42.67, dataCadastro: '2024-06-15', dataVencimento: '2024-07-15'},
        { sku: 'SKU003', nome: 'Arroz', fornecedor: 'Camil', quantidade: 25, unidade: 'kilos', valorTotal: 60.40, valorUnitario: 62.4, dataCadastro: '2024-05-20', dataVencimento: '2024-07-20'},
        { sku: 'SKU004', nome: 'Molho de Tomate', fornecedor: 'Tarantella', quantidade: 150, unidade: 'gramas', valorTotal: 550, valorUnitario: 82.5, dataCadastro: '2024-07-01', dataVencimento: '2024-07-15'},
        { sku: 'SKU005', nome: 'Leite Condesado', fornecedor: 'Pirancanjuba', quantidade: 150, unidade: 'gramas', valorTotal: 4.000, valorUnitario: 112.67, dataCadastro: '2024-06-15', dataVencimento: '2024-07-15'},
        { sku: 'SKU006', nome: 'Toddy', fornecedor: 'CAMIL', quantidade: 250, unidade: 'gramas', valorTotal: 600.00, valorUnitario: 22.4, dataCadastro: '2024-05-20', dataVencimento: '2024-07-12'}
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
    XLSX.writeFile(wb, 'relatorio-mantintos.xlsx');
});

