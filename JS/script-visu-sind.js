document.addEventListener('DOMContentLoaded', () => {
    const atualizarButton = document.getElementById('atualizar');
    const deletarButton = document.getElementById('deletar');
    const exibirInativosButton = document.getElementById('exibirInativos');
    const voltarButton = document.getElementById('voltar');

    atualizarButton.addEventListener('click', () => {
        // atualizar registros
        alert('Atualizar registros');
    });

    deletarButton.addEventListener('click', () => {
        // deletar registros
        alert('Deletar registros');
    });

    exibirInativosButton.addEventListener('click', () => {
        // exibir registros inativos
        alert('Exibir registros inativos');
    });

    voltarButton.addEventListener('click', () => {
        // voltar à página anterior
        alert('Voltar à página anterior');
    });
});

function formatarCPF(cpf) {
    cpf = cpf.replace(/\D/g, ''); 
    cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2'); 
    cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2'); 
    cpf = cpf.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    return cpf;
}

//captura a digitação do input cpf
document.querySelector('input[name="cpf"]').addEventListener('input', function(event) {
    var input = event.target;
    var começa = input.selectionStart;
    var termina = input.selectionEnd;
    var valorInicial = input.value;
    //limita o tamanho máximo para o cpf de 14 caracteres, incluindo . e -
    if(valorInicial.length > 14) {
        input.value = valorInicial.slice(0, 14);
    } else {
        input.value = formatarCPF(valorInicial);
    }
    //conserta o cursor para o ultimo caractere
    var novaPosicao = começa + (input.value.length - valorInicial.length);
    input.setSelectionRange(novaPosicao, novaPosicao);
});

document.addEventListener('DOMContentLoaded', () => {
    const gridContainer = document.querySelector('.grid-container');

    // Exemplo de dados
    const data = [
        { nome: 'João Silva', cpf: '123.456.789-00', data: '01/01/2023', torre: 'A' },
        { nome: 'Maria Oliveira', cpf: '987.654.321-00', data: '15/02/2023', torre: 'B' }
    ];

    // Populando o grid com os dados
    data.forEach(item => {
        // Criar elementos para cada item
        const nomeItem = document.createElement('div');
        nomeItem.classList.add('grid-item');
        nomeItem.innerHTML = `<input type="checkbox" class="item-checkbox"><span class="item-text">${item.nome}</span>`;

        const cpfItem = document.createElement('div');
        cpfItem.classList.add('grid-item');
        cpfItem.innerHTML = `<input type="checkbox" class="item-checkbox"><span class="item-text">${item.cpf}</span>`;

        const dataItem = document.createElement('div');
        dataItem.classList.add('grid-item');
        dataItem.textContent = item.data;

        const torreItem = document.createElement('div');
        torreItem.classList.add('grid-item');
        torreItem.textContent = item.torre;

        // Adicionar os elementos ao container do grid
        gridContainer.appendChild(nomeItem);
        gridContainer.appendChild(cpfItem);
        gridContainer.appendChild(dataItem);
        gridContainer.appendChild(torreItem);
    });

    // Adicionando event listeners às checkboxes
    gridContainer.addEventListener('click', (event) => {
        const checkbox = event.target.querySelector('input[type="checkbox"]');
        if (event.target.tagName !== 'INPUT' && checkbox) {
            checkbox.checked = !checkbox.checked;
            event.target.classList.toggle('selected', checkbox.checked);
        }
    });
});