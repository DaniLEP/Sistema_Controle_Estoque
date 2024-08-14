// // document.addEventListener('DOMContentLoaded', function() {
// //     const dadosRelatorio = [
// //         { sku: 'SKU001', produto: 'Whey Protein', fornecedor: 'Fornecedor A', quantKG: 2.5, unidadeMedida: 'kg', pesoUnitario: 1.0, pesoTotal: 2.5, dataCadastro: '2024-06-01', dataVencimento: '2024-06-30' },
// //         { sku: 'SKU002', produto: 'Caseína', fornecedor: 'Fornecedor B', quantKG: 3.0, unidadeMedida: 'kg', pesoUnitario: 1.0, pesoTotal: 3.0, dataCadastro: '2024-06-10', dataVencimento: '2024-07-10' },
// //         { sku: 'SKU003', produto: 'Albumina', fornecedor: 'Fornecedor C', quantKG: 1.5, unidadeMedida: 'kg', pesoUnitario: 1.0, pesoTotal: 1.5, dataCadastro: '2024-06-15', dataVencimento: '2024-07-15' }
// //     ];

// //     function consultarPorSKU() {
// //         const skuInput = document.getElementById('skuInput').value.trim().toUpperCase();
// //         const relatorioDiv = document.getElementById('relatorio');
// //         relatorioDiv.innerHTML = '';

// //         const produto = dadosRelatorio.find(item => item.sku === skuInput);
// //         if (produto) {
// //             const produtoInfo = `
// //                 <div class="produto">
// //                     <strong>SKU:</strong> ${produto.sku}<br>
// //                     <strong>Produto:</strong> ${produto.produto}<br>
// //                     <strong>Fornecedor:</strong> ${produto.fornecedor}<br>
// //                     <strong>Quantidade (kg):</strong> ${produto.quantKG}<br>
// //                     <strong>Unidade de Medida:</strong> ${produto.unidadeMedida}<br>
// //                     <strong>Peso Unitário (kg):</strong> ${produto.pesoUnitario}<br>
// //                     <strong>Peso Total (kg):</strong> ${produto.pesoTotal}<br>
// //                     <strong>Data de Cadastro:</strong> ${produto.dataCadastro}<br>
// //                     <strong>Data de Vencimento:</strong> ${produto.dataVencimento}<br>
// //                     <strong>Consumir em até:</strong> ${calcularDiferencaDias(produto.dataCadastro, produto.dataVencimento)} dias<br>
// //                 </div>
// //             `;
// //             relatorioDiv.innerHTML = produtoInfo;

// //             // Habilitar os botões de salvar após a consulta
// //             document.getElementById('salvarExcelBtn').disabled = false;
// //             document.getElementById('salvarPdfBtn').disabled = false;
// //         } else {
// //             relatorioDiv.innerHTML = '<p>Nenhum produto encontrado para o SKU informado.</p>';
// //         }
// //     }

// //     function calcularDiferencaDias(data1, data2) {
// //         const diff = Math.abs(new Date(data2) - new Date(data1));
// //         return Math.ceil(diff / (1000 * 60 * 60 * 24));
// //     }

// //     function voltar() {
// //         history.back();
// //     }

// //     function salvarPDF() {
// //         const { jsPDF } = window.jspdf;
// //         const doc = new jsPDF();
// //         doc.text('Relatório de Produtos', 10, 10);

// //         dadosRelatorio.forEach((produto, index) => {
// //             doc.text(`\nProduto ${index + 1}`, 10, 20 + (index * 10));
// //             doc.text(`SKU: ${produto.sku}`, 10, 30 + (index * 10));
// //             doc.text(`Produto: ${produto.produto}`, 10, 40 + (index * 10));
// //             doc.text(`Fornecedor: ${produto.fornecedor}`, 10, 50 + (index * 10));
// //             doc.text(`Quantidade (kg): ${produto.quantKG}`, 10, 60 + (index * 10));
// //             doc.text(`Unidade de Medida: ${produto.unidadeMedida}`, 10, 70 + (index * 10));
// //             doc.text(`Peso Unitário (kg): ${produto.pesoUnitario}`, 10, 80 + (index * 10));
// //             doc.text(`Peso Total (kg): ${produto.pesoTotal}`, 10, 90 + (index * 10));
// //             doc.text(`Data de Cadastro: ${produto.dataCadastro}`, 10, 100 + (index * 10));
// //             doc.text(`Data de Vencimento: ${produto.dataVencimento}`, 10, 110 + (index * 10));
// //             doc.text(`Consumir em até: ${calcularDiferencaDias(produto.dataCadastro, produto.dataVencimento)} dias`, 10, 120 + (index * 10));
// //         });
// //         doc.save('relatorio-anual.pdf');
// //     }

