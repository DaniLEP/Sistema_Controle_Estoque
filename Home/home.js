const dadosRelatorio = {
    proteina: [
        { sku: 'SKU001', proteina: 'Whey Protein', tipo: 'Pó', dataCadastro: '2024-06-01', dataVencimento: '2024-06-30', fornecedor: 'Fornecedor A', valorUnitario: 60.00, valorTotal: 150.00 },
        { sku: 'SKU002', proteina: 'Caseína', tipo: 'Pó', dataCadastro: '2024-06-10', dataVencimento: '2024-07-10', fornecedor: 'Fornecedor B', valorUnitario: 80.00, valorTotal: 80.00 },
        { sku: 'SKU003', proteina: 'Albumina', tipo: 'Pó', dataCadastro: '2024-06-15', dataVencimento: '2024-07-15', fornecedor: 'Fornecedor C', valorUnitario: 60.00, valorTotal: 30.00 }
    ],
    mantimento: [
        { SKU: '001', Mantimento: 'Arroz', Fornecedor: 'Fornecedor 1', QuantKG: 50, UnidadeMedida: 'kg', ValorUnitario: 1, ValorTotal: 50, DataCadastro: '2024-01-01', DataVencimento: '2024-06-01' },
        { SKU: '002', Mantimento: 'Feijão', Fornecedor: 'Fornecedor 2', QuantKG: 30, UnidadeMedida: 'kg', ValorUnitario: 1, ValorTotal: 30, DataCadastro: '2024-01-10', DataVencimento: '2024-07-10' },
        { SKU: '003', Mantimento: 'Macarrão', Fornecedor: 'Fornecedor 3', QuantKG: 20, UnidadeMedida: 'kg', ValorUnitario: 0.5, ValorTotal: 10, DataCadastro: '2024-02-01', DataVencimento: '2024-08-01' },
        { SKU: '004', Mantimento: 'Farinha', Fornecedor: 'Fornecedor 4', QuantKG: 25, UnidadeMedida: 'kg', ValorUnitario: 1, ValorTotal: 25, DataCadastro: '2024-03-01', DataVencimento: '2024-09-01' }
    ],
    hortalica: [
        { SKU: '001', Hortalicas: 'Alface Amaricano', Fornecedor: 'Fornecedor 1', QuantKG: 50,  Tipo: "Verdura", UnidadeMedida: 'kg', ValorUnitario: 1, ValorTotal: 50, DataCadastro: '2024-01-01', DataVencimento: '2024-06-01' },
        { SKU: '002', Hortalicas: 'Maçã', Fornecedor: 'Fornecedor 2', QuantKG: 30,  Tipo: "Fruta", UnidadeMedida: 'kg', ValorUnitario: 1, ValorTotal: 30, DataCadastro: '2024-01-10', DataVencimento: '2024-07-10' },
        { SKU: '003', Hortalicas: 'Beringela', Fornecedor: 'Fornecedor 3', QuantKG: 20, Tipo: "Legumes" , UnidadeMedida: 'kg', ValorUnitario: 0.5, ValorTotal: 10, DataCadastro: '2024-02-01', DataVencimento: '2024-08-01' },
        { SKU: '004', Hortalicas: '#', Fornecedor: 'Fornecedor 4', QuantKG: 25,  Tipo: "#", UnidadeMedida: 'kg', ValorUnitario: 1, ValorTotal: 25, DataCadastro: '2024-03-01', DataVencimento: '2024-09-01' }
],
    doacoes: [  
        { SKU: '001', Produto: 'Arroz', Fornecedor: 'Fornecedor 1', QuantKG: 50, UnidadeMedida: 'kg', PesoUnitario: 1, PesoTotal: 50, DataCadastro: '2024-01-01', DataVencimento: '2024-06-01' },
        { SKU: '002', Produto: 'Feijão', Fornecedor: 'Fornecedor 2', QuantKG: 30, UnidadeMedida: 'kg', PesoUnitario: 1, PesoTotal: 30, DataCadastro: '2024-01-10', DataVencimento: '2024-07-10' },
        { SKU: '003', Produto: 'Macarrão', Fornecedor: 'Fornecedor 3', QuantKG: 20, UnidadeMedida: 'kg', PesoUnitario: 0.5, PesoTotal: 10, DataCadastro: '2024-02-01', DataVencimento: '2024-08-01' },
        { SKU: '004', Produto: 'Farinha', Fornecedor: 'Fornecedor 4', QuantKG: 25, UnidadeMedida: 'kg', PesoUnitario: 1, PesoTotal: 25, DataCadastro: '2024-03-01', DataVencimento: '2024-09-01' }
],
    refeicoes: [
        { TurmaFuncionario: 'Turma 1', quantidadeCafedamanha: 30, quantidadeAlmoco: 25, quantidadeLanchedatarde: 20, quantidadeJantar: 15, dataConsumo: '2024-06-01' },
        { TurmaFuncionario: 'Funcionarios', quantidadeCafedamanha: 40, quantidadeAlmoco: 35, quantidadeLanchedatarde: 30, quantidadeJantar: 25, dataConsumo: '2024-06-02' },
        { TurmaFuncionario: 'Turma 3', quantidadeCafedamanha: 50, quantidadeAlmoco: 45, quantidadeLanchedatarde: 40, quantidadeJantar: 35, dataConsumo: '2024-06-03' },
        { TurmaFuncionario: 'Funcionarios', quantidadeCafedamanha: 60, quantidadeAlmoco: 55, quantidadeLanchedatarde: 50, quantidadeJantar: 45, dataConsumo: '2024-06-04' }
    ]
};

