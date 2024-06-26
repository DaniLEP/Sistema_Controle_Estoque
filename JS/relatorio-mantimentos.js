document.addEventListener('DOMContentLoaded', function() {
  const dashboard = document.getElementById('dashboard');
  const ctxMantimentos = document.getElementById('chartMantimentos').getContext('2d');

  // Dados dos mantimentos (exemplo)
  const mantimentos = [
      { SKU: '001', Mantimento: 'Arroz', Fornecedor: 'Fornecedor 1', QuantKG: 50, Tipo: 'Grão', UnidadeMedida: 'kg', ValorTotal: 150, ValorUnitario: 3, DataCadastro: '2024-01-01', DataVencimento: '2024-06-01' },
      { SKU: '002', Mantimento: 'Feijão', Fornecedor: 'Fornecedor 2', QuantKG: 30, Tipo: 'Grão', UnidadeMedida: 'kg', ValorTotal: 90, ValorUnitario: 3, DataCadastro: '2024-01-10', DataVencimento: '2024-07-10' },
      { SKU: '003', Mantimento: 'Macarrão', Fornecedor: 'Fornecedor 3', QuantKG: 20, Tipo: 'Massa', UnidadeMedida: 'kg', ValorTotal: 80, ValorUnitario: 4, DataCadastro: '2024-02-01', DataVencimento: '2024-08-01' },
      { SKU: '004', Mantimento: 'Farinha', Fornecedor: 'Fornecedor 4', QuantKG: 25, Tipo: 'Grão', UnidadeMedida: 'kg', ValorTotal: 50, ValorUnitario: 2, DataCadastro: '2024-03-01', DataVencimento: '2024-09-01' }
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

  // Gerar dados para o gráfico de mantimentos (bar chart)
  const labelsMantimentos = mantimentos.map(mantimento => mantimento.Mantimento);
  const dataQuantKG = mantimentos.map(mantimento => mantimento.QuantKG);
  const dataValorTotal = mantimentos.map(mantimento => mantimento.ValorTotal);

  new Chart(ctxMantimentos, {
      type: 'bar',
      data: {
          labels: labelsMantimentos,
          datasets: [
              {
                  label: 'Quantidade (kg)',
                  data: dataQuantKG,
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

  // Renderizar os mantimentos no dashboard
  mantimentos.forEach(mantimento => {
      const productDiv = document.createElement('div');
      productDiv.classList.add('product');
      const mantimentoInfo = `
          <div class="product-info">
              <div><strong>SKU:</strong> ${mantimento.SKU}</div>
              <div><strong>Mantimento:</strong> ${mantimento.Mantimento}</div>
              <div><strong>Fornecedor:</strong> ${mantimento.Fornecedor}</div>
              <div><strong>Quantidade (kg):</strong> ${mantimento.QuantKG}</div>
              <div><strong>Tipo:</strong> ${mantimento.Tipo}</div>
              <div><strong>Unidade de Medida:</strong> ${mantimento.UnidadeMedida}</div>
              <div><strong>Valor Total (R$):</strong> ${mantimento.ValorTotal}</div>
              <div><strong>Valor Unitário (R$):</strong> ${mantimento.ValorUnitario}</div>
              <div><strong>Data de Cadastro:</strong> ${formatarData(mantimento.DataCadastro)}</div>
              <div><strong>Data de Vencimento:</strong> ${formatarData(mantimento.DataVencimento)}</div>
              <div><strong>Consumir em até:</strong> ${calcularDiferencaDias(mantimento.DataCadastro, mantimento.DataVencimento)} dias</div>
          </div>
      `;

      productDiv.innerHTML = mantimentoInfo;
      dashboard.appendChild(productDiv);
  });
});
