// (function() {
//   "use strict";

//   // Set buttons for the navigation with keys
//   const keyNav = function keyNav(e) {
//     // Get visual modifier element "alt +"
//     const getModSpan = document.querySelector(".main-nav li > span");

//     // Check if alt is pressed before going further
//     if (e.altKey || e.keyCode === 18) {
//       // Add active class on keyDown
//       getModSpan.classList.add("active");

//       // Set key to 1
//       if (e.keyCode === 49) {
//         window.location.href = "/";
//       }
//       // Set key to 2
//       else if (e.keyCode === 50) {
//         window.location.href = "/program";
//       }
//       // Set key to 3
//       else if (e.keyCode === 51) {
//         window.location.href = "/partners";
//       }
//       // Set key to 4
//       else if (e.keyCode === 52) {
//         window.location.href = "/student-work";
//       }
//       // Set key to 5
//       else if (e.keyCode === 53) {
//         window.location.href = "/contact";
//       }
//       // Set key to 6
//       else if (e.keyCode === 54) {
//         window.location.href = "/signup";
//       }
//     } else {
//       getModSpan.removeAttribute("class");
//     }
//     // Remove the whole active class when alt key is released
//     if (e.altKey || e.keyCode === 18) {
//       document.addEventListener("keyup", function(e) {
//         getModSpan.removeAttribute("class");
//       });
//     }
//   };

//   // Add functionality to the keys
//   const keyNavSwitch = function() {
//     let keyNavState = true;
//     // Get all rectangles with numbers next to the menu items
//     let getSpan = document.querySelectorAll(".main-nav div > ul a span");
//     // Get all input elements
//     let getInput = document.querySelectorAll("input, textarea");

//     // Add eventlistener to all keys
//     document.addEventListener("keydown", function(e) {
//       if (keyNavState === true) {
//         keyNav(e);
//       }
//     });

//     // Disable keyCode navigation when an input field has focus
//     getInput.forEach(function(input) {
//       input.addEventListener("focus", function(input) {
//         keyNavState = false;

//         // Add 'inactive' styling to the rectangles
//         getSpan.forEach(function(span) {
//           span.classList.add("inactive");
//         });
//       });
//     });

//     // Enable keyCode navigation when input field loses focus
//     getInput.forEach(function(el) {
//       el.addEventListener("focusout", function(el) {
//         keyNavState = true;

//         // Remove 'inactive' styling on the rectangles
//         getSpan.forEach(function(span) {
//           span.removeAttribute("class");
//         });
//       });
//     });
//   };

//   // LETS GO KEYNAVSWITCHERINO
//   keyNavSwitch();
// })();

(function() {
  "use strict";

  // Set buttons for the navigation with keys
  const keyNav = function keyNav(e) {
    // Get visual modifier element "alt +"
    const getModSpan = document.querySelector(".main-nav li > span");

    // Check if alt is pressed before going further
    if (e.altKey || e.keyCode === 18) {
      // Add active class on keyDown
      getModSpan.classList.add("active");

      // Set key to 1
      if (e.keyCode === 48) {
        document.getElementById("main").focus();
      }
      // Set key to 1
      if (e.keyCode === 49) {
        document.getElementById("menu-item-1").focus();
      }
      // Set key to 2
      else if (e.keyCode === 50) {
        document.getElementById("menu-item-2").focus();
      }
      // Set key to 3
      else if (e.keyCode === 51) {
        document.getElementById("menu-item-3").focus();
      }
      // Set key to 4
      else if (e.keyCode === 52) {
        document.getElementById("menu-item-4").focus();
      }
      // Set key to 5
      else if (e.keyCode === 53) {
        document.getElementById("menu-item-5").focus();
      }
      // Set key to 6
      else if (e.keyCode === 54) {
        document.getElementById("menu-item-6").focus();
      }
    } else {
      getModSpan.removeAttribute("class");
    }
    // Remove the whole active class when alt key is released
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

  // LETS GO KEYNAVSWITCHERINO
  keyNavSwitch();
})();