let currentIndex = 0;

function showItem(index) {
    const items = document.querySelectorAll('.carousel-item');
    items.forEach((item, i) => {
        item.style.transform = `translateX(${100 * (i - index)}%)`; 
    });
}

function prevItem() {
    const items = document.querySelectorAll('.carousel-item');
    currentIndex = (currentIndex - 0,1, items.length) % items.length;
    showItem(currentIndex);
}

function nextItem() {
    const items = document.querySelectorAll('.carousel-item');
    currentIndex = (currentIndex + 1) % items.length;
    showItem(currentIndex);
}

function editarRelatorio(tipo) {
    alert(`Editar relatório de ${tipo}`);
    // Implementar lógica de edição
}

function salvarExcel(tipo) {
    const worksheet = XLSX.utils.json_to_sheet(dadosRelatorio[tipo]);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, `Relatorio_${tipo}`);

    XLSX.writeFile(workbook, `Relatorio_${tipo}.xlsx`);
}

async function salvarPDF(tipo) {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    const dados = dadosRelatorio[tipo];

    dados.forEach((item, index) => {
        doc.text(`SKU: ${item.sku}`, 10, 10 + (index * 10));
        doc.text(`Proteína: ${item.proteina}`, 10, 20 + (index * 10));
        doc.text(`Tipo: ${item.tipo}`, 10, 30 + (index * 10));
        doc.text(`Data de Cadastro: ${item.dataCadastro}`, 10, 40 + (index * 10));
        doc.text(`Data de Vencimento: ${item.dataVencimento}`, 10, 50 + (index * 10));
        doc.text(`Fornecedor: ${item.fornecedor}`, 10, 60 + (index * 10));
        doc.text(`Valor Unitário: R$ ${item.valorUnitario.toFixed(2)}`, 10, 70 + (index * 10));
        doc.text(`Valor Total: R$ ${item.valorTotal.toFixed(2)}`, 10, 80 + (index * 10));
    });

    doc.save(`Relatorio_${tipo}.pdf`);
}

// Inicializa o carrossel
showItem(currentIndex);


const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault();
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
  const active = nav.classList.contains('active');
  event.currentTarget.setAttribute('aria-expanded', active);
  if (active) {
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
  } else {
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
  }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);