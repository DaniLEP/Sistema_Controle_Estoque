document.addEventListener('DOMContentLoaded', function() {
    const dashboard = document.getElementById('dashboard');
    const ctxProdutos = document.getElementById('chartProdutos').getContext('2d');
    const downloadPDFButton = document.getElementById('downloadPDF');
    const downloadExcelButton = document.getElementById('downloadExcel');
  
    // Dados dos produtos (exemplo)
    const produtos = [
        { SKU: '001', Hortalicas: 'Alface Amaricano', Fornecedor: 'Fornecedor 1', QuantKG: 50,  Tipo: "Verdura", UnidadeMedida: 'kg', ValorUnitario: 1, ValorTotal: 50, DataCadastro: '2024-01-01', DataVencimento: '2024-06-01' },
        { SKU: '002', Hortalicas: 'Maçã', Fornecedor: 'Fornecedor 2', QuantKG: 30,  Tipo: "Fruta", UnidadeMedida: 'kg', ValorUnitario: 1, ValorTotal: 30, DataCadastro: '2024-01-10', DataVencimento: '2024-07-10' },
        { SKU: '003', Hortalicas: 'Beringela', Fornecedor: 'Fornecedor 3', QuantKG: 20, Tipo: "Legumes" , UnidadeMedida: 'kg', ValorUnitario: 0.5, ValorTotal: 10, DataCadastro: '2024-02-01', DataVencimento: '2024-08-01' },
        { SKU: '004', Hortalicas: '#', Fornecedor: 'Fornecedor 4', QuantKG: 25,  Tipo: "#", UnidadeMedida: 'kg', ValorUnitario: 1, ValorTotal: 25, DataCadastro: '2024-03-01', DataVencimento: '2024-09-01' }
    ];
  
    // Função para calcular diferença em dias entre duas datas
    function calcularDiferencaDias(data1, data2) {
        const diff = Math.abs(new Date(data2) - new Date(data1));
        return Math.ceil(diff / (1000 * 60 * 60 * 24));
    }
  
    // Função para formatar a data no formato dd/mm/yyyy
    function formatarData(data) {
        const date = new Date(data);
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    }
  
    // Gerar dados para o gráfico de produtos (bar chart)
    const labelsProdutos = produtos.map(produto => produto.Hortalicas);
    const dataQuantKG = produtos.map(produto => produto.QuantKG);
    const dataPesoTotal = produtos.map(produto => produto.ValorTotal);
  
    new Chart(ctxProdutos, {
        type: 'bar',
        data: {
            labels: labelsProdutos,
            datasets: [
                {
                    label: 'Quantidade (kg)',
                    data: dataQuantKG,
                    backgroundColor: '#007bff'
                },
                {
                    label: 'Valor Total (kg)',
                    data: dataPesoTotal,
                    backgroundColor: '#28a745'
                }
            ]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
  
    // Renderizar os produtos no dashboard
    produtos.forEach(produto => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        const produtoInfo = `
            <div class="product-info">
                <div><strong>SKU:</strong> ${produto.SKU}</div>
                <div><strong>Hortaliças:</strong> ${produto.Hortalicas}</div>
                <div><strong>Fornecedor:</strong> ${produto.Fornecedor}</div>
                <div><strong>Quantidade (kg):</strong> ${produto.QuantKG}</div>
                <div><strong>Tipo:</strong> ${produto.Tipo}</div>
                <div><strong>Unidade de Medida:</strong> ${produto.UnidadeMedida}</div>
                <div><strong>Valor Unitário (kg):</strong> ${produto.ValorUnitario}</div>
                <div><strong>Valor Total (kg):</strong> ${produto.ValorTotal}</div>
                <div><strong>Data de Cadastro:</strong> ${formatarData(produto.DataCadastro)}</div>
                <div><strong>Data de Vencimento:</strong> ${formatarData(produto.DataVencimento)}</div>
                <div><strong>Consumir em até:</strong> ${calcularDiferencaDias(produto.DataCadastro, produto.DataVencimento)} dias</div>
            </div>
        `;
  
        productDiv.innerHTML = produtoInfo;
        dashboard.appendChild(productDiv);
    });
  
    // Função para baixar o relatório em PDF
    downloadPDFButton.addEventListener('click', function() {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();
        doc.text('Relatório de Hortaliças', 10, 10);
        produtos.forEach((produto, index) => {
            doc.text(`\nHortaliças ${index + 1}`, 10, 20 + (index * 10));
            doc.text(`SKU: ${produto.SKU}`, 10, 30 + (index * 10));
            doc.text(`Hortaliças: ${produto.Hortalicas}`, 10, 40 + (index * 10));
            doc.text(`Fornecedor: ${produto.Fornecedor}`, 10, 50 + (index * 10));
            doc.text(`Quantidade (kg): ${produto.QuantKG}`, 10, 60 + (index * 10));
            doc.text(`Tipo: ${produto.Tipo}`, 10, 60 + (index * 10));
            doc.text(`Unidade de Medida: ${produto.UnidadeMedida}`, 10, 70 + (index * 10));
            doc.text(`Peso Unitário (kg): ${produto.ValorUnitario}`, 10, 80 + (index * 10));
            doc.text(`Peso Total (kg): ${produto.ValorTotal}`, 10, 90 + (index * 10));
            doc.text(`Data de Cadastro: ${formatarData(produto.DataCadastro)}`, 10, 100 + (index * 10));
            doc.text(`Data de Vencimento: ${formatarData(produto.DataVencimento)}`, 10, 110 + (index * 10));
            doc.text(`Consumir em até: ${calcularDiferencaDias(produto.DataCadastro, produto.DataVencimento)} dias`, 10, 120 + (index * 10));
        });
        doc.save('relatorio-hortaliças.pdf');
    });
  
    // Função para baixar o relatório em Excel
    downloadExcelButton.addEventListener('click', function() {
        const wb = XLSX.utils.book_new();
        const wsData = [
            ["SKU", "Hortaliças", "Fornecedor", "Quantidade (kg)", "Tipo", "Unidade de Medida", "Valor Unitário (kg)", "Valor Total (kg)", "Data de Cadastro", "Data de Vencimento", "Consumir em até", "Retirada em"]
        ];
        produtos.forEach(produto => {
            wsData.push([
                produto.SKU,
                produto.Hortalicas,
                produto.Fornecedor,
                produto.QuantKG,
                produto.Tipo,
                produto.UnidadeMedida,
                produto.ValorUnitario,
                produto.ValorTotal,
                formatarData(produto.DataCadastro),
                formatarData(produto.DataVencimento),
                calcularDiferencaDias(produto.DataCadastro, produto.DataVencimento) + " dias"
            ]);
        });
        const ws = XLSX.utils.aoa_to_sheet(wsData);
        XLSX.utils.book_append_sheet(wb, ws, "Proteina");
        XLSX.writeFile(wb, 'relatorio-hortaliças.xlsx');
    });
});
