  //funcao para ir pra pagina de login
  function redirectToLogin() {
    window.location.href = "index-login.html";
  }

  //funcao para ir pra pagina de registro do sindico
  function redirectToSindicoRegistration() {
    window.location.href = "index-register-sind.html";
  }

  //funcao para ir pra pagina de registro do administrador
  function redirectToAdminRegistration() {
    window.location.href = "index-register-admin.html";
  }

  //eventos de cliques dos botoes
  document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("loginBtn").addEventListener("click", redirectToLogin);
    document.getElementById("sindicoBtn").addEventListener("click", redirectToSindicoRegistration);
    document.getElementById("adminBtn").addEventListener("click", redirectToAdminRegistration);
  });

  //responsividade
  window.addEventListener('resize', () => {
    // Função para ajustar o layout em diferentes tamanhos de tela
    adjustLayout();
  });
  
  window.addEventListener('DOMContentLoaded', () => {
    // Chamando a função para ajustar o layout quando a página é carregada
    adjustLayout();
  });
  
  function adjustLayout() {
    const screenWidth = window.innerWidth;
  
    // Exemplo: Alterar o layout se a largura da tela for menor que 768px
    if (screenWidth < 768) {
      // Modificar o layout conforme necessário para telas pequenas
      document.querySelector('.nav-list').style.display = 'none';
      document.querySelector('.login-registro-btns').style.display = 'none';
      // Outras modificações necessárias...
    } else {
      // Restaurar o layout para telas maiores
      document.querySelector('.nav-list').style.display = 'flex';
      document.querySelector('.login-registro-btns').style.display = 'flex';
      // Outras modificações necessárias...
    }
  }