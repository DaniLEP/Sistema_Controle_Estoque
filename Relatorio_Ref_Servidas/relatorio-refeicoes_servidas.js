// document.addEventListener('DOMContentLoaded', function() {
//     const dashboard = document.getElementById('dashboard');
//     const ctxCafedamanha = document.getElementById('chartCafedamanha').getContext('2d');
//     const ctxAlmoco = document.getElementById('chartAlmoco').getContext('2d');
//     const ctxLanchedatarde = document.getElementById('chartLanchedatarde').getContext('2d');
//     const ctxJantar = document.getElementById('chartJantar').getContext('2d');
//     const downloadPDFButton = document.getElementById('downloadPDF');
//     const downloadExcelButton = document.getElementById('downloadExcel');
  
//     // Dados dos produtos (exemplo)
//     const produtos = [
//         { TurmaFuncionario: 'Turma 2024', quantidadeCafedamanha: 30, quantidadeAlmoco: 25, quantidadeLanchedatarde: 20, quantidadeJantar: 15, dataConsumo: '2024-06-01' },
//         { TurmaFuncionario: 'Funcionarios', quantidadeCafedamanha: 40, quantidadeAlmoco: 35, quantidadeLanchedatarde: 30, quantidadeJantar: 25, dataConsumo: '2024-06-02' },
//         { TurmaFuncionario: 'Turma 2023', quantidadeCafedamanha: 50, quantidadeAlmoco: 45, quantidadeLanchedatarde: 40, quantidadeJantar: 35, dataConsumo: '2024-06-03' },
//         { TurmaFuncionario: 'Funcionarios', quantidadeCafedamanha: 60, quantidadeAlmoco: 55, quantidadeLanchedatarde: 50, quantidadeJantar: 45, dataConsumo: '2024-06-04' }
//     ];
  
//     // Função para formatar a data no formato dd/mm/yyyy
//     function formatarData(data) {
//         const date = new Date(data);
//         const day = date.getDate().toString().padStart(2, '0');
//         const month = (date.getMonth() + 1).toString().padStart(2, '0');
//         const year = date.getFullYear();
//         return `${day}/${month}/${year}`;
//     }
  
//     // Gerar dados para o gráfico de Café da Manhã (pie chart)
//     const labelsCafedamanha = produtos.map(produto => produto.TurmaFuncionario);
//     const dataCafedamanha = produtos.map(produto => produto.quantidadeCafedamanha);
  
//     new Chart(ctxCafedamanha, {
//         type: 'pie',
//         data: {
//             labels: labelsCafedamanha,
//             datasets: [{
//                 label: 'Café da Manhã',
//                 data: dataCafedamanha,
//                 backgroundColor: ['#007bff', '#28a745', '#dc3545', '#ffc107']
//             }]
//         }
//     });
  
//     // Gerar dados para o gráfico de Almoço (pie chart)
//     const labelsAlmoco = produtos.map(produto => produto.TurmaFuncionario);
//     const dataAlmoco = produtos.map(produto => produto.quantidadeAlmoco);
  
//     new Chart(ctxAlmoco, {
//         type: 'pie',
//         data: {
//             labels: labelsAlmoco,
//             datasets: [{
//                 label: 'Almoço',
//                 data: dataAlmoco,
//                 backgroundColor: ['#007bff', '#28a745', '#dc3545', '#ffc107']
//             }]
//         }
//     });
  
//     // Gerar dados para o gráfico de Lanche da Tarde (pie chart)
//     const labelsLanchedatarde = produtos.map(produto => produto.TurmaFuncionario);
//     const dataLanchedatarde = produtos.map(produto => produto.quantidadeLanchedatarde);
  
//     new Chart(ctxLanchedatarde, {
//         type: 'pie',
//         data: {
//             labels: labelsLanchedatarde,
//             datasets: [{
//                 label: 'Lanche da Tarde',
//                 data: dataLanchedatarde,
//                 backgroundColor: ['#007bff', '#28a745', '#dc3545', '#ffc107']
//             }]
//         }
//     });
  
//     // Gerar dados para o gráfico de Jantar (pie chart)
//     const labelsJantar = produtos.map(produto => produto.TurmaFuncionario);
//     const dataJantar = produtos.map(produto => produto.quantidadeJantar);
  
//     new Chart(ctxJantar, {
//         type: 'pie',
//         data: {
//             labels: labelsJantar,
//             datasets: [{
//                 label: 'Jantar',
//                 data: dataJantar,
//                 backgroundColor: ['#007bff', '#28a745', '#dc3545', '#ffc107']
//             }]
//         }
//     });
  
//     // Renderizar os produtos no dashboard
//     produtos.forEach(produto => {
//         const productDiv = document.createElement('div');
//         productDiv.classList.add('product');
//         const produtoInfo = `
//             <div class="product-info">
//                 <div><strong>Turma/Funcionário:</strong> ${produto.TurmaFuncionario}</div>
//                 <div><strong>Quantidade de Café da Manhã:</strong> ${produto.quantidadeCafedamanha}</div>
//                 <div><strong>Quantidade de Almoço:</strong> ${produto.quantidadeAlmoco}</div>
//                 <div><strong>Quantidade de Lanche da Tarde:</strong> ${produto.quantidadeLanchedatarde}</div>
//                 <div><strong>Quantidade de Jantar:</strong> ${produto.quantidadeJantar}</div>
//                 <div><strong>Data de Consumo:</strong> ${formatarData(produto.dataConsumo)}</div>
//             </div>
//         `;
  
//         productDiv.innerHTML = produtoInfo;
//         dashboard.appendChild(productDiv);
//     });

