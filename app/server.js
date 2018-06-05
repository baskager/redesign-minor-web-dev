const express = require('express');
const nunjucks = require("nunjucks");
const app = express();

const homepageData = {
    title: "Homepage"
};

const programData = {
    title: "Program"
};

const studentWork = {
    title: 'Student work',
    heading: 'Student work',
    description: 'Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Etiam porta sem malesuada magna mollis euismod. Vestibulumid ligula porta felis euismod semper.',
    courses: [
        {
            name: 'wafs',
            items: [
                {
                    heading: 'heading',
                    imgUrl: '',
                    demoUrl: '',
                    repoUrl: '',
                },
                {
                    heading: 'heading',
                    imgUrl: '',
                    demoUrl: '',
                    repoUrl: '',
                },
                {
                    heading: 'heading',
                    imgUrl: '',
                    demoUrl: '',
                    repoUrl: '',
                },
                {
                    heading: 'heading',
                    imgUrl: '',
                    demoUrl: '',
                    repoUrl: '',
                },
                {
                    heading: 'heading',
                    imgUrl: '',
                    demoUrl: '',
                    repoUrl: '',
                },
                {
                    heading: 'heading',
                    imgUrl: '',
                    demoUrl: '',
                    repoUrl: '',
                }
            ]
        },
        {
            name: 'cssttr',
            items: [
                {
                    heading: 'heading',
                    imgUrl: '',
                    demoUrl: '',
                    repoUrl: '',
                },
                {
                    heading: 'heading',
                    imgUrl: '',
                    demoUrl: '',
                    repoUrl: '',
                },
                {
                    heading: 'heading',
                    imgUrl: '',
                    demoUrl: '',
                    repoUrl: '',
                },
                {
                    heading: 'heading',
                    imgUrl: '',
                    demoUrl: '',
                    repoUrl: '',
                },
                {
                    heading: 'heading',
                    imgUrl: '',
                    demoUrl: '',
                    repoUrl: '',
                },
                {
                    heading: 'heading',
                    imgUrl: '',
                    demoUrl: '',
                    repoUrl: '',
                }
            ]
        },
    ],
}

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

app.get('/student-work', function (req, res) {
    res.render('student-work.html', {
        data: studentWork
    })
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));
