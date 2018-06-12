const calcVisibilityForElem = (elem) => {
  const windowHeight = window.innerHeight;
  const docScroll = window.pageYOffset || document.documentElement.scrollTop;
  const divPosition = elem.offsetTop;
  const divHeight = elem.offsetHeight;
  const hiddenBefore = docScroll - divPosition;
  const hiddenAfter = divPosition + divHeight - (docScroll + windowHeight);

  if (
    docScroll > divPosition + divHeight ||
    divPosition > docScroll + windowHeight
  ) {
    return 0;
  } else {
    let result = 100;

    if (hiddenBefore > 0) {
      result -= hiddenBefore * 100 / divHeight;
    }

    if (hiddenAfter > 0) {
      result -= hiddenAfter * 100 / divHeight;
    }

    return result / 1.5;
  }
};

const calcVisibilityForAllArticles = () => {
  document.querySelectorAll('article').forEach((item) => {
    const top = calcVisibilityForElem(item);
    if (top !== 0) {
      item.querySelector('img').style.transform = `translateY(${Math.floor(
        top * -0.8
      )}px)`;
    }
  });
};

document.onscroll = () => {
  calcVisibilityForAllArticles();
};

window.addEventListener('load', function () {
  calcVisibilityForAllArticles();
});