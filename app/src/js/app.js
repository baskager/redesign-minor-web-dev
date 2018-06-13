window.addEventListener("load", function() {
  SpatialNavigation.init();
  SpatialNavigation.add({ selector: ".focusable" });
  SpatialNavigation.makeFocusable();
  // SpatialNavigation.focus();
});

document.querySelectorAll(".focusable").forEach(item => {
  item.addEventListener("focus", item => {
    item.target.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center"
    });
  });
});
