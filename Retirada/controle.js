// Simulando um estoque inicial com alguns produtos e suas quantidades
const estoque = {
    'SKU001': { nome: 'Macarrão', fornecedor: 'LEVE', quantidade: 20, tipo: 'Proteína', quantidadeCadastrada: 30, quantidadeUtilizada: 10, valorGasto: 50, UnidadeMedida: 'kg', ValorUnitario: 1 },
    'SKU002': { nome: 'Feijão', fornecedor: 'CAMIL', quantidade: 15, tipo: 'Mantimento', quantidadeCadastrada: 20, quantidadeUtilizada: 5, valorGasto: 40, UnidadeMedida: 'kg', ValorUnitario: 1 },
    'SKU003': { nome: 'Arroz', fornecedor: 'CAMIL', quantidade: 25, tipo: 'Doações Recebidas', quantidadeCadastrada: 30, quantidadeUtilizada: 5, valorGasto: 60, UnidadeMedida: 'kg', ValorUnitario: 1 },
    'SKU004': { nome: 'Leite Condensado', fornecedor: 'Pirancanjuba', quantidade: 12, tipo: 'Mantimento', quantidadeCadastrada: 15, quantidadeUtilizada: 3, valorGasto: 30, UnidadeMedida: 'kg', ValorUnitario: 1 },
    'SKU005': { nome: 'Alface-Americano', fornecedor: 'CEAGESP', quantidade: 8, tipo: 'Hortaliça', quantidadeCadastrada: 10, quantidadeUtilizada: 2, valorGasto: 20, UnidadeMedida: 'kg', ValorUnitario: 1 } // Exemplo com baixa quantidade
};

// Função para consultar o estoque por SKU ou tipo de produto
function consultarEstoque() {
    const sku = document.getElementById('skuInput').value.trim();
    const tipo = document.getElementById('tipoInput').value;
    const resultadoConsulta = document.getElementById('resultadoConsulta');
    const consultarBtn = document.getElementById('resultadoConsulta');
    
    let produtosEncontrados = [];

    if (sku) {
        // Consultar por SKU
        if (estoque[sku]) {
            produtosEncontrados.push({ sku, ...estoque[sku] });
        }
    } else if (tipo) {
        // Consultar por Tipo
        for (const [key, produto, consultarBtn] of Object.entries(estoque)) {
            if (produto.tipo === tipo) {
                produtosEncontrados.push({ sku: key, ...produto });
            }
        }
    }

    // Exibir resultado da consulta
    resultadoConsulta.innerHTML = '';
    if (produtosEncontrados.length > 0) {
        produtosEncontrados.forEach(produto => {
            const produtoElement = document.createElement('div');
            produtoElement.innerHTML = `
                <strong>SKU:</strong> ${produto.sku}<br>
                <strong>Nome:</strong> ${produto.nome}<br>
                <strong>Fornecedor:</strong> ${produto.fornecedor}</div><br>
                <strong>Quantidade em Estoque:</strong> ${produto.quantidade} unidades<br>
                <strong>Quantidade Cadastrada:</strong> ${produto.quantidadeCadastrada} unidades<br>
                <strong>Quantidade Utilizada:</strong> ${produto.quantidadeUtilizada} unidades<br>
                <strong>Valor Total Gasto:</strong> R$ ${produto.valorGasto.toFixed(2)}
            `;
            produtoElement.dataset.sku = produto.sku;
            resultadoConsulta.appendChild(produtoElement);
        });
    } else {
        resultadoConsulta.textContent = 'Nenhum produto encontrado.';
    }
}

// Função para retirar produto do estoque
function retirarProduto() {
    const quantidadeRetirada = parseInt(document.getElementById('quantidadeRetirada').value);
    const resultadoConsulta = document.getElementById('resultadoConsulta');
    const produtos = resultadoConsulta.children;

    if (produtos.length === 0) {
        alert('Consulte um produto antes de realizar a retirada.');
        return;
    }

    if (isNaN(quantidadeRetirada) || quantidadeRetirada <= 0) {
        alert('Insira uma quantidade válida para retirada.');
        return;
    }

    for (const produtoElement of produtos) {
        const sku = produtoElement.dataset.sku;
        const produto = estoque[sku];

        if (produto) {
            if (produto.quantidade >= quantidadeRetirada) {
                produto.quantidade -= quantidadeRetirada;
                produto.quantidadeUtilizada += quantidadeRetirada;
                alert(`Produto retirado com sucesso. Quantidade restante de ${produto.nome}: ${produto.quantidade} unidades.`);
                
                // Verificação da quantidade mínima
                if (produto.quantidade < 10) {
                    alert(`Atenção! O estoque do produto ${produto.nome} está abaixo de 10 unidades. Reposição necessária!`);
                }

                // Atualizar a exibição do resultado
                consultarEstoque();
            } else {
                alert(`Quantidade insuficiente em estoque para o produto ${produto.nome}. Quantidade disponível: ${produto.quantidade} unidades.`);
            }
        }
    }
}

// Habilitar o botão de consulta apenas se SKU ou Tipo for preenchido
document.getElementById('skuInput').addEventListener('input', toggleConsultarBtn);
document.getElementById('tipoInput').addEventListener('change', toggleConsultarBtn);

function toggleConsultarBtn() {
    const sku = document.getElementById('skuInput').value.trim();
    const tipo = document.getElementById('tipoInput').value;
    document.getElementById('consultarBtn').disabled = !(sku || tipo);
}

// Event listener para o botão de consulta
document.getElementById('consultarBtn').addEventListener('click', consultarEstoque);

