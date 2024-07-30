// Dados fictícios para o exemplo
const dadosEstoque = [
    { sku: 'SKU001', tipo: 'proteina', nome: 'Whey Protein', quantidade: 10 },
    { sku: 'SKU002', tipo: 'mantimento', nome: 'Arroz', quantidade: 50 },
    { sku: 'SKU003', tipo: 'hortalica', nome: 'Alface', quantidade: 30 },
    { sku: 'SKU004', tipo: 'doacoes', nome: 'Doação de Alimentos', quantidade: 100 },
    { sku: 'SKU005', tipo: 'refeicoes', nome: 'Refeição Servida', quantidade: 20 },
    // Adicione mais dados conforme necessário
];

// Função para consultar o estoque por SKU e Tipo
function consultarEstoque() {
    const skuInput = document.getElementById('skuInput').value.trim().toUpperCase();
    const tipoInput = document.getElementById('tipoInput').value;
    const resultadoConsulta = document.getElementById('resultadoConsulta');
    resultadoConsulta.innerHTML = '';

    if (skuInput === '') {
        alert('Por favor, insira um SKU para consultar.');
        return;
    }

    const resultado = dadosEstoque.filter(item => {
        return item.sku === skuInput && (tipoInput === '' || item.tipo === tipoInput);
    });

    if (resultado.length > 0) {
        resultado.forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'item';
            itemDiv.innerHTML = `
                <p><strong>SKU:</strong> ${item.sku}</p>
                <p><strong>Tipo:</strong> ${item.tipo}</p>
                <p><strong>Nome:</strong> ${item.nome}</p>
                <p><strong>Quantidade:</strong> ${item.quantidade}</p>
            `;
            resultadoConsulta.appendChild(itemDiv);
        });
    } else {
        resultadoConsulta.innerHTML = '<p>Nenhum produto encontrado.</p>';
    }
}

// Função para salvar o relatório em Excel
function salvarExcel() {
    const ws = XLSX.utils.json_to_sheet(dadosEstoque);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Estoque');
    XLSX.writeFile(wb, 'controle_estoque.xlsx');
}

// Função para salvar o relatório em PDF
function salvarPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    let y = 10;

    dadosEstoque.forEach(item => {
        doc.text(`SKU: ${item.sku}`, 10, y);
        doc.text(`Tipo: ${item.tipo}`, 10, y + 10);
        doc.text(`Nome: ${item.nome}`, 10, y + 20);
        doc.text(`Quantidade: ${item.quantidade}`, 10, y + 30);
        y += 40;
    });

    doc.save('controle_estoque.pdf');
}

// Função para retirar o produto do estoque
function retirarProduto() {
    const skuInput = document.getElementById('skuInput').value.trim().toUpperCase();
    const tipoInput = document.getElementById('tipoInput').value;
    const quantidadeRetirada = parseInt(document.getElementById('quantidadeRetirada').value);
    const resultadoConsulta = document.getElementById('resultadoConsulta');
    const produtoIndex = dadosEstoque.findIndex(item => item.sku === skuInput && item.tipo === tipoInput);

    if (produtoIndex > -1) {
        if (isNaN(quantidadeRetirada) || quantidadeRetirada <= 0) {
            alert('Por favor, insira uma quantidade válida para retirar.');
            return;
        }

        if (dadosEstoque[produtoIndex].quantidade >= quantidadeRetirada) {
            dadosEstoque[produtoIndex].quantidade -= quantidadeRetirada;
            alert('Produto retirado com sucesso!');
            consultarEstoque();
        } else {
            alert('Quantidade insuficiente no estoque.');
        }
    } else {
        alert('Produto não encontrado.');
    }
}

// Função para alternar o menu em telas menores
function toggleMenu() {
    const navbarMenu = document.getElementById('navbarMenu');
    if (navbarMenu.style.display === 'block') {
        navbarMenu.style.display = 'none';
    } else {
        navbarMenu.style.display = 'block';
    }
}

// Habilitar ou desabilitar o botão de consulta com base na entrada de SKU
document.getElementById('skuInput').addEventListener('input', function() {
    const skuInput = document.getElementById('skuInput').value.trim();
    const consultarBtn = document.getElementById('consultarBtn');
    if (skuInput !== '') {
        consultarBtn.disabled = false;
    } else {
        consultarBtn.disabled = true;
    }
});
