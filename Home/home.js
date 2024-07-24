const dadosRelatorio = {
    proteina: [
        { sku: 'SKU001', proteina: 'Whey Protein', tipo: 'Pó', dataCadastro: '2024-06-01', dataVencimento: '2024-06-30', fornecedor: 'Fornecedor A', valorUnitario: 60.00, valorTotal: 150.00 },
        { sku: 'SKU002', proteina: 'Caseína', tipo: 'Pó', dataCadastro: '2024-06-10', dataVencimento: '2024-07-10', fornecedor: 'Fornecedor B', valorUnitario: 80.00, valorTotal: 80.00 },
        { sku: 'SKU003', proteina: 'Albumina', tipo: 'Pó', dataCadastro: '2024-06-15', dataVencimento: '2024-07-15', fornecedor: 'Fornecedor C', valorUnitario: 60.00, valorTotal: 30.00 }
    ],
    mantimento: [],
    hortalica: [],
    doacoes: [],
    refeicoes: []
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
    currentIndex = (currentIndex - 1 + items.length) % items.length;
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