// //     function salvarExcel() {
// //         const wb = XLSX.utils.book_new();
// //         const wsData = [
// //             ["SKU", "Produto", "Fornecedor", "Quantidade (kg)", "Unidade de Medida", "Peso Unitário (kg)", "Peso Total (kg)", "Data de Cadastro", "Data de Vencimento", "Consumir em até"]
// //         ];

// //         dadosRelatorio.forEach(produto => {
// //             wsData.push([
// //                 produto.sku,
// //                 produto.produto,
// //                 produto.fornecedor,
// //                 produto.quantKG,
// //                 produto.unidadeMedida,
// //                 produto.pesoUnitario,
// //                 produto.pesoTotal,
// //                 produto.dataCadastro,
// //                 produto.dataVencimento,
// //                 calcularDiferencaDias(produto.dataCadastro, produto.dataVencimento) + " dias"
// //             ]);
// //         });

// //         const ws = XLSX.utils.aoa_to_sheet(wsData);
// //         XLSX.utils.book_append_sheet(wb, ws, "Produtos");
// //         XLSX.writeFile(wb, 'relatorio-anual.xlsx');
// //     }

// //     window.consultarPorSKU = consultarPorSKU;
// //     window.salvarPDF = salvarPDF;
// //     window.salvarExcel = salvarExcel;
// //     window.voltar = voltar;
// // });


// // Função para habilitar o botão "Consultar" após a seleção do tipo
// function habilitarConsultar() {
//     const tipo = document.getElementById("tipoInput").value;
//     const consultarButton = document.getElementById("consultar");

//     if (tipo !== "") {
//         consultarButton.disabled = false;
//     } else {
//         consultarButton.disabled = true;
//     }
// }

// function consultarPorSKU() {
//     const sku = document.getElementById("skuInput").value.trim();
//     const tipo = document.getElementById("tipoInput").value;

//     if (!sku || !tipo) {
//         alert("Por favor, digite o SKU ou Nome do Produto e selecione o Tipo.");
//         return;
//     }

//     // Simulação de consulta (substitua com lógica real)
//     const relatorio = `Relatório de ${tipo.toUpperCase()} para o produto ${sku}`;
//     document.getElementById("relatorio").innerText = relatorio;

//     // Habilitar botões de exportação
//     document.getElementById("salvarExcelBtn").disabled = false;
//     document.getElementById("salvarPdfBtn").disabled = false;
// }

// function salvarExcel() {
//     const dadosRelatorio = document.getElementById("relatorio").innerText;
//     const wsData = [
//     ["SKU", "Produto", "Fornecedor", "Quantidade (kg)", "Unidade de Medida", "Peso Unitário (kg)", "Peso Total (kg)", "Data de Cadastro", "Data de Vencimento", "Consumir em até"]
//     ];
    
//     dadosRelatorio.forEach(produto => {
//     wsData.push([
//         produto.sku,
//         produto.produto,
//         produto.fornecedor,
//         produto.quantKG,
//         produto.unidadeMedida,
//         produto.pesoUnitario,
//         produto.pesoTotal,
//         produto.dataCadastro,
//         produto.dataVencimento,
//         calcularDiferencaDias(produto.dataCadastro, produto.dataVencimento) + " dias"
//         ]);

//     const ws = XLSX.utils.aoa_to_sheet([[relatorio]]);
//     const wb = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(wb, ws, "Relatório");

//     XLSX.writeFile(wb, "relatorio.xlsx");
// });
// }

