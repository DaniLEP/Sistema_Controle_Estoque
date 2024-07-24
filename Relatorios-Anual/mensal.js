document.addEventListener('DOMContentLoaded', function() {
    const dadosRelatorio = [
        { sku: 'SKU001', produto: 'Whey Protein', fornecedor: 'Fornecedor A', quantKG: 2.5, unidadeMedida: 'kg', pesoUnitario: 1.0, pesoTotal: 2.5, dataCadastro: '2024-06-01', dataVencimento: '2024-06-30' },
        { sku: 'SKU002', produto: 'Caseína', fornecedor: 'Fornecedor B', quantKG: 3.0, unidadeMedida: 'kg', pesoUnitario: 1.0, pesoTotal: 3.0, dataCadastro: '2024-06-10', dataVencimento: '2024-07-10' },
        { sku: 'SKU003', produto: 'Albumina', fornecedor: 'Fornecedor C', quantKG: 1.5, unidadeMedida: 'kg', pesoUnitario: 1.0, pesoTotal: 1.5, dataCadastro: '2024-06-15', dataVencimento: '2024-07-15' }
    ];

    function consultarPorSKU() {
        const skuInput = document.getElementById('skuInput').value.trim().toUpperCase();
        const relatorioDiv = document.getElementById('relatorio');
        relatorioDiv.innerHTML = '';

        const produto = dadosRelatorio.find(item => item.sku === skuInput);
        if (produto) {
            const produtoInfo = `
                <div class="produto">
                    <strong>SKU:</strong> ${produto.sku}<br>
                    <strong>Produto:</strong> ${produto.produto}<br>
                    <strong>Fornecedor:</strong> ${produto.fornecedor}<br>
                    <strong>Quantidade (kg):</strong> ${produto.quantKG}<br>
                    <strong>Unidade de Medida:</strong> ${produto.unidadeMedida}<br>
                    <strong>Peso Unitário (kg):</strong> ${produto.pesoUnitario}<br>
                    <strong>Peso Total (kg):</strong> ${produto.pesoTotal}<br>
                    <strong>Data de Cadastro:</strong> ${produto.dataCadastro}<br>
                    <strong>Data de Vencimento:</strong> ${produto.dataVencimento}<br>
                    <strong>Consumir em até:</strong> ${calcularDiferencaDias(produto.dataCadastro, produto.dataVencimento)} dias<br>
                </div>
            `;
            relatorioDiv.innerHTML = produtoInfo;

            // Habilitar os botões de salvar após a consulta
            document.getElementById('salvarExcelBtn').disabled = false;
            document.getElementById('salvarPdfBtn').disabled = false;
        } else {
            relatorioDiv.innerHTML = '<p>Nenhum produto encontrado para o SKU informado.</p>';
        }
    }

    function calcularDiferencaDias(data1, data2) {
        const diff = Math.abs(new Date(data2) - new Date(data1));
        return Math.ceil(diff / (1000 * 60 * 60 * 24));
    }

    function voltar() {
        history.back();
    }

    function salvarPDF() {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();
        doc.text('Relatório de Produtos', 10, 10);

        dadosRelatorio.forEach((produto, index) => {
            doc.text(`\nProduto ${index + 1}`, 10, 20 + (index * 10));
            doc.text(`SKU: ${produto.sku}`, 10, 30 + (index * 10));
            doc.text(`Produto: ${produto.produto}`, 10, 40 + (index * 10));
            doc.text(`Fornecedor: ${produto.fornecedor}`, 10, 50 + (index * 10));
            doc.text(`Quantidade (kg): ${produto.quantKG}`, 10, 60 + (index * 10));
            doc.text(`Unidade de Medida: ${produto.unidadeMedida}`, 10, 70 + (index * 10));
            doc.text(`Peso Unitário (kg): ${produto.pesoUnitario}`, 10, 80 + (index * 10));
            doc.text(`Peso Total (kg): ${produto.pesoTotal}`, 10, 90 + (index * 10));
            doc.text(`Data de Cadastro: ${produto.dataCadastro}`, 10, 100 + (index * 10));
            doc.text(`Data de Vencimento: ${produto.dataVencimento}`, 10, 110 + (index * 10));
            doc.text(`Consumir em até: ${calcularDiferencaDias(produto.dataCadastro, produto.dataVencimento)} dias`, 10, 120 + (index * 10));
        });
        doc.save('relatorio-anual.pdf');
    }

    function salvarExcel() {
        const wb = XLSX.utils.book_new();
        const wsData = [
            ["SKU", "Produto", "Fornecedor", "Quantidade (kg)", "Unidade de Medida", "Peso Unitário (kg)", "Peso Total (kg)", "Data de Cadastro", "Data de Vencimento", "Consumir em até"]
        ];

        dadosRelatorio.forEach(produto => {
            wsData.push([
                produto.sku,
                produto.produto,
                produto.fornecedor,
                produto.quantKG,
                produto.unidadeMedida,
                produto.pesoUnitario,
                produto.pesoTotal,
                produto.dataCadastro,
                produto.dataVencimento,
                calcularDiferencaDias(produto.dataCadastro, produto.dataVencimento) + " dias"
            ]);
        });

        const ws = XLSX.utils.aoa_to_sheet(wsData);
        XLSX.utils.book_append_sheet(wb, ws, "Produtos");
        XLSX.writeFile(wb, 'relatorio-anual.xlsx');
    }

    window.consultarPorSKU = consultarPorSKU;
    window.salvarPDF = salvarPDF;
    window.salvarExcel = salvarExcel;
    window.voltar = voltar;
});