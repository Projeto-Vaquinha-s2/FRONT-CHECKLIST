document.addEventListener('DOMContentLoaded', function() {
    // Pré-carregar imagens
    var images = ['img-login.jpg', 'logo.png'];
    images.forEach(function(imgSrc) {
        var img = new Image();
        img.src = imgSrc;
    });

    // Botão "Home" - Navegação suave
    var botaoHome = document.querySelector('.botaoHome a');
    botaoHome.addEventListener('click', function(event) {
        event.preventDefault(); // Impedir o comportamento padrão de redirecionamento
        scrollToSection('home'); // Substitua 'home' pelo ID da seção Home
    });

    // Botão "Problemas" - Navegação suave
    var botaoProblemas = document.querySelector('.botaoProblema a');
    botaoProblemas.addEventListener('click', function(event) {
        event.preventDefault(); // Impedir o comportamento padrão de redirecionamento
        scrollToSection('problemas'); // Substitua 'problemas' pelo ID da seção Problemas
    });

    // Função para rolar suavemente para uma seção
    function scrollToSection(sectionId) {
        var section = document.getElementById(sectionId);
        section.scrollIntoView({ behavior: 'smooth' });
    }
});