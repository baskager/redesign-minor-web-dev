var keyNavSwitch = true;
document.addEventListener("keyup", function(e) {
  if (keyNavSwitch === true) {
    keyNav(e);
  }
});

var keyNav = function(e) {
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
};

var input = document.querySelectorAll("input, textarea");
console.log(input);

input.forEach(el => {
  el.addEventListener("focus", el => {
    keyNavSwitch = false;
  });
});

input.forEach(el => {
  el.addEventListener("focusout", el => {
    keyNavSwitch = true;
  });
});
