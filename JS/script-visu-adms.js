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


//lógica do grid-item, para que seja dinamico aos valores
document.addEventListener('DOMContentLoaded', () => {
    const gridItems = document.querySelectorAll('.grid-item');

    // exemplo de dados
    let data = [
        { nome: 'João Silva', cpf: '123.456.789-00' },
        { nome: 'Maria Oliveira', cpf: '987.654.321-00' }
    ];
    
    // populando o grid com os dados
    data.forEach((item, index) => {
        const nomeItem = gridItems[index * 2];
        const cpfItem = gridItems[index * 2 + 1];

        if (nomeItem && cpfItem) {
            nomeItem.innerHTML = `<input type="checkbox" class="item-checkbox"><span class="item-text">${item.nome}</span>`;
            cpfItem.innerHTML = `<input type="checkbox" class="item-checkbox"><span class="item-text">${item.cpf}</span>`;
        }
    });

    // leitores de evento pro grid
    gridItems.forEach(item => {
        const checkbox = item.querySelector('input[type="checkbox"]');
        
        if (checkbox) {
            item.addEventListener('click', () => {
                checkbox.checked = !checkbox.checked;
                item.classList.toggle('selected', checkbox.checked);
            });
        }
    });
});

updateGrid();

// Função para deletar os usuários selecionados
deletarButton.addEventListener('click', () => {
    data = data.filter((item, index) => {
        const nomeItem = gridContainer.children[index * 4];
        const cpfItem = gridContainer.children[index * 4 + 1];
        const selected = nomeItem.querySelector('input[type="checkbox"]').checked || cpfItem.querySelector('input[type="checkbox"]').checked;
        return !selected;
    });
    updateGrid();
});

atualizarButton.addEventListener('click', () => {
    updateGrid();
});