const   signUpForm = document.querySelector('.sign-up-form'),
        signUpBtn = signUpForm.querySelector('input[type="submit"]')

    signUpBtn.addEventListener('click', function() {
        if (signUpForm.checkValidity()) {
            signUpForm.classList.add('form-submit')
        } 
    })