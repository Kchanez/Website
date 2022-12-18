0
        const LoginForm = document.querySelector("form.login");
        const SignupForm = document.querySelector("form.signup");
        const LoginBtn = document.querySelector("label.login");
        const SignupBtn = document.querySelector("label.signup");

        const loginText = document.querySelector(".title-txt .login");
        const SignupText = document.querySelector(".title-txt .signup");
        
        SignupBtn.onclick = (()=>{
            LoginForm.style.marginLeft = "-50%";
            loginText.style.marginLeft = "-50%";
        });
        LoginBtn.onclick = (()=>{
            LoginForm.style.marginLeft = "0%";
            loginText.style.marginLeft = "0%";
        
        });

        
        