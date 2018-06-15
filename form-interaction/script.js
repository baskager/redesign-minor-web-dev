const emailDomain = {
    gmail: {
        domain: 'gmail.com'
    },
    hotmail: {
        domain: 'hotmail.com'
    },
    me: {
        domain: 'me.com'
    },
    live: {
        domain: 'live.com'
    },
    yahoo: {
        domain: 'yahoo.com'
    },
    liveNl: {
        domain: 'live.nl'
    },
    fuga: {
        domain: 'fuga.com'
    },
    hva: {
        domain: 'hva.nl'
    }
}

const emailEnd = document.querySelector('.form2 #email-end')

emailEnd.addEventListener('keyup', function() {
    const val = emailEnd.value

    Object.keys(emailDomain).forEach(email => {
        if (val == emailDomain[email].domain.charAt(0)) {
            
            const   elA = document.createElement('a'),
                    autocomplete = document.querySelector('.autocomplete ul'),
                    elLi = document.createElement('li')

            autocomplete.parentElement.classList.remove('gone')

            elA.innerHTML = emailDomain[email].domain
            elA.href = "#"
            elA.addEventListener('click', event => {
                event.preventDefault()
                emailEnd.value = elA.innerHTML
                autocomplete.parentElement.classList.add('gone')
            })

            elLi.appendChild(elA)
            autocomplete.appendChild(elLi)
        }
    })
})