// function salvarPDF() {
//     const dadosRelatorio = document.getElementById("relatorio").innerText;
//     dadosRelatorio.forEach((produto, index) => {
//         doc.text(`\nProduto ${index + 1}`, 10, 20 + (index * 10));
//         doc.text(`SKU: ${produto.sku}`, 10, 30 + (index * 10));
//         doc.text(`Produto: ${produto.produto}`, 10, 40 + (index * 10));
//         doc.text(`Fornecedor: ${produto.fornecedor}`, 10, 50 + (index * 10));
//         doc.text(`Quantidade (kg): ${produto.quantKG}`, 10, 60 + (index * 10));
//         doc.text(`Unidade de Medida: ${produto.unidadeMedida}`, 10, 70 + (index * 10));
//         doc.text(`Peso Unitário (kg): ${produto.pesoUnitario}`, 10, 80 + (index * 10));
//         doc.text(`Peso Total (kg): ${produto.pesoTotal}`, 10, 90 + (index * 10));
//         doc.text(`Data de Cadastro: ${produto.dataCadastro}`, 10, 100 + (index * 10));
//         doc.text(`Data de Vencimento: ${produto.dataVencimento}`, 10, 110 + (index * 10));
//         doc.text(`Consumir em até: ${calcularDiferencaDias(produto.dataCadastro, produto.dataVencimento)} dias`, 10, 120 + (index * 10));
//         });
//         doc.save('relatorio-anual.pdf');
//         const { jsPDF } = window.jspdf;
//         const doc = new jsPDF();
// }


// function voltar() {
//     window.location.href = "../Relatorios/relatorios.html";
// }

// scripts.js

document.addEventListener('DOMContentLoaded', function() {
    const startDateInput = document.getElementById('start-date');
    const endDateInput = document.getElementById('end-date');
    const reportTypeInput = document.getElementById('report-type');
    const foodTypeInputs = document.querySelectorAll('.food-type');
    const searchBtn = document.getElementById('search-btn');
    const resultContainer = document.getElementById('result-container');

    // Habilitar botão de consulta após preenchimento das datas, tipo de relatório e seleção de alimentos
    function toggleSearchButton() {
        const anyFoodSelected = Array.from(foodTypeInputs).some(cb => cb.checked);
        if (startDateInput.value && endDateInput.value && reportTypeInput.value && anyFoodSelected) {
            searchBtn.disabled = false;
        } else {
            searchBtn.disabled = true;
        }
    }

    startDateInput.addEventListener('input', toggleSearchButton);
    endDateInput.addEventListener('input', toggleSearchButton);
    reportTypeInput.addEventListener('change', toggleSearchButton);
    foodTypeInputs.forEach(cb => cb.addEventListener('change', toggleSearchButton));

    // Ação ao clicar no botão de consulta
    searchBtn.addEventListener('click', function() {
        // Dados fictícios para cada tipo de alimento
        const foodData = {
            proteina: { totalValue: 5000.00, registered: 1100, used: 52 },
            mantimento: { totalValue: 3000.00, registered: 1500, used: 120 },
            hortalicas: { totalValue: 2000.00, registered: 2000, used: 180 },
            doacoesRecebidas: { registered: 20000, used: 17180 },
            servidas: { registered: 2000, used: 180 }
        };

        // Coletar todos os tipos de alimento selecionados
        const selectedFoodTypes = Array.from(foodTypeInputs)
            .filter(cb => cb.checked)
            .map(cb => cb.value);

        // Consolidar dados para os tipos de alimento selecionados
        const consolidatedData = selectedFoodTypes.reduce((acc, type) => {
            const data = foodData[type] || { totalValue: 0, registered: 0, used: 0 };
            acc.totalValue += data.totalValue;
            acc.registered += data.registered;
            acc.used += data.used;
            return acc;
        }, { totalValue: 0, registered: 0, used: 0 });

        // Atualizar gráfico
        resultContainer.style.display = 'block';
        displayCharts(consolidatedData);
    });

    // Função para exibir o gráfico de pizza com base nos dados consolidados
    function displayCharts(data) {
        const pieData = {
            labels: ['Valor Gasto', 'Quantidade Cadastrada', 'Quantidade Utilizada'],
            datasets: [{
                data: [data.totalValue, data.registered, data.used],
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
            }
            ]};

        const pieCtx = document.getElementById('pie-chart').getContext('2d');
        new Chart(pieCtx, {
            type: 'pie',
            data: pieData
        });
    }
});

