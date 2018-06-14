const express = require("express");
const nunjucks = require("nunjucks");
const app = express();

const homepageData = {
  title: "Home"
};

const programData = {
  title: "Program",
  description:
    "The minor works using a studio model. We have a dedicated classroom with a <b>refrigerator</b>❄️, <b>sandwich iron 🥪</b> and <b>stand-up desks</b>👖. Here we work for <b>40 hours a week💪</b>, <b>like in a real company</b>. Everyday the students have the option to ask questions to the mentors and ofcourse other students.",
  periods: [
    {
      period: 1,
      weeks: [1, 2, 3, 4],
      courses: [
        {
          name: "CSS to the rescue",
          abbreviation: "cssttr",
          description: "CSS & Accessibility course",
          type: "course",
          weeks: [
            {
              week: 1,
              description:
                "Creating fun, pleasurable and accessible solutions for different kinds of interfaces."
            },
            {
              week: 2,
              description:
                "Using CSS without the use of classes. Getting to know the basic CSS principles is key!"
            },
            {
              week: 3,
              description:
                "Finetune the structure and flow of your app, because It's a wrap!"
            }
          ]
        },
        {
          name: "Web App From Scratch",
          abbreviation: "wafs",
          description: "JavaScript course",
          type: "course",
          weeks: [
            {
              week: 1,
              description:
                "Introduction to Javascript object programming and coding design patterns."
            },
            {
              week: 2,
              description: "Resolving and manipulating data from an API."
            },
            {
              week: 3,
              description:
                "Designing your pleasurable interface with attention to detail."
            }
          ]
        },
        {
          name: "Weekly nerd",
          abbreviation: "wn",
          description: "(Guest) Speakers",
          type: "speakers",
          weeks: [
            {
              week: 1,
              name: "Justus Sturkenboom",
              imgSrc: "//via.placeholder.com/48x48",
              description: "Functional Programming"
            },
            {
              week: 2,
              name: "Titus Wormer",
              imgSrc: "//via.placeholder.com/48x48",
              description: "Git"
            },
            {
              week: 3,
              name: "Vasilis van Gemert",
              imgSrc: "//via.placeholder.com/48x48",
              description: "Accessibility"
            }
          ]
        },
        {
          name: "Project 1",
          partner: "Openbare Bibliotheek Amsterdam",
          description:
            "At the OBA we will create awesome stuff with data about Amsterdam, which they collected throughout the years.",
          type: "project"
        }
      ]
    },
    {
      period: 2,
      weeks: [5, 6, 7, 8],
      courses: [
        {
          name: "Performance matters",
          abbreviation: "pm",
          description: "Website perfomance course",
          type: "course",
          weeks: [
            {
              week: 5,
              description:
                "Make the basic functionality work on on as many devices as possible."
            },
            {
              week: 6,
              description: "Add feature detection to one of your applications."
            },
            {
              week: 7,
              description:
                "Turn your application into a three layer progressive enhancent one."
            }
          ]
        },
        {
          name: "Browser Technologies",
          abbreviation: "bt",
          description: "Progressive enhancement course",
          type: "course",
          weeks: [
            {
              week: 5,
              description:
                "Do an performance audit of an existing site and make a plan to improve it."
            },
            {
              week: 6,
              description:
                "Add serverside rendering to one of your applications, also turn it in to a progressive web app."
            },
            {
              week: 7,
              description:
                "Add more optimalisations and a service worker. Make your application work offline."
            }
          ]
        },
        {
          name: "Weekly Nerd",
          abbreviation: "wn",
          description: "(Guest) Speakers",
          type: "speakers",
          weeks: [
            {
              week: 5,
              name: "Justus Sturkenboom",
              imgSrc: "//via.placeholder.com/48x48",
              description: "Functional Programming"
            },
            {
              week: 6,
              name: "Titus Wormer",
              imgSrc: "//via.placeholder.com/48x48",
              description: "Git"
            },
            {
              week: 7,
              name: "Vasilis van Gemert",
              imgSrc: "//via.placeholder.com/48x48",
              description: "Accessibility"
            }
          ]
        },
        {
          name: "Project 2",
          partner: "Lifely",
          description:
            "Lifely is a digital agency. Here we’re going to work in their codebase of multiple projects.",
          type: "project"
        }
      ]
    }
  ]
};

const courseData = {
  title: "Course",
  description:
    "Here comes the description for the course. Here comes the description for the course. Here comes the description for the course."
};

