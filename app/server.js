const express = require('express');
const IncludeWithNunjucksExtension = require('nunjucks-include-with');
const nunjucks = require("nunjucks");
const app = express();

const homepageData = {
    title: "Homepage"
};

const programData = {
    title: "Program"
};

const courseData = {
    title: "Course",
    description: "Here comes the description for the course. Here comes the description for the course. Here comes the description for the course."
};

const partnersData = {
    title: 'Partners',
    heading: 'Partners',
    description: 'Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Etiam porta sem malesuada magna mollis euismod. Vestibulumid ligula porta felis euismod semper.',
    linkText: 'Naar het project',
    members: [{
        fullName: 'OBA',
        description: 'Something about OBA!',
        avatarURL: '/img/avatars/oba.png',
        gitHubURL: 'https://www.google.nl'
    },
    {
        fullName: 'Keuvel',
        description: 'Something about keuvel!',
        avatarURL: '/img/avatars/keuvel.png',
        gitHubURL: 'https://www.google.nl'
    }]
};

const teamData = {
    title: 'Ons Team',
    heading: 'Ons Team',
    description: 'Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Etiam porta sem malesuada magna mollis euismod. Vestibulumid ligula porta felis euismod semper.',
    linkText: 'Personal GitHub',
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

const signupData = {
    title: "Sign-Up"
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
        data: partnersData
    })
});

app.get('/team', function (req, res) {
    res.render('partners-team.html', {
        data: teamData
    })
});

app.get('/signup', function (req, res) {
    res.render('signup.html', {
        data: signupData
    })
});

app.get('/course', function(req, res) {
    res.render('course.html', {
        data: courseData
    })
})

app.listen(3000, () => console.log('Example app listening on port 3000!'));
