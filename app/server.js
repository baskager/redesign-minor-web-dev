const express = require('express');
const nunjucks = require("nunjucks");
const app = express();

const homepageData = {
    title: "Homepage"
};

const programData = {
    title: "Program"
};

const courseData = {
    title: "Course"
};

nunjucks.configure('./templates', {
    autoescape: true,
    express: app,
    watch: true
});

app.set("view engine", "html");
app.use(express.static('./static'));

app.get('/', function(req, res) {
    res.render('index.html', {
        data: homepageData
    });
});

app.get('/course', function (req, res) {
    res.render('index.html', {
        data: courseData
    });
});

app.get('/program', function(req, res) {
    res.render('program.html', {
        data: programData
    });
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));

nunjucks.configure("templates", {
  autoescape: true,
  express: app
});

