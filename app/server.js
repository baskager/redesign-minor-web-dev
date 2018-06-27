const express = require("express");
const nunjucks = require("nunjucks");
const app = express();
const massive = require("massive");
const monitor = require("pg-monitor");
const debug = require("debug")("minor-server");
const config = require("./config");
const DataStore = require("./src/classes/DataStore.class");
const compression = require("compression");
const fs = require("fs");
const parser = require("subtitles-parser");

function readData(path) {
  let data = fs.readFileSync(path, "utf8");
  return JSON.parse(data);
}

function getSubs(path) {
  const srt = fs.readFileSync(path, "utf8");
  return parser.fromSrt(srt, true);
}

nunjucks.configure("./templates", {
  autoescape: true,
  express: app,
  watch: true
});

app.set("view engine", "html");
app.use(compression());
app.use(express.static("./static"));

// Overwrite config for the postgres host on production servers
if (app.get("env") == "production") {
  config.postgres.host = "postgres";
}

// Use the Massive datamapper to connect to the database
massive(config.postgres).then(database => {
  // Create a Datastore object (handles the database queries)
  let dataStore = new DataStore(database);
  // Attach a monitor so we get nice logs about the database usage
  monitor.attach(database.driverConfig);

  // E.G. /program/web-design
  app.get("/program/:pageSlug", function(req, res) {
    /*
      Get the pageslug from the Express server
      The pageslug identifies what page we are on
      E.G.: 'course/web-design' or 'course/real-time-web'
    */
    let pageSlug = req.params.pageSlug;
    /*
      Tell the datastore to fetch a course with the
      given pageslug and render the page with the received data.
    */
    dataStore
      .getCourseForCourseOverview({ page_slug: pageSlug })
      .then(courseData => {
        res.render("course.html", {
          data: courseData[0]
        });
      });
  });

  app.get("/program", function(req, res) {
    pageData = readData("src/json/program.json");
    /* 
      Tell the datastore to fetch a course with the 
      given pageslug and render the page with the received data. 
    */
    dataStore.getPeriodForTimeline().then(periods => {
      // Add the weekly nerd card to each period
      for (let period of periods) {
        if (period) period.courses.push(pageData.weekly_nerd_card);
      }
      pageData.periods = periods;

      res.render("program.html", {
        data: pageData
      });
    });
  });
});

app.get("/", function(req, res) {
  res.render("index.html", {
    data: readData("src/json/homepage.json")
  });
});

// app.get("/program", function(req, res) {
//   res.render("prograAm.html", {
//     data: readData("src/json/program.json")
//   });
// });

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
    data: readData("src/json/student-work.json")
  });
});

let talkData = readData("src/json/talk.json");
talkData.subtitles = getSubs("src/subs/talk.srt");
talkData.subtitles = JSON.stringify(talkData.subtitles);
talkData.slides = JSON.stringify(talkData.slides);

app.get("/program/weekly-nerd/vitaly-friedman", function(req, res) {
  res.render("talk.html", {
    data: talkData
  });
});

app.get("/program/weekly-nerd", function(req, res) {
  res.render("weekly-nerd.html", {
    data: readData("src/json/weekly-nerd.json")
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
    data: null
  });
});
app.get("/prototypes/slider-with-buttons", function(req, res) {
  res.render("prototypes/slider-buttons.html", {
    data: null
  });
});
app.listen(config.port, () => {
  console.log("Postgres will connect to: http://" + config.postgres.host);
  console.log("Example app listening on port: " + config.port);
});
