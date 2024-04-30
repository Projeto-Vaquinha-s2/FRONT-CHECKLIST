//função basica para formatar cpf
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
