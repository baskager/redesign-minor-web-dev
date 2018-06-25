/**
 * @author  James Peter Perrone Jefferies
 * @version 1.0
 * @since   21-06-2018
 **/

const styleElement = document.getElementById('styleElement');
const headerCodeEditor = document.getElementById('headerCodeEditor');
const replayAnimationBtn = document.getElementById('replayAnimation');

const additionalHeaderStyling = `
  .hero {
    background-color: #09012f;
  }

  .hero h1,
  .hero p {
    color: #FFFFFF;
  }

  .hero h1,
  .hero a {
    text-transform: uppercase;
  }

  .hero h1 span {
    background-color: #FFFFFF;
    color: #09012f;
    padding: 1.5rem;
  }

  .hero a {
    background-color: #6A00F5;
    color: #FFFFFF;
    padding: 1rem 3.5rem;
    font-weight: bold;
    border-radius: 4.375rem;
    box-shadow: 0.25rem 0 1.5rem rgba(0, 0, 0, 0.25);
  }
`;

if (styleElement && headerCodeEditor && replayAnimationBtn) {
  let currentCharacter = 0;
  let debounceTimeout = null;

  function typewriterAnimation() {
    setTimeout(() => {
      styleElement.innerHTML += additionalHeaderStyling[currentCharacter];
      headerCodeEditor.querySelector('code').innerHTML +=
        additionalHeaderStyling[currentCharacter];
      currentCharacter++;
      headerCodeEditor.scrollTop = headerCodeEditor.scrollHeight;
      if (currentCharacter < additionalHeaderStyling.length) {
        if (additionalHeaderStyling[currentCharacter] === '}') {
          hljs.highlightBlock(headerCodeEditor);
        }
        typewriterAnimation();
      }
    }, 10);
  }

  function removeHTMLTags(element) {
    return element.innerHTML.replace(/\<.*?\>/g, '');
  }

  function replayTypewriterAnimation() {
    currentCharacter = 0;
    console.log(currentCharacter);
    styleElement.innerHTML = '';
    headerCodeEditor.querySelector('code').innerHTML = '';
    typewriterAnimation();
  }

  headerCodeEditor.addEventListener('keyup', () => {
    clearTimeout(debounceTimeout);
    debounceTimeout = setTimeout(() => {
      styleElement.innerHTML = '';
      styleElement.innerHTML += removeHTMLTags(
        headerCodeEditor.querySelector('code')
      );
    }, 1000);
  });

  replayAnimationBtn.addEventListener('click', () => {
    replayTypewriterAnimation();
  });

  typewriterAnimation();
}