const studentWork = {
  title: "Student work",
  heading: "Student work",
  description:
    "Here you can find student work from the final assignement for each course of last year. Each course highlights work of all types of quality.",
  courses: [
    {
      name: "Web app from scratch",
      abbreviation: "wafs",
      items: [
        {
          heading: "Project header",
          imgUrl: "//via.placeholder.com/306x176",
          imgAlt: "Description of the project/image",
          demoUrl: "#",
          repoUrl: "https://www.github.com"
        },
        {
          heading: "Project header",
          imgUrl: "//via.placeholder.com/306x176",
          imgAlt: "Description of the project/image",
          demoUrl: "#",
          repoUrl: "https://www.github.com"
        },
        {
          heading: "Project header",
          imgUrl: "//via.placeholder.com/306x176",
          imgAlt: "Description of the project/image",
          demoUrl: "#",
          repoUrl: "https://www.github.com"
        },
        {
          heading: "Project header",
          imgUrl: "//via.placeholder.com/306x176",
          imgAlt: "Description of the project/image",
          demoUrl: "#",
          repoUrl: "https://www.github.com"
        }
      ]
    },
    {
      name: "CSS to the rescue",
      abbreviation: "cssttr",
      items: [
        {
          heading: "Project header",
          imgUrl: "//via.placeholder.com/306x176",
          imgAlt: "Description of the project/image",
          demoUrl: "#",
          repoUrl: "https://www.github.com"
        },
        {
          heading: "Project header",
          imgUrl: "//via.placeholder.com/306x176",
          imgAlt: "Description of the project/image",
          demoUrl: "#",
          repoUrl: "https://www.github.com"
        },
        {
          heading: "Project header",
          imgUrl: "//via.placeholder.com/306x176",
          imgAlt: "Description of the project/image",
          demoUrl: "#",
          repoUrl: "https://www.github.com"
        },
        {
          heading: "Project header",
          imgUrl: "//via.placeholder.com/306x176",
          imgAlt: "Description of the project/image",
          demoUrl: "#",
          repoUrl: "https://www.github.com"
        }
      ]
    },
    {
      name: "Project 1",
      abbreviation: "project",
      items: [
        {
          heading: "Project header",
          imgUrl: "//via.placeholder.com/306x176",
          imgAlt: "Description of the project/image",
          demoUrl: "#",
          repoUrl: "https://www.github.com"
        },
        {
          heading: "Project header",
          imgUrl: "//via.placeholder.com/306x176",
          imgAlt: "Description of the project/image",
          demoUrl: "#",
          repoUrl: "https://www.github.com"
        },
        {
          heading: "Project header",
          imgUrl: "//via.placeholder.com/306x176",
          imgAlt: "Description of the project/image",
          demoUrl: "#",
          repoUrl: "https://www.github.com"
        },
        {
          heading: "Project header",
          imgUrl: "//via.placeholder.com/306x176",
          imgAlt: "Description of the project/image",
          demoUrl: "#",
          repoUrl: "https://www.github.com"
        }
      ]
    }
  ]
};

const partnersData = {
  title: "Our Partners",
  heading: "Our Partners",
  description:
    "Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Etiam porta sem malesuada magna mollis euismod. Vestibulumid ligula porta felis euismod semper.",
  linkText: "View project",
  members: [
    {
      heading: "Openbare Bibliotheek Amsterdam",
      subHeading:
        "The OBA comprises a Central Library and 25 branch libraries.",
      avatarURL: "/img/partners/oba.jpg",
      gitHubURL: "https://www.oba.nl/"
    },
    {
      heading: "De Ceuvel",
      subHeading:
        "De Ceuvel is a city playground for innovation and creativity.",
      avatarURL: "/img/partners/deceuvel.jpg",
      gitHubURL: "https://www.oba.nl/"
    }
  ]
};

const teamData = {
  title: "Ons Team",
  heading: "Ons Team",
  description:
    "Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Etiam porta sem malesuada magna mollis euismod. Vestibulumid ligula porta felis euismod semper.",
  linkText: "Personal GitHub",
  members: [
    {
      fullName: "James Peter Perrone Jefferies",
      description: "Something about me!",
      avatarURL: "/img/avatars/james.png",
      gitHubURL: "https://www.google.nl"
    },
    {
      fullName: "James Peter Perrone Jefferies",
      description: "Something about me!",
      avatarURL: "/img/avatars/james.png",
      gitHubURL: "https://www.google.nl"
    }
  ]
};

const signupData = {
  title: "Sign-Up"
};

const contactData = {
  title: "contact"
};

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
    data: studentWork
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

app.listen(3000, () => console.log("Example app listening on port 3000!"));