//     // Função para baixar o relatório em PDF
//     downloadPDFButton.addEventListener('click', function() {
//         const { jsPDF } = window.jspdf;
//         const doc = new jsPDF();
//         doc.text('Relatório de Refeições Servidas', 10, 10);
//         produtos.forEach((produto, index) => {
//             doc.text(`Refeições Servidas ${index + 1}`, 10, 20 + (index * 10));
//             doc.text(`Turma/Funcionário: ${produto.TurmaFuncionario}`, 10, 30 + (index * 10));
//             doc.text(`Quantidade de Café da Manhã: ${produto.quantidadeCafedamanha}`, 10, 40 + (index * 10));
//             doc.text(`Quantidade de Almoço: ${produto.quantidadeAlmoco}`, 10, 50 + (index * 10));
//             doc.text(`Quantidade de Lanche da Tarde: ${produto.quantidadeLanchedatarde}`, 10, 60 + (index * 10));
//             doc.text(`Quantidade de Jantar: ${produto.quantidadeJantar}`, 10, 70 + (index * 10));
//             doc.text(`Data de Consumo: ${formatarData(produto.dataConsumo)}`, 10, 80 + (index * 10));
//         });
//         doc.save('relatorio-refeicoes-servidas.pdf');
//     });
  
//     // Função para baixar o relatório em Excel
//     downloadExcelButton.addEventListener('click', function() {
//         const wb = XLSX.utils.book_new();
//         const wsData = [
//             ["Turma/Funcionário", "Quantidade de Café da Manhã", "Quantidade de Almoço", "Quantidade de Lanche da Tarde", "Quantidade de Jantar", "Data de Consumo"]
//         ];
//         produtos.forEach(produto => {
//             wsData.push([
//                 produto.TurmaFuncionario,
//                 produto.quantidadeCafedamanha,
//                 produto.quantidadeAlmoco,
//                 produto.quantidadeLanchedatarde,
//                 produto.quantidadeJantar,
//                 formatarData(produto.dataConsumo)
//             ]);
//         });
//         const ws = XLSX.utils.aoa_to_sheet(wsData);
//         XLSX.utils.book_append_sheet(wb, ws, "Refeições Servidas");
//         XLSX.writeFile(wb, 'relatorio-refeicoes-servidas.xlsx');
//     });
// });


document.getElementById('consultaForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const dataConsulta = document.getElementById('dataConsulta').value;

    if (!dataConsulta) {
        alert('Por favor, selecione uma data.');
        return;
    }

    const dadosProdutos = [
        { TurmaFuncionario: 'Turma 2024', quantidadeCafe: 30, quantidadeAlmoco: 25, quantidadeLanche: 20, quantidadeJantar: 15, dataConsumo: '2024-07-01' },
        { TurmaFuncionario: 'Funcionarios', quantidadeCafe: 40, quantidadeAlmoco: 35, quantidadeLanche: 30, quantidadeJantar: 25, dataConsumo:  '2024-06-15'},
        { TurmaFuncionario: 'Turma 2023', quantidadeCafe: 50, quantidadeAlmoco: 45, quantidadeLanche: 40, quantidadeJantar: 35, dataConsumo: '2024-05-20' },
        { TurmaFuncionario: 'Funcionarios', quantidadeCafe: 60, quantidadeAlmoco: 55, quantidadeLanche: 50, quantidadeJantar: 45, dataConsumo: '2024-07-01' }
            
        // Adicione mais produtos conforme necessário
    ];

    const resultados = dadosProdutos.filter(item => item.dataConsumo >= dataConsulta );

    const tbody = document.querySelector('#tabelaResultados tbody');
    tbody.innerHTML = '';

    resultados.forEach(item => {
        // const tempoConsumo = calcularTempoConsumo(item.dataCadastro, item.dataVencimento);
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${item.TurmaFuncionario}</td>
            <td>${item.quantidadeCafe}</td>            
             <td>${item.quantidadeAlmoco}</td>            
            <td>${item.quantidadeLanche}</td>            
            <td>${item.quantidadeJantar}</td>            
            <td>${item.dataConsumo}</td>
        `;
        tbody.appendChild(tr);
    });

    if (resultados.length === 0) {
        tbody.innerHTML = '<tr><td colspan="10" class="text-center">Nenhum dado encontrado para a data selecionada.</td></tr>';
    } else {
        gerarGrafico(resultados);
    }
});

// function calcularTempoConsumo(dataConsumo) {
//     const data1 = new Date(dataConsumo);
// }

// function gerarGrafico(dados) {
//     const ctx = document.getElementById('chartProdutos').getContext('2d');
//     const nomesProdutos = dados.map(item => item.Turma/Funcionário);
//     const quantidades = dados.map(item => item.quantidadeCafe, quantidadeAlmoco, quantidadeLanche, quantidadeJantar);

//     new Chart(ctx, {
//         type: 'bar',
//         data: {
//             labels: nomesProdutos,
//             datasets: [{
//                 label: 'Quantidade de Turma/Funcionário	',
//                 data: quantidades,
//                 backgroundColor: '#F20DE7',
//                 borderColor: 'rgba(0, 123, 255, 1)',
//                 borderWidth: 1
//             }]
//         },
//         options: {
//             scales: {
//                 y: {
//                     beginAtZero: true
//                 }
//             }
//         }
//     });
// }

document.getElementById('downloadExcel').addEventListener('click', function() {
    const tabela = document.getElementById('tabelaResultados');
    const wb = XLSX.utils.table_to_book(tabela, { sheet: "Relatório" });
    XLSX.writeFile(wb, 'relatorio-hortaliças.xlsx');
});
