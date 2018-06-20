const allFocusableElements = document.querySelectorAll(
  'a, input, select, textarea, button'
);
const backToNavigationLinks = document.querySelectorAll('.back-to-navigation');
const firstNavItem = document.getElementById('first-navigation-item');

backToNavigationLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    firstNavItem.focus();
  });
});

allFocusableElements.forEach(element => {
  element.addEventListener('mouseover', () => {
    element.focus();
  });
});
