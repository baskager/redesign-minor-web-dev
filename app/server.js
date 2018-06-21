const express = require("express");
const nunjucks = require("nunjucks");
const app = express();
var fs = require("fs");
var parser = require("subtitles-parser");

function readData(path) {
  let data = fs.readFileSync(path, "utf8");
  return JSON.parse(data);
}

let homepageData = readData("src/json/homepage.json");
let partnersData = readData("src/json/partners.json");
let teamData = readData("src/json/team.json");
let programData = readData("src/json/program.json");
let studentworkData = readData("src/json/student-work.json");
let talkData = readData("src/json/talk.json");
let signupData = readData("src/json/signup.json");
let contactData = readData("src/json/contact.json");=

function getSubs(path) {
  const srt = fs.readFileSync(path, "utf8");
  const subs = parser.fromSrt(srt, true);
  return subs;
}

talkData.subtitles = getSubs("src/subs/talk.srt");
talkData.subtitles = JSON.stringify(talkData.subtitles);
talkData.slides = JSON.stringify(talkData.slides);

nunjucks.configure("./templates", {
  autoescape: true,
  express: app,
  watch: true
});

app.set("view engine", "html");
app.use(express.static("./static"));

app.get("/", function(req, res) {
  res.render("index.html", {
    data: homepageData
  });
});

app.get("/course", function(req, res) {
  res.render("course.html", {
    data: courseData
  });
});

app.get("/program", function(req, res) {
  res.render("program.html", {
    data: programData
  });
});

app.get("/partners", function(req, res) {
  res.render("partners.html", {
    data: partnersData
  });
});

app.get("/team", function(req, res) {
  res.render("partners-team.html", {
    data: teamData
  });
});

app.get("/student-work", function(req, res) {
  res.render("student-work.html", {
    data: studentworkData
  });
});

app.get("/weekly-nerd", function(req, res) {
  res.render("talk.html", {
    data: talkData
  });
});

app.get("/contact", function(req, res) {
  res.render("contact.html", {
    data: contactData
  });
});

app.get("/signup", function(req, res) {
  res.render("signup.html", {
    data: signupData
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
