const express = require('express');
const nunjucks = require("nunjucks");
const app = express();

const homepageData = {
    title: "Homepage"
};

const programData = {
    title: "Program",
    weeks: [{
        label: "Week 1",
        items: [{
            name: "CSS to the rescue",
            iconSrc: "//via.placeholder.com/64x64",
            url: "#",
            description: "Lorem ipsum dolor",
            partner_id: null,
            type: "course"
        }, {
            name: "Web app from scratch",
            iconSrc: "//via.placeholder.com/64x64",
            url: "#",
            description: "Lorem ipsum dolor",
            partner_id: null,
            type: "course"
        }, {
            name: "Weekly Nerd",
            iconSrc: "//via.placeholder.com/64x64",
            url: "#",
            description: "Lorem ipsum dolor",
            partner_id: null,
            type: "course"
        }]
    }, {
        label: "Week 2",
        items: []
    }, {
        label: "Week 3",
        items: []
    }, {
        label: "Week 4",
        items: [{
            name: "CSS to the rescue",
            iconSrc: "//via.placeholder.com/64x64",
            url: "#",
            description: "Lorem ipsum dolor",
            partner_id: null,
            type: "course"
        }, {
            name: "Web app from scratch",
            iconSrc: "//via.placeholder.com/64x64",
            url: "#",
            description: "Lorem ipsum dolor",
            partner_id: null,
            type: "course"
        }, {
            name: "Weekly Nerd",
            iconSrc: "//via.placeholder.com/64x64",
            url: "#",
            description: "Lorem ipsum dolor",
            partner_id: null,
            type: "course"
        }]
    }, {
        label: "Week 5",
        items: []
    }, {
        label: "Week 6",
        items: []
    }]
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

app.listen(3000, () => console.log('Example app listening on port 3000!'));
