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

const partnersData = {
    title: 'Partners',
    heading: 'Partners',
    description: 'Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Etiam porta sem malesuada magna mollis euismod. Vestibulumid ligula porta felis euismod semper.',
    linkText: 'Naar het project',
    members: [{
        fullName: 'Openbare Bibliotheek Amsterdam',
        description: 'De OBA is dé bibliotheek van Amsterdam en omgeving. Met bijna 6.000 activiteiten per jaar, een uitgebreide (e-)collectie, aanbod voor scholen en meer.',
        avatarURL: '/img/logos/oba.svg',
        gitHubURL: 'https://www.oba.nl/'
    },
    {
        fullName: 'De Ceuvel',
        description: 'De Ceuvel is een speeltuin voor innovatie en creativiteit. Een experiment waarmee we duurzaamheid bereikbaar, begrijpelijk en léuk willen maken. We delen graag onze kennis en hopen dat deze zich vermenigvuldigd. Er is altijd iets leuks en origineels te doen en iedereen is welkom.',
        avatarURL: '/img/logos/de-ceuvel.svg',
        gitHubURL: 'http://deceuvel.nl/nl/'
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

app.listen(3000, () => console.log('Example app listening on port 3000!'));
