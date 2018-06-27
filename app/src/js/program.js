(function() {
  "use strict";

  // Mobile navigation toggle
  const submenuScroll = {
    init: function() {
      let submenuContainer = document.getElementById("submenu-container");
      let previousButton = document.getElementById("submenu-previous");
      let nextButton = document.getElementById("submenu-next");

      if(previousButton) {

        previousButton.addEventListener("click", function(e) {
          submenuContainer.scrollBy({
            left: -275
          });
        });
      }

        if(nextButton) {

        nextButton.addEventListener("click", function(e) {
          submenuContainer.scrollBy({
            left: 275
          });
        });
      }
    }
  };

  if (document.getElementById("submenu-container")) {
    submenuScroll.init();
  }
})();
