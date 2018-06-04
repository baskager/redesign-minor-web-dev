const express = require('express');
const nunjucks = require("nunjucks");
const app = express();

const homepageData = {
    title: "Homepage"
};

const programData = {
    title: "Program"
};

const partnersData = {
    title: "Program"
};

const teamData = {
    title: 'Ons Team',
    heading: 'Ons Team',
    description: 'Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Etiam porta sem malesuada magna mollis euismod. Vestibulumid ligula porta felis euismod semper.',
    members: [{
        fullName: 'James Peter Perrone Jefferies',
        description: 'Something about me!',
        avatarURL: '/img/avatars/james.png',
        gitHubURL: 'https://www.google.nl'
    },
    {
        fullName: 'James Peter Perrone Jefferies',
        description: 'Something about me!',
        avatarURL: '/img/avatars/james.png',
        gitHubURL: 'https://www.google.nl'
    }]
};

nunjucks.configure('./templates', {
    autoescape: true,
    express: app,
    watch: true
});

app.set("view engine", "html");
app.use(express.static('./static'));

app.get('/', function (req, res) {
    res.render('index.html', {
        data: homepageData
    })
});

app.get('/program', function (req, res) {
    res.render('program.html', {
        data: programData
    })
});

app.get('/partners', function (req, res) {
    res.render('partners-team.html', {
        data: programData
    })
});

app.get('/team', function (req, res) {
    res.render('partners-team.html', {
        data: teamData
    })
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));

nunjucks.configure("templates", {
    autoescape: true,
    express: app
});