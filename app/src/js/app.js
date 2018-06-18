window.addEventListener("load", function() {
  if (document.querySelector(".focusable")) {
    const firstPeriode = document.querySelector(
      ".timeline-wrapper:first-of-type > section"
    );
    const firstPeriodeArticles = firstPeriode.querySelectorAll(
      "article:nth-of-type(-n+3) a"
    );

    firstPeriodeArticles.forEach(article => {
      article.setAttribute("data-sn-up", "#");
    });

    SpatialNavigation.init();
    SpatialNavigation.add({ selector: ".focusable" });
    SpatialNavigation.makeFocusable();
  }
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
