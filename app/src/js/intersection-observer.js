const   scrollTransitions = 'scroll-transition',
        els = document.querySelectorAll('[' + scrollTransitions + ']')

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        entry.target.classList.add('trans')
        if(entry.intersectionRatio != 0) {
            console.log(entry.target)
            entry.target.classList.add('add-transition')
            window.setTimeout(function() {
                entry.target.classList.add('start-transition')
            }, 1)
        }
    })
})
els.forEach(el => {
    observer.observe(el)
})