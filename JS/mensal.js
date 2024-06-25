// Dados fictícios para o exemplo
const dadosRelatorio = [
    { sku: 'SKU001', proteina: 'Whey Protein', tipo: 'Pó', dataCadastro: '2024-06-01', dataVencimento: '2024-06-30', fornecedor: 'Fornecedor A', valorUnitario: 60.00, valorTotal: 150.00 },
    { sku: 'SKU002', proteina: 'Caseína', tipo: 'Pó', dataCadastro: '2024-06-10', dataVencimento: '2024-07-10', fornecedor: 'Fornecedor B', valorUnitario: 80.00, valorTotal: 80.00 },
    { sku: 'SKU003', proteina: 'Albumina', tipo: 'Pó', dataCadastro: '2024-06-15', dataVencimento: '2024-07-15', fornecedor: 'Fornecedor C', valorUnitario: 60.00, valorTotal: 30.00 }
  ];
  
  // Função para consultar os dados pelo SKU
  function consultarPorSKU() {
    const skuInput = document.getElementById('skuInput').value.trim().toUpperCase();
    const relatorioDiv = document.getElementById('relatorio');
    relatorioDiv.innerHTML = '';
  
    const produto = dadosRelatorio.find(item => item.sku === skuInput);
  
    if (produto) {
      const produtoInfo = `
        <div class="produto">
          <strong>SKU:</strong> ${produto.sku}<br>
          <strong>Proteína:</strong> ${produto.proteina}<br>
          <strong>Tipo:</strong> ${produto.tipo}<br>
          <strong>Data de Cadastro:</strong> ${produto.dataCadastro}<br>
          <strong>Data de Vencimento:</strong> ${produto.dataVencimento}<br>
          <strong>Fornecedor:</strong> ${produto.fornecedor}<br>
          <strong>Valor Unitário:</strong> R$ ${produto.valorUnitario.toFixed(2)}<br>
          <strong>Valor Total:</strong> R$ ${produto.valorTotal.toFixed(2)}<br>
        </div>
      `;
      relatorioDiv.innerHTML = produtoInfo;
    } else {
      relatorioDiv.innerHTML = '<p>Nenhum produto encontrado para o SKU informado.</p>';
    }
  }
  
  // Função para voltar à página anterior
  function voltar() {
    history.back();
  }
  
  // Funções para salvar o relatório em Excel ou PDF (exemplo)
  function salvarExcel() {
    // Lógica para salvar em Excel (exemplo)
    console.log('Relatório salvo em Excel.');
  }
  
  function salvarPDF() {
    // Lógica para salvar em PDF (exemplo)
    console.log('Relatório salvo em PDF.');
  }
  