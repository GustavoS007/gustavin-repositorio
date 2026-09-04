document.addEventListener('DOMContentLoaded', function() {


    const formLogin = document.getElementById('formlogin');

    if (formLogin) {
        formLogin.addEventListener('submit', function(event) {
            
            event.preventDefault();

            const emailInput = document.getElementById('loginemail');
            const senhaInput = document.getElementById('loginsenha');

            const email = emailInput ? emailInput.value.trim() : '';
            const senha = senhaInput ? senhaInput.value.trim() : '';

            
            if (email === '' || !email.includes('@') || senha.length < 5) {
                alert('Preencha o e-mail corretamente e digite uma senha com no mínimo 5 caracteres.');
                return;
            }

           
            window.location.href = 'dashboard.html';
        });
    }


    
    const formCadastro = document.getElementById('formCadastro');

    if (formCadastro) {
        formCadastro.addEventListener('submit', function(event) {
            
            event.preventDefault();

            const emailInput = document.getElementById('email');
            const senhaInput = document.getElementById('senha');

            const email = emailInput ? emailInput.value.trim() : '';
            const senha = senhaInput ? senhaInput.value.trim() : '';

            
            if (email === '' || !email.includes('@') || senha.length < 5) {
                alert('Preencha o e-mail corretamente e digite uma senha com no mínimo 5 caracteres.');
                return;
            }

            
            window.location.href = 'dashboard.html';
        });
    }

});