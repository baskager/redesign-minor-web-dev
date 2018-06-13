(function(){
    const   signUpForm = document.querySelector('.sign-up-form'),
            coursesProgram = document.querySelectorAll('.course-cssttr')

    if (signUpForm) {
        const signUpBtn = signUpForm.querySelector('input[type="submit"]')
        
        signUpBtn.addEventListener('click', function() {
            // if (signUpForm.checkValidity()) {
                if (true) {
                signUpForm.classList.add('form-submit')
            } 
        })
    }

    if(coursesProgram) {
        coursesProgram.forEach(course => {
            course.addEventListener('click', function(event) {
                
                const stopHref = function() {
                    event.preventDefault()
                    course.classList.add('flip-2-hor-top-fwd')
                },

                linkPage = function() {
                    const href = course.querySelector('a').href
                    window.location.href = href
                }
                stopHref()
                window.setTimeout(linkPage, 1000)
            })
        })
    }
})()