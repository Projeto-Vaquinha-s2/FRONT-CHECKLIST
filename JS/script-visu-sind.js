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
