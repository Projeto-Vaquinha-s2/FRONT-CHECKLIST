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

