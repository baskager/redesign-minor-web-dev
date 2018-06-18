(function() {
  "use strict";

  // Set buttons for the navigation with keys
  const keyNav = function keyNav(e) {
    // if() {
    event.preventDefault();
    // 1
    if (e.keyCode === 49) {
      window.location.href = "/";
    }
    // 2
    else if (e.keyCode === 50) {
      window.location.href = "/program";
    }
    // 3
    else if (e.keyCode === 51) {
      window.location.href = "/partners";
    }
    // 4
    else if (e.keyCode === 52) {
      window.location.href = "/student-work";
    }
    // 5
    else if (e.keyCode === 53) {
      window.location.href = "/contact";
    }
    // 6
    else if (e.keyCode === 54) {
      window.location.href = "/signup";
    }
    // }
  };

  // Add functionality to the keys
  const keyNavSwitch = function() {
    let keyNavState = true;

    // Add eventlistener to all keys
    document.addEventListener("keyup", function(e) {
      if (keyNavState === true) {
        keyNav(e);
      }
    });

    // Get all rectangles with numbers next to the menu items
    let getSpan = document.querySelectorAll(".main-nav span");

    // Get all input elements
    let getInput = document.querySelectorAll("input, textarea");

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
  };

  keyNavSwitch();
})();
