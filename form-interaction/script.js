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

const letters = {
  11: {
    value: "a"
  },
  12: {
    value: "b"
  },
  13: {
    value: 'c'
    },
  14: {
    value: 'd'
    },
  15: {
    value: 'e'
    },
  21: {
    value: 'f'
    },
  22: {
    value: 'g'
    },
  23: {
    value: 'h'
    },
  24: {
    value: 'i'
    },
  25: {
    value: 'j'
    },
  31: {
    value: 'k'
    },
  32: {
    value: 'l'
    },
  33: {
    value: 'm'
    },
  34: {
    value: 'n'
    },
  35: {
    value: 'o'
    },
  41: {
    value: 'p'
    },
  42: {
    value: 'q'
    },
  43: {
    value: 'r'
    },
  44: {
    value: 's'
    },
  45: {
    value: 't'
    },
  51: {
    value: 'u'
    },
  52: {
    value: 'v'
    },
  53: {
    value: 'w'
    },
  54: {
    value: 'x'
    },
  55: {
    value: 'z'
    },
};

const emailEnd = document.querySelector('.form2 #email-end')

emailEnd.addEventListener('keyup', function() {
    const val = emailEnd.value

    Object.keys(emailDomain).forEach(email => {
        if (val == emailDomain[email].domain.charAt(0)) {
            
            const   elA = document.createElement('a'),
                    autocomplete = document.querySelector('.autocomplete ul'),
                    elLi = document.createElement('li');

            autocomplete.parentElement.classList.remove('gone');

            elA.innerHTML = emailDomain[email].domain;
            elA.href = "#";
            elA.addEventListener('click', event => {
                event.preventDefault();
                emailEnd.value = elA.innerHTML;
                autocomplete.parentElement.classList.add('gone');
            })

            elLi.appendChild(elA)
            autocomplete.appendChild(elLi)
        }
    })
})

const focus = document.querySelectorAll('.form3 .naam input')

Object.keys(letters).forEach(letter => {
    focus.forEach(el => {

      el.addEventListener('focus', function() {
        const keyBoard = document.querySelector('.keyboard');
        keyBoard.classList.add('show')
        const   column = document.querySelector('.column'),
                rows = document.querySelectorAll('.row');
        column.classList.add('active');

        el.addEventListener('keyup', function () {
          
          rows.forEach(row => {
            row.classList.add('active');
            column.classList.remove('active');
          });

          let userInput = [];

          if (this.value == '') {
            rows.forEach(row => {
              row.classList.remove('active');
              column.classList.add('active');
            });
          }
          
          if (this.value == letter) {
            userInput.push(letters[letter].value);
            el.value = userInput;
            this.nextElementSibling.focus()
          }
        })
      })
    })
});