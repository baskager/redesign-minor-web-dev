const   scrollTransitions = 'scroll-transition',
        els = document.querySelectorAll('[' + scrollTransitions + ']'),
        config = {
            threshold: 0.33
        }

if (els) {

    if (IntersectionObserver) {

        els.forEach(el => {
            el.classList.add('trans')
        })

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if(entry.intersectionRatio != 0) {
                    window.setTimeout(function() {
                        entry.target.classList.add('start-transition')
                    }, 100)
                    observer.unobserve(entry.target)
                }
            })
        }, config)

        els.forEach(el => {
            observer.observe(el)
        })
    }
}