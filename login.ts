class Login {

    constructor() {

    }

    login() {
        const usernameInput = document.getElementById('username');
        const passwordInput = document.getElementById('password');

        let username = usernameInput.value;
        let password = passwordInput.value;


        if (username === 'akaljotg' && password === 'abc123') {
            this.goToHome();
        } else {
            this.displayError();
        }
    }

    goToHome() {
        window.location.href = 'index.html';
    }

    displayError() {
        const errorBox = document.getElementById('error-box');

        errorBox.innerText = 'User not found!';
        errorBox.style = "display: block;";

        const interval = setInterval(() => {
            errorBox.style = "display: none;";
            clearInterval(interval);
        }, 5000);
    }
}

const login = new Login();