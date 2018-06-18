(function() {
  "use strict";

  // Set buttons for the navigation with keys
  const keyNav = function keyNav(e) {
    const getModSpan = document.querySelector(".main-nav li > span");
    if (e.altKey || e.keyCode === 18) {
      getModSpan.classList.add("active");
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
    } else {
      getModSpan.removeAttribute("class");
    }
    if (e.altKey || e.keyCode === 18) {
      document.addEventListener("keyup", function(e) {
        getModSpan.removeAttribute("class");
      });
    }
  };

  // Add functionality to the keys
  const keyNavSwitch = function() {
    let keyNavState = true;
    // Get all rectangles with numbers next to the menu items
    let getSpan = document.querySelectorAll(".main-nav div > ul a span");
    // Get all input elements
    let getInput = document.querySelectorAll("input, textarea");

    // Add eventlistener to all keys
    document.addEventListener("keydown", function(e) {
      if (keyNavState === true) {
        keyNav(e);
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
  };

  keyNavSwitch();
})();
