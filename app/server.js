const express = require("express");
const nunjucks = require("nunjucks");
const app = express();
const Screenshot = require("url-to-screenshot");
const fs = require("fs");
const parser = require("subtitles-parser");

function readData(path) {
  let data = fs.readFileSync(path, "utf8");
  return JSON.parse(data);
}

function getSubs(path) {
  const srt = fs.readFileSync(path, "utf8");
  const subs = parser.fromSrt(srt, true);
  return subs;
}

// from https://gist.github.com/mathewbyrne/1280286
function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/[^\w\-]+/g, "") // Remove all non-word chars
    .replace(/\-\-+/g, "-") // Replace multiple - with single -
    .replace(/^-+/, "") // Trim - from start of text
    .replace(/-+$/, ""); // Trim - from end of text
}

let studentData = readData("src/json/student-work.json");

console.log(studentData);

const staticDir = "./static/";
const screenshotDir = "img/student-work/";

studentData.courses.forEach(course => {
  course.items.forEach(item => {
    if (item.demoUrl) {
      let thescreenshot = new Screenshot(item.demoUrl)
        .clip()
        .timeout(3000)
        .capture()
        .then(img => {
          let imgName =
            staticDir + screenshotDir + "/" + slugify(item.demoUrl) + ".png";
          item.imgUrl = screenshotDir + "/" + slugify(item.demoUrl) + ".png";
          console.log(item.imgUrl);
          fs.writeFileSync(imgName, img);
        })
        .catch(function(err) {
          console.log(err);
        });
    }
  });
});

nunjucks.configure("./templates", {
  autoescape: true,
  express: app,
  watch: true
});

app.set("view engine", "html");
app.use(express.static(staticDir));

app.get("/", function(req, res) {
  res.render("index.html", {
    data: readData("src/json/homepage.json")
  });
});

app.get("/course", function(req, res) {
  res.render("course.html", {
    data: readData("src/json/course.json")
  });
});

app.get("/program", function(req, res) {
  res.render("program.html", {
    data: readData("src/json/program.json")
  });
});

app.get("/partners", function(req, res) {
  res.render("partners.html", {
    data: readData("src/json/partners.json")
  });
});

app.get("/team", function(req, res) {
  res.render("partners-team.html", {
    data: readData("src/json/team.json")
  });
});

app.get("/student-work", function(req, res) {
  res.render("student-work.html", {
    data: studentData
  });
});

let talkData = readData("src/json/weekly-nerd.json");
talkData.subtitles = getSubs("src/subs/talk.srt");
talkData.subtitles = JSON.stringify(talkData.subtitles);
talkData.slides = JSON.stringify(talkData.slides);

app.get("/weekly-nerd", function(req, res) {
  res.render("talk.html", {
    data: talkData
  });
});

app.get("/contact", function(req, res) {
  res.render("contact.html", {
    data: readData("src/json/contact.json")
  });
});

app.get("/signup", function(req, res) {
  res.render("signup.html", {
    data: readData("src/json/signup.json")
  });
});

app.get("/prototypes/slider", function(req, res) {
  res.render("prototypes/slider.html", {
    data: signupData
  });
});
app.get("/prototypes/slider-with-buttons", function(req, res) {
  res.render("prototypes/slider-buttons.html", {
    data: signupData
  });
});
app.listen(3000, () => console.log("Example app listening on port 3000!"));
