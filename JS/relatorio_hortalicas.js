document.addEventListener('DOMContentLoaded', function() {
    const dashboard = document.getElementById('dashboard');
    const ctxProdutos = document.getElementById('chartProdutos').getContext('2d');
  
    // Dados dos produtos (exemplo)
    const produtos = [
        { SKU: '001', Produto: 'Produto A', Fornecedor: 'Fornecedor 1', PesoKG: 10, Tipo: 'Tipo 1', UnidadeMedida: 'kg', ValorTotal: 100, ValorUnitario: 10, DataCadastro: '2024-01-01', DataVencimento: '2024-06-01' },
        { SKU: '002', Produto: 'Produto B', Fornecedor: 'Fornecedor 2', PesoKG: 20, Tipo: 'Tipo 2', UnidadeMedida: 'kg', ValorTotal: 200, ValorUnitario: 10, DataCadastro: '2024-01-10', DataVencimento: '2024-07-10' },
        { SKU: '003', Produto: 'Produto C', Fornecedor: 'Fornecedor 3', PesoKG: 15, Tipo: 'Tipo 3', UnidadeMedida: 'kg', ValorTotal: 150, ValorUnitario: 10, DataCadastro: '2024-02-01', DataVencimento: '2024-08-01' },
        { SKU: '004', Produto: 'Produto D', Fornecedor: 'Fornecedor 4', PesoKG: 25, Tipo: 'Tipo 4', UnidadeMedida: 'kg', ValorTotal: 250, ValorUnitario: 10, DataCadastro: '2024-03-01', DataVencimento: '2024-09-01' }
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
    const labelsProdutos = produtos.map(produto => produto.Produto);
    const dataPesoKG = produtos.map(produto => produto.PesoKG);
    const dataValorTotal = produtos.map(produto => produto.ValorTotal);
  
    new Chart(ctxProdutos, {
        type: 'bar',
        data: {
            labels: labelsProdutos,
            datasets: [
                {
                    label: 'Peso (kg)',
                    data: dataPesoKG,
                    backgroundColor: '#007bff'
                },
                {
                    label: 'Valor Total (R$)',
                    data: dataValorTotal,
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
                <div><strong>Produto:</strong> ${produto.Produto}</div>
                <div><strong>Fornecedor:</strong> ${produto.Fornecedor}</div>
                <div><strong>Peso (kg):</strong> ${produto.PesoKG}</div>
                <div><strong>Tipo:</strong> ${produto.Tipo}</div>
                <div><strong>Unidade de Medida:</strong> ${produto.UnidadeMedida}</div>
                <div><strong>Valor Total (R$):</strong> ${produto.ValorTotal}</div>
                <div><strong>Valor Unitário (R$):</strong> ${produto.ValorUnitario}</div>
                <div><strong>Data de Cadastro:</strong> ${formatarData(produto.DataCadastro)}</div>
                <div><strong>Data de Vencimento:</strong> ${formatarData(produto.DataVencimento)}</div>
                <div><strong>Consumir em até:</strong> ${calcularDiferencaDias(produto.DataCadastro, produto.DataVencimento)} dias</div>
            </div>
        `;
  
        productDiv.innerHTML = produtoInfo;
        dashboard.appendChild(productDiv);
    });
});
