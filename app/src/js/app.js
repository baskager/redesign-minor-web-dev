window.addEventListener("load", function() {
  SpatialNavigation.init();
  SpatialNavigation.add({ selector: ".focusable" });
  SpatialNavigation.makeFocusable();
  // SpatialNavigation.focus();
});
