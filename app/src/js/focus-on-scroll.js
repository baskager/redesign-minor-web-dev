const allArticles = document.querySelectorAll('.focusOnScroll');

let pauseFocusOnScroll = false;

function isScrolledIntoView(element) {
  const elemTop = element.getBoundingClientRect().top;
  const elemBot = element.getBoundingClientRect().bottom;
  const elemMid = (elemTop + elemBot) / 2;
  const offset = (window.innerHeight / 100) * 10;

  return (
    elemMid >= window.innerHeight / 2 - offset &&
    elemMid <= window.innerHeight / 2 + offset
  );
}

function setFocusState(article) {
  if (article.querySelector('a, input, select, textarea, button')) {
    const articleFirstLink = article.querySelector(
      'a, input, select, textarea, button'
    );
    const allArticleLinks = article.querySelectorAll(
      'a, input, select, textarea, button'
    );
    for (let i = 0; i < allArticleLinks.length; i++) {
      if (document.activeElement === allArticleLinks[i]) {
        return false;
      }
    }
    console.log(articleFirstLink, 'Focused');
    articleFirstLink.focus();
  }
}

function checkAllArticles() {
  allArticles.forEach(article => {
    if (isScrolledIntoView(article)) {
      setFocusState(article);
    }
  });
}

window.addEventListener('scroll', () => {
  if (!pauseFocusOnScroll) {
    checkAllArticles();
  }
});

window.addEventListener('keydown', e => {
  if (e.keyCode === 32 || e.keyCode === 38 || e.keyCode === 40) {
    checkAllArticles();
  } else {
    pauseFocusOnScroll = true;
    setTimeout(() => {
      pauseFocusOnScroll = false;
    }, 1000);
  }
});
