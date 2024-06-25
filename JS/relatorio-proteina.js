document.addEventListener('DOMContentLoaded', function() {    
    const dashboard = document.getElementById('dashboard');
    const canvas = document.getElementById('myChart');
    const ctx = canvas.getContext('2d');
  
    // Dados dos produtos (exemplo)
    const produtos = [
      { sku: 'SKU001', proteina: 'Whey Protein', fornecedor: 'Fornecedor A', quantidade: 2.5, tipo: 'Pó', unidadeMedida: 'kg', valorTotal: 150.00, valorUnitario: 60.00, dataCadastro: '2024-06-01', dataVencimento: '2024-06-30' },
      { sku: 'SKU002', proteina: 'Caseína', fornecedor: 'Fornecedor B', quantidade: 1.0, tipo: 'Pó', unidadeMedida: 'kg', valorTotal: 80.00, valorUnitario: 80.00, dataCadastro: '2024-06-10', dataVencimento: '2024-07-10' },
      { sku: 'SKU003', proteina: 'Albumina', fornecedor: 'Fornecedor C', quantidade: 0.5, tipo: 'Pó', unidadeMedida: 'kg', valorTotal: 30.00, valorUnitario: 60.00, dataCadastro: '2024-06-15', dataVencimento: '2024-07-15' }
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
  
    // Gerar dados para o gráfico (quantidade de cada produto)
    const labels = produtos.map(produto => produto.proteina);
    const data = produtos.map(produto => produto.quantidade);
  
    // Configurações do gráfico
    const myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: 'Quantidade (KG)',
          data: data,
          backgroundColor: '#007bff',
          borderColor: '#007bff',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  
    // Renderizar os produtos no dashboard
    produtos.forEach(produto => {
      const productDiv = document.createElement('div');
      productDiv.classList.add('product');
  
      const produtoInfo = `
        <div class="product-info">
          <div><strong>SKU:</strong> ${produto.sku}</div>
          <div><strong>Proteína:</strong> ${produto.proteina}</div>
          <div><strong>Fornecedor:</strong> ${produto.fornecedor}</div>
          <div><strong>Quantidade:</strong> ${produto.quantidade} ${produto.unidadeMedida}</div>
          <div><strong>Tipo:</strong> ${produto.tipo}</div>
          <div><strong>Valor Total:</strong> R$ ${produto.valorTotal.toFixed(2)}</div>
          <div><strong>Valor Unitário:</strong> R$ ${produto.valorUnitario.toFixed(2)}</div>
          <div><strong>Data de Cadastro:</strong> ${formatarData(produto.dataCadastro)}</div>
          <div><strong>Data de Vencimento:</strong> ${formatarData(produto.dataVencimento)}</div>
          <div><strong>Dias para Consumir:</strong> ${calcularDiferencaDias(produto.dataCadastro, produto.dataVencimento)} dias</div>
        </div>
     
      `;
  
      productDiv.innerHTML = produtoInfo;
      dashboard.appendChild(productDiv);
    });
  
    // Função para consumir o produto em até X dias
    window.consumirProduto = function(sku) {
      const inputConsumir = document.getElementById(`consumir${sku}`);
      const diasParaConsumir = inputConsumir.value;
  
      if (diasParaConsumir === '' || diasParaConsumir <= 0) {
        alert('Por favor, informe um número válido de dias para consumo.');
        return;
      }
  
      console.log(`Produto SKU ${sku} será consumido em até ${diasParaConsumir} dias.`);
      // Aqui você pode implementar a lógica para consumir o produto conforme necessário
    };
  });