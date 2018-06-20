const spatialNavigation = require("./spatial-navigation");
const focusOnScroll = require("./focus-on-scroll");
const Presentation = require("./presentation");
const Subtitles = require("./subtitles");
const nav = require("./nav");

if (document.querySelector(".presentation")) {
  const fpSubtitles = new Subtitles(
    document.querySelector(".subtitle"),
    subs,
    document.querySelector(".presentation .media")
  );

  const fpPresentation = new Presentation(
    document.querySelector(".presentation"),
    slides,
    fpSubtitles
  );

  fpPresentation.init();
  fpSubtitles.init();
}

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

  document.querySelectorAll(".focusable").forEach(item => {
    item.addEventListener("focus", item => {
      item.target.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center"
      });
    });
  });
}
