(function() {
  "use strict";

  // Main function. Here we need to toggle the quicknavigation
  const keyNav = {
    // Set core functionality states. The hotKeyState will be saved in a cookie.
    cmdState: false,
    keyNavState: false,
    init: function() {
      let _this = this;
      let keyNavState = _this.keyNavState;

      // Check if the CMD state is used, since it has some OS functionality it should be blocked.
      window.addEventListener("keydown", function(e) {
        if (e.keyCode === 91) {
          _this.cmdState = true;
        }
        if ((e.altKey || e.keyCode === 18) && (e.ctrlKey || e.keyCode === 17)) {
          keyNavState = true;
          keyNavSwitch.init(keyNavState);
        }
      });
      window.addEventListener("keyup", function(e) {
        if (e.keyCode === 91) {
          _this.cmdState = false;
        }
      });
    }
  };

  // Set buttons for the navigation with keys
  const keyNavKeys = {
    init: function keyNavKeys(e) {
      if (!keyNav.cmdState) {
        // Set key to 1
        if (e.keyCode === 49) {
          window.location.href = "/";
        }
        // Set key to 2
        else if (e.keyCode === 50) {
          window.location.href = "/program";
        }
        // Set key to 3
        else if (e.keyCode === 51) {
          window.location.href = "/partners";
        }
        // Set key to 4
        else if (e.keyCode === 52) {
          window.location.href = "/student-work";
        }
        // Set key to 5
        else if (e.keyCode === 53) {
          window.location.href = "/contact";
        }
        // Set key to 6
        else if (e.keyCode === 54) {
          window.location.href = "/signup";
        }
      }
    }
  };

  // Add functionality to the keys
  const keyNavSwitch = {
    init: function(keyNavState) {
      // Get all rectangles with numbers next to the menu items
      let getSpan = document.querySelectorAll(".main-nav div > ul a span");
      // Get all input elements
      let getInput = document.querySelectorAll("input, textarea");

      // Add eventlistener to all keys when keyNavState === true
      document.addEventListener("keydown", function(e) {
        if (keyNavState === true) {
          keyNavKeys.init(e);
        }
      });

      // Disable keyCode navigation when an input field has focus
      getInput.forEach(function(input) {
        input.addEventListener("focus", function(input) {
          keyNavState = false;

          // Add 'inactive' styling to the rectangles
          getSpan.forEach(function(span) {
            span.classList.add("inactive");
          });
        });
      });

      // Enable keyCode navigation when input field loses focus
      getInput.forEach(function(el) {
        el.addEventListener("focusout", function(el) {
          keyNavState = true;

          // Remove 'inactive' styling on the rectangles
          getSpan.forEach(function(span) {
            span.removeAttribute("class");
          });
        });
      });
    }
  };

  keyNav.init();
})();
