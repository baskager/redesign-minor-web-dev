(function() {
  "use strict";

  // Main function. Here we need to toggle the quicknavigation
  const keyNav = {
    // Set core functionality states. The hotKeyState will be saved in a cookie.
    // Key value of objects
    cmdState: false,
    keyNavState: true,

    init: function() {
      keyNavToggle.toggleState();
      keyNavToggle.toggleIndicators();
      keyNavToggle.toggleOnInput();
      eventListeners.onKeyUp();
      eventListeners.onKeyDown();
    }
  };

  const keyNavToggle = {
    mainIndicator: document.getElementById("keynav"),
    menuIndicators: document.querySelectorAll(".main-nav div > ul a span"),

    toggleState: function(e) {
      // Check the state of the hotkeys that is stored in localstorage.
      if (!storage.get("hotKeysEnabled")) {
        storage.store("hotKeysEnabled", keyNav.keyNavState);
      } else {
        keyNav.keyNavState = storage.get("hotKeysEnabled");
      }
    },

    toggleIndicators: function(e) {
      if (keyNav.keyNavState) {
        this.mainIndicator.classList.add("active");
        this.menuIndicators.forEach(function(indicator) {
          indicator.classList.add("active");
        });
      } else {
        this.mainIndicator.classList.remove("active");
        this.menuIndicators.forEach(function(indicator) {
          indicator.removeAttribute("class");
        });
      }
    },

    toggleOnInput: function(e) {
      if (keyNav.keyNavState) {
        let getInput = document.querySelectorAll("input, textarea");

        getInput.forEach(function(e) {
          eventListeners.inputFocus(e);
          eventListeners.inputLeave(e);
        });
      }
    }
  };

  const storage = {
    // Store data in localstorage
    store: function(key, data) {
      // create string from value so we can convert it back to js later.
      localStorage.setItem(key, JSON.stringify(data));
    },

    // Getting data from the localstorage
    get: function(key) {
      let data = localStorage.getItem(key);
      return JSON.parse(data);
    }
  };

  // Set buttons for the navigation with keys
  const keyNavKeys = {
    keyNavKeys: function(e) {
      var paths = {
        49: "/",
        50: "/program",
        51: "/partners",
        52: "/student-work",
        53: "/contact",
        54: "/signup"
      };

      if (!keyNav.cmdState && keyNav.keyNavState && e.keyCode in paths) {
        window.location.href = paths[e.keyCode];
      }
    }
  };

  const eventListeners = {
    onKeyDown: function(e) {
      window.addEventListener("keydown", function(e) {
        // checken op metakey
        if (e.keyCode === 91) {
          keyNav.cmdState = true;
        }

        if ((e.altKey || e.keyCode === 18) && (e.ctrlKey || e.keyCode === 17)) {
          // Set the opposite of what the current keyNavState is
          keyNav.keyNavState = !keyNav.keyNavState;
          storage.store("hotKeysEnabled", keyNav.keyNavState);

          // Retoggle the state of the indicator
          keyNavToggle.toggleState();
          keyNavToggle.toggleIndicators();
        }

        keyNavKeys.keyNavKeys(e);
      });
    },

    onKeyUp: function(e) {
      window.addEventListener("keyup", function(e) {
        if (e.keyCode === 91) {
          self.cmdState = false;
        }
      });
    },

    inputFocus: function(e) {
      e.addEventListener("focus", function(e) {
        console.log("focus");
        keyNav.keyNavState = false;

        // Add 'inactive' styling to the rectangles
        keyNavToggle.menuIndicators.forEach(function(indicator) {
          indicator.classList.add("inactive");
        });
      });
    },

    inputLeave: function(e) {
      e.addEventListener("focusout", function(e) {
        console.log("focusout");
        keyNav.keyNavState = true;

        // Add 'inactive' styling to the rectangles
        keyNavToggle.menuIndicators.forEach(function(indicator) {
          indicator.classList.remove("inactive");
        });
      });
    }
  };

  keyNav.init();
})();
