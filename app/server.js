const express = require("express");
const nunjucks = require("nunjucks");
const app = express();

const homepageData = {
  title: "Home"
};

const programData = {
  title: "Program",
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
              imgSrc: "//via.placeholder.com/64x64",
              description: "Functional Programming"
            },
            {
              week: 2,
              name: "Titus Wormer",
              imgSrc: "//via.placeholder.com/64x64",
              description: "Git"
            },
            {
              week: 3,
              name: "Vasilis van Gemert",
              imgSrc: "//via.placeholder.com/64x64",
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
    }
  ]
};

/* 
const programData = {
  title: "Program",
  program: [
    {
      name: "CSS to the rescue",
      description: "CSS & Accessibility course",
      weeks: [
        {
          week: 1,
          description:
            "Creating fun, pleasurable and accessible solutions for different kinds of interfaces."
        }
      ],
      items: [
        {
          name: "Web App From Scratch",
          iconSrc: "//via.placeholder.com/64x64",
          url: "#",
          description:
            "Building an application in the browser with native HTML, CSS & Javascript.",
          partner_id: null,
          type: "course"
        },
        {
          name: "CSS To The Rescue",
          iconSrc: "//via.placeholder.com/64x64",
          url: "#",
          description:
            "Create fun, respronsive and pleasurable solutions for different kinds of complex interfaces.",
          partner_id: null,
          type: "course"
        },
        {
          name: "Weekly Nerd",
          iconSrc: "//via.placeholder.com/64x64",
          url: "#",
          description:
            "A weekly presentation where new speakers visit and tell us all of their interesting coding knowledge",
          partner_id: null,
          type: "course"
        }
      ]
    },
    {
      label: "Week 1",
      sticky: false,
      items: [
        {
          type: "assignment",
          description:
            "Introduction to Javascript object programming and design patterns for code."
        },
        {
          type: "assignment",
          description:
            "Creating fun, pleasurable and accessible solutions for different kinds of interfaces."
        },
        {
          type: "speaker",
          name: "Titus Wormer",
          url: "#",
          avatarURL: "//via.placeholder.com/64x64"
        }
      ]
    },
    {
      label: "Week 2",
      sticky: false,
      items: [
        {
          type: "assignment",
          description: "Resolving and manipulating data from an API."
        },
        {
          type: "assignment",
          description:
            "Using CSS without the use of classes. Getting to know the basic CSS principles is key!"
        },
        {
          type: "speaker",
          name: "PPK",
          url: "#",
          avatarURL: "//via.placeholder.com/64x64"
        }
      ]
    },
    {
      label: "Week 3",
      sticky: false,
      items: [
        {
          type: "assignment",
          description:
            "Finetune the structure and flow of your app, because It's a wrap!"
        },
        {
          type: "assignment",
          description:
            "Designing your pleasurable interface with attention to detail."
        },
        {
          type: "speaker",
          name: "Justus Sturkenboom",
          url: "#",
          avatarURL: "//via.placeholder.com/64x64"
        }
      ]
    },
    {
      label: "Week 4",
      sticky: false,
      items: [
        {
          type: "project",
          name: "Project 1",
          description:
            "We will have a special project at the Openbare Bibliotheek Amsterdam (OBA). Here we will create awesome stuff with data about Amsterdam, which they collected throughout the years.",
          url: "#"
        }
      ]
    },
    {
      label: null,
      sticky: true,
      items: [
        {
          name: "Browser Technologies",
          iconSrc: "//via.placeholder.com/64x64",
          url: "#",
          description: "Lorem ipsum dolor",
          partner_id: null,
          type: "course"
        },
        {
          name: "Performance Matters",
          iconSrc: "//via.placeholder.com/64x64",
          url: "#",
          description: "Lorem ipsum dolor",
          partner_id: null,
          type: "course"
        },
        {
          name: "Weekly Nerd",
          iconSrc: "//via.placeholder.com/64x64",
          url: "#",
          description: "Lorem ipsum dolor",
          partner_id: null,
          type: "course"
        }
      ]
    },
    {
      label: "Week 5",
      sticky: false,
      items: [
        {
          type: "assignment",
          description:
            "Make the basic functionality work on on as many devices as possible."
        },
        {
          type: "assignment",
          description:
            "Do an performance audit of an existing site and make a plan to improve it."
        },
        {
          type: "speaker",
          name: "Anne - TamTam",
          url: "#",
          avatarURL: "//via.placeholder.com/64x64"
        }
      ]
    },
    {
      label: "Week 6",
      sticky: false,
      items: [
        {
          type: "assignment",
          description: "Add feature detection to one of your applications.."
        },
        {
          type: "assignment",
          description:
            "Add serverside rendering to one of your applications, also turn it in to a progressive web app."
        },
        {
          type: "speaker",
          name: "PE - Voorhoede",
          url: "#",
          avatarURL: "//via.placeholder.com/64x64"
        }
      ]
    },
    {
      label: "Week 7",
      sticky: false,
      items: [
        {
          type: "assignment",
          description:
            "Turn your application into a three layer progressive enhancent one."
        },
        {
          type: "assignment",
          description:
            "Add more optimalisations and a service worker. Make your application work offline."
        },
        {
          type: "speaker",
          name: "Ischa Gast - Accessibility",
          url: "#",
          avatarURL: "//via.placeholder.com/64x64"
        }
      ]
    },
    {
      label: "Week 8",
      sticky: false,
      items: [
        {
          type: "project",
          name: "Project 2",
          description:
            "Lifely is a digital agency that focuses on design, content and technology. Your assignment is to improve a existing project. You can choose between the following projects: Fresh Heroes, an internship vacancy platform and TopTaal a language learning platform.",
          url: "#"
        }
      ]
    },
    {
      label: null,
      sticky: true,
      items: [
        {
          name: "Web Design",
          iconSrc: "//via.placeholder.com/64x64",
          url: "#",
          description: "Lorem ipsum dolor",
          partner_id: null,
          type: "course"
        },
        {
          name: "Real Time Web",
          iconSrc: "//via.placeholder.com/64x64",
          url: "#",
          description: "Lorem ipsum dolor",
          partner_id: null,
          type: "course"
        },
        {
          name: "Weekly Nerd",
          iconSrc: "//via.placeholder.com/64x64",
          url: "#",
          description: "Lorem ipsum dolor",
          partner_id: null,
          type: "course"
        }
      ]
    },
    {
      label: "Week 9",
      sticky: false,
      items: [
        {
          type: "assignment",
          description:
            "Het structureren van JavaScript heeft een aantal voordelen. Het maakt de code beter leesbaar en dus makkelijker onderhoudbaar en uitbreidbaar."
        },
        {
          type: "assignment",
          description:
            "De student kan een goed werkende responsive oplossing bedenken en maken voor complexe interfaces"
        },
        {
          type: "speaker",
          name: "Niels Leenheer",
          url: "#",
          avatarURL: "//via.placeholder.com/64x64"
        }
      ]
    },
    {
      label: "Week 10",
      sticky: false,
      items: [
        {
          type: "assignment",
          description:
            "Herhalen van Node/npm basics; Opzetten van je ontwikkel omgeving;"
        },
        {
          type: "assignment",
          description: "Bouwen van een basic app en deployen."
        },
        {
          type: "speaker",
          name: "Peter Peerdeman",
          url: "#",
          avatarURL: "//via.placeholder.com/64x64"
        }
      ]
    },
    {
      label: "Week 11",
      sticky: false,
      items: [
        {
          type: "assignment",
          description:
            "Herhalen van Node/npm basics; Opzetten van je ontwikkel omgeving;"
        },
        {
          type: "assignment",
          description: "Bouwen van een basic app en deployen."
        },
        {
          type: "speaker",
          name: "Leonie Watson - W3C",
          url: "#",
          avatarURL: "//via.placeholder.com/64x64"
        }
      ]
    },
    {
      label: "Week 12",
      sticky: false,
      items: [
        {
          type: "project",
          name: "Project 3",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacinia bibendum nulla sed consectetur.",
          url: "#"
        }
      ]
    }
  ]
};
*/

