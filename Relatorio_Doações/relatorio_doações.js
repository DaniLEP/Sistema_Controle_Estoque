// document.addEventListener('DOMContentLoaded', function() {
//     const dashboard = document.getElementById('dashboard');
//     const ctxProdutos = document.getElementById('chartProdutos').getContext('2d');
//     const downloadPDFButton = document.getElementById('downloadPDF');
//     const downloadExcelButton = document.getElementById('downloadExcel');
  
//     // Dados dos produtos (exemplo)
//     const produtos = [
//         { SKU: '001', Produto: 'Arroz', Fornecedor: 'Fornecedor 1', QuantKG: 50, UnidadeMedida: 'kg', PesoUnitario: 1, PesoTotal: 50, DataCadastro: '2024-01-01', DataVencimento: '2024-06-01' },
//         { SKU: '002', Produto: 'Feijão', Fornecedor: 'Fornecedor 2', QuantKG: 30, UnidadeMedida: 'kg', PesoUnitario: 1, PesoTotal: 30, DataCadastro: '2024-01-10', DataVencimento: '2024-07-10' },
//         { SKU: '003', Produto: 'Macarrão', Fornecedor: 'Fornecedor 3', QuantKG: 20, UnidadeMedida: 'kg', PesoUnitario: 0.5, PesoTotal: 10, DataCadastro: '2024-02-01', DataVencimento: '2024-08-01' },
//         { SKU: '004', Produto: 'Farinha', Fornecedor: 'Fornecedor 4', QuantKG: 25, UnidadeMedida: 'kg', PesoUnitario: 1, PesoTotal: 25, DataCadastro: '2024-03-01', DataVencimento: '2024-09-01' }
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
//     const labelsProdutos = produtos.map(produto => produto.Produto);
//     const dataQuantKG = produtos.map(produto => produto.QuantKG);
//     const dataPesoTotal = produtos.map(produto => produto.PesoTotal);
  
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
//                     label: 'Peso Total (kg)',
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
//                 <div><strong>Produto:</strong> ${produto.Produto}</div>
//                 <div><strong>Fornecedor:</strong> ${produto.Fornecedor}</div>
//                 <div><strong>Quantidade (kg):</strong> ${produto.QuantKG}</div>
//                 <div><strong>Unidade de Medida:</strong> ${produto.UnidadeMedida}</div>
//                 <div><strong>Peso Unitário (kg):</strong> ${produto.PesoUnitario}</div>
//                 <div><strong>Peso Total (kg):</strong> ${produto.PesoTotal}</div>
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
//         doc.text('Relatório de Produtos', 10, 10);
//         produtos.forEach((produto, index) => {
//             doc.text(`\nProduto ${index + 1}`, 10, 20 + (index * 10));
//             doc.text(`SKU: ${produto.SKU}`, 10, 30 + (index * 10));
//             doc.text(`Produto: ${produto.Produto}`, 10, 40 + (index * 10));
//             doc.text(`Fornecedor: ${produto.Fornecedor}`, 10, 50 + (index * 10));
//             doc.text(`Quantidade (kg): ${produto.QuantKG}`, 10, 60 + (index * 10));
//             doc.text(`Unidade de Medida: ${produto.UnidadeMedida}`, 10, 70 + (index * 10));
//             doc.text(`Peso Unitário (kg): ${produto.PesoUnitario}`, 10, 80 + (index * 10));
//             doc.text(`Peso Total (kg): ${produto.PesoTotal}`, 10, 90 + (index * 10));
//             doc.text(`Data de Cadastro: ${formatarData(produto.DataCadastro)}`, 10, 100 + (index * 10));
//             doc.text(`Data de Vencimento: ${formatarData(produto.DataVencimento)}`, 10, 110 + (index * 10));
//             doc.text(`Consumir em até: ${calcularDiferencaDias(produto.DataCadastro, produto.DataVencimento)} dias`, 10, 120 + (index * 10));
//         });
//         doc.save('relatorio-doações-recebidas.pdf');
//     });
  
//     // Função para baixar o relatório em Excel
//     downloadExcelButton.addEventListener('click', function() {
//         const wb = XLSX.utils.book_new();
//         const wsData = [
//             ["SKU", "Produto", "Fornecedor", "Quantidade (kg)", "Unidade de Medida", "Peso Unitário (kg)", "Peso Total (kg)", "Data de Cadastro", "Data de Vencimento", "Consumir em até", "Retirada em"]
//         ];
//         produtos.forEach(produto => {
//             wsData.push([
//                 produto.SKU,
//                 produto.Produto,
//                 produto.Fornecedor,
//                 produto.QuantKG,
//                 produto.UnidadeMedida,
//                 produto.PesoUnitario,
//                 produto.PesoTotal,
//                 formatarData(produto.DataCadastro),
//                 formatarData(produto.DataVencimento),
//                 calcularDiferencaDias(produto.DataCadastro, produto.DataVencimento) + " dias"
//             ]);
//         });
//         const ws = XLSX.utils.aoa_to_sheet(wsData);
//         XLSX.utils.book_append_sheet(wb, ws, "Produtos");
//         XLSX.writeFile(wb, 'relatorio-doações-recebidas.xlsx');
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
        {  fornecedor: 'Casas-MariaMaia',  nome: 'Feijão', quantidade: 20, unidade: 'kilos', PesoTotal: 500.99, PesoUnitario: 12.50, dataCadastro: '2024-07-01', dataVencimento: '2024-08-2'},
        {  fornecedor: 'Volunt',  nome: 'Macarrão',  quantidade: 15, unidade: 'kilos', PesoTotal: 40.50, PesoUnitario: 42.67, dataCadastro: '2024-06-15', dataVencimento: '2024-07-15'},
        {  fornecedor: 'F&F - Hort-Fruit',  nome: 'Tomate', quantidade: 25, unidade: 'kilos', PesoTotal: 60.40, PesoUnitario: 62.4, dataCadastro: '2024-05-20', dataVencimento: '2024-07-20'},
        {  fornecedor: 'CEAGESP',  nome: 'Banana', quantidade: 150, unidade: 'gramas', PesoTotal: 550, PesoUnitario: 82.5, dataCadastro: '2024-07-01', dataVencimento: '2024-07-15'},
        {  fornecedor: 'F&F - Hort-Fruit',  nome: 'Maçã', quantidade: 150, unidade: 'gramas', PesoTotal: 4.000, PesoUnitario: 112.67, dataCadastro: '2024-06-15', dataVencimento: '2024-07-15'},
        {  fornecedor: 'CEAGESP',  nome: 'Rabanet', quantidade: 250, unidade: 'gramas', PesoTotal: 600.00, PesoUnitario: 22.4, dataCadastro: '2024-05-20', dataVencimento: '2024-07-12'}
        // Adicione mais produtos conforme necessário
    ];

    const resultados = dadosProdutos.filter(item => item.dataCadastro <= dataConsulta && item.dataVencimento >= dataConsulta);

    const tbody = document.querySelector('#tabelaResultados tbody');
    tbody.innerHTML = '';

    resultados.forEach(item => {
        const tempoConsumo = calcularTempoConsumo(item.dataCadastro, item.dataVencimento);
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${item.fornecedor}</td>
            <td>${item.nome}</td>
            <td>${item.quantidade}</td>            
            <td>${item.unidade}</td>
            <td>${item.PesoTotal}</td>
            <td>${item.PesoUnitario}</td>
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
                label: 'Quantidade de Hortaliças',
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
    XLSX.writeFile(wb, 'relatorio-doações-recebidas.xlsx');
});

