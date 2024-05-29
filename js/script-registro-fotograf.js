// Função para lidar com a opção "Escolha o Condomínio"
function handleEscolhaCondominio(event) {
    const condominioSelecionado = event.target.value;
    console.log("Condomínio selecionado:", condominioSelecionado);
}

// Função para lidar com a opção "Adicione a foto do Problema"
function handleAdicioneFotoProblema(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = function() {
        const imagePreview = document.getElementById('file_upload');
        imagePreview.src = reader.result;
    }
    reader.readAsDataURL(file);
}

// Função para lidar com a opção "Adicione a data da foto"
function handleAdicioneDataFoto(event) {
    const dataFoto = event.target.value;
    console.log("Data da Foto:", dataFoto);
}

// Função para lidar com a opção "Selecione o tipo do Problema"
function handleSelecioneTipoProblema(event) {
    const tipoProblemaSelecionado = event.target.value;
    console.log("Tipo do Problema selecionado:", tipoProblemaSelecionado);
}

// Função para lidar com a opção "Descrição do Problema"
function handleDescricaoProblema(event) {
    const descricaoProblema = event.target.value;
    console.log("Descrição do Problema:", descricaoProblema);
}

// Função para lidar com a opção "Voltar"
function handleVoltar() {
    console.log("Botão Voltar clicado");
    // Aqui você pode implementar a lógica de navegação, por exemplo, redirecionar para outra página
}

// Função para lidar com a opção "Cadastrar"
function handleCadastrar() {
    console.log("Botão Cadastrar clicado");
    // Aqui você pode implementar a lógica de envio do formulário, como validar os dados e enviá-los para o servidor
}

// Adiciona os ouvintes de eventos para cada opção
document.addEventListener("DOMContentLoaded", function() {
    document.querySelector('.escolhasCondominios').addEventListener('change', handleEscolhaCondominio);
    document.getElementById('upfile').addEventListener('change', handleAdicioneFotoProblema);
    document.getElementById('foto').addEventListener('change', handleAdicioneDataFoto);
    document.getElementById('tipo do Problema').addEventListener('change', handleSelecioneTipoProblema);
    document.querySelector('.textArea').addEventListener('input', handleDescricaoProblema);
    document.querySelector('.botao').addEventListener('click', handleVoltar);
    document.querySelector('.botao2').addEventListener('click', handleCadastrar);
});