const courseData = {
  title: "Course",
  description:
    "Here comes the description for the course. Here comes the description for the course. Here comes the description for the course."
};

const studentWork = {
  title: "Student work",
  heading: "Student work",
  description:
    "Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Etiam porta sem malesuada magna mollis euismod. Vestibulumid ligula porta felis euismod semper.",
  courses: [
    {
      name: "Web app from scratch",
      items: [
        {
          heading: "Project header",
          imgUrl: "/img/student-work/1.jpg",
          imgAlt: "Description of the project/image",
          demoUrl: "https://www.github.com",
          repoUrl: "https://www.github.com"
        },
        {
          heading: "Project header",
          imgUrl: "/img/student-work/1.jpg",
          imgAlt: "Description of the project/image",
          demoUrl: "https://www.github.com",
          repoUrl: "https://www.github.com"
        },
        {
          heading: "Project header",
          imgUrl: "/img/student-work/1.jpg",
          imgAlt: "Description of the project/image",
          demoUrl: "https://www.github.com",
          repoUrl: "https://www.github.com"
        },
        {
          heading: "Project header",
          imgUrl: "/img/student-work/1.jpg",
          imgAlt: "Description of the project/image",
          demoUrl: "https://www.github.com",
          repoUrl: "https://www.github.com"
        },
        {
          heading: "Project header",
          imgUrl: "/img/student-work/1.jpg",
          imgAlt: "Description of the project/image",
          demoUrl: "https://www.github.com",
          repoUrl: "https://www.github.com"
        },
        {
          heading: "Project header",
          imgUrl: "/img/student-work/1.jpg",
          imgAlt: "Description of the project/image",
          demoUrl: "https://www.github.com",
          repoUrl: "https://www.github.com"
        }
      ]
    },
    {
      name: "CSS to the rescue",
      items: [
        {
          heading: "Project header",
          imgUrl: "/img/student-work/1.jpg",
          imgAlt: "Description of the project/image",
          demoUrl: "https://www.github.com",
          repoUrl: "https://www.github.com"
        },
        {
          heading: "Project header",
          imgUrl: "/img/student-work/1.jpg",
          imgAlt: "Description of the project/image",
          demoUrl: "https://www.github.com",
          repoUrl: "https://www.github.com"
        },
        {
          heading: "Project header",
          imgUrl: "/img/student-work/1.jpg",
          imgAlt: "Description of the project/image",
          demoUrl: "https://www.github.com",
          repoUrl: "https://www.github.com"
        },
        {
          heading: "Project header",
          imgUrl: "/img/student-work/1.jpg",
          imgAlt: "Description of the project/image",
          demoUrl: "https://www.github.com",
          repoUrl: "https://www.github.com"
        },
        {
          heading: "Project header",
          imgUrl: "/img/student-work/1.jpg",
          imgAlt: "Description of the project/image",
          demoUrl: "https://www.github.com",
          repoUrl: "https://www.github.com"
        },
        {
          heading: "Project header",
          imgUrl: "/img/student-work/1.jpg",
          imgAlt: "Description of the project/image",
          demoUrl: "https://www.github.com",
          repoUrl: "https://www.github.com"
        }
      ]
    },
    {
      name: "Project 1",
      items: [
        {
          heading: "Project header",
          imgUrl: "/img/student-work/1.jpg",
          imgAlt: "Description of the project/image",
          demoUrl: "https://www.github.com",
          repoUrl: "https://www.github.com"
        },
        {
          heading: "Project header",
          imgUrl: "/img/student-work/1.jpg",
          imgAlt: "Description of the project/image",
          demoUrl: "https://www.github.com",
          repoUrl: "https://www.github.com"
        },
        {
          heading: "Project header",
          imgUrl: "/img/student-work/1.jpg",
          imgAlt: "Description of the project/image",
          demoUrl: "https://www.github.com",
          repoUrl: "https://www.github.com"
        },
        {
          heading: "Project header",
          imgUrl: "/img/student-work/1.jpg",
          imgAlt: "Description of the project/image",
          demoUrl: "https://www.github.com",
          repoUrl: "https://www.github.com"
        },
        {
          heading: "Project header",
          imgUrl: "/img/student-work/1.jpg",
          imgAlt: "Description of the project/image",
          demoUrl: "https://www.github.com",
          repoUrl: "https://www.github.com"
        },
        {
          heading: "Project header",
          imgUrl: "/img/student-work/1.jpg",
          imgAlt: "Description of the project/image",
          demoUrl: "https://www.github.com",
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

app.get("/signup", function(req, res) {
  res.render("signup.html", {
    data: signupData
  });
});

app.listen(3000, () => console.log("Example app listening on port 3000!"));
