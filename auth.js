document.addEventListener('DOMContentLoaded', function() {
    // Lógica de Registro
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        const newUsernameInput = document.getElementById('newUsername');
        const newPasswordInput = document.getElementById('newPassword');
        const confirmPasswordInput = document.getElementById('confirmPassword');
        const errorMessageRegister = document.getElementById('errorMessageRegister'); // ID único para msg de erro

        registerForm.addEventListener('submit', function(event) {
            event.preventDefault();
            if (!errorMessageRegister) return; // Proteção caso o elemento não exista
            errorMessageRegister.textContent = '';

            const newUsername = newUsernameInput.value.trim();
            const newPassword = newPasswordInput.value.trim();
            const confirmPassword = confirmPasswordInput.value.trim();

            if (newUsername === '' || newPassword === '' || confirmPassword === '') {
                errorMessageRegister.textContent = 'Por favor, preencha todos os campos.';
                return;
            }

            if (newPassword.length < 6) {
                errorMessageRegister.textContent = 'A senha deve ter pelo menos 6 caracteres.';
                return;
            }

            if (newPassword !== confirmPassword) {
                errorMessageRegister.textContent = 'As senhas não coincidem.';
                return;
            }

            // Simulação de registro (FRONTEND APENAS)
            // Em um cenário real, envie para um servidor.
            console.log('Dados de registro:', { username: newUsername, password: newPassword });
            alert('Cadastro bem-sucedido! (Simulação)\nRedirecionando para o login...');
            window.location.href = 'login.html'; // Redireciona para a página de login
        });
    }

    // Lógica de Login
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        const emailInput = document.getElementById('email'); // Assumindo ID 'email' para o campo de usuário/email
        const passwordInput = document.getElementById('password'); // Assumindo ID 'password' para o campo de senha
        const errorMessageLogin = document.getElementById('errorMessageLogin'); // ID único para msg de erro

        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            if (!errorMessageLogin) return;
            errorMessageLogin.textContent = '';

            const email = emailInput.value.trim();
            const password = passwordInput.value.trim();

            if (email === '' || password === '') {
                errorMessageLogin.textContent = 'Por favor, preencha todos os campos.';
                return;
            }

            // Simulação de login (FRONTEND APENAS)
            // Em um cenário real, valide as credenciais com um servidor.
            console.log('Dados de login:', { email: email, password: password });
            alert('Login bem-sucedido! (Simulação)\nRedirecionando para o painel...');
            // window.location.href = 'dashboard.html'; // Exemplo de redirecionamento
        });
    }
});

// A classe Cadastro e a lógica de armazenamento em `pessoas` de b.js foram omitidas
// por serem uma simulação de backend no frontend e a função criarConta ter problemas.
// Uma solução de backend real seria necessária para armazenar usuários.