var keyNavSwitch = true;

var keyNav = function() {
  if (keyNavSwitch == true) {
    document.addEventListener(
      "keyup",
      function(e) {
        // 1
        if (e.keyCode == 49) {
          window.location.href = "/";
        }
        // 2
        else if (e.keyCode == 50) {
          window.location.href = "/program";
        }
        // 3
        else if (e.keyCode == 51) {
          window.location.href = "/partners";
        }
        // 4
        else if (e.keyCode == 52) {
          window.location.href = "/student-work";
        }
        // 5
        else if (e.keyCode == 53) {
          window.location.href = "/contact";
        }
        // 6
        else if (e.keyCode == 54) {
          window.location.href = "/signup";
        }
      },
      false
    );
  }
};

var inputCheck = function() {
  var inputText = document.querySelectorAll("input[type=text]");
  // var inputArea = document.querySelectorAll("textarea");

  inputText.forEach(el => {
    el.addEventListener("focus", el => {
      keyNavSwitch = false;
    });
  });

  keyNav();
};

inputCheck();
