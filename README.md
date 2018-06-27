# Website redesign for the minor Web Development

During this project we redesigned the website for the minor 'web development' at the University of Applied sciences in Amsterdam. We have done our best to make a very experimental yet pleasurable web site.

A big theme in this project was 'accessibility'. The site should be pleasurable for everyone, not just for the 'general public'.

[INSERT A PICTURE HERE WHEN WE SIGN OFF ON THE PROJECT]

[INSERT A DEMO URL HERE WHEN WE SIGN OFF ON THE PROJECT]

# 1. Requirements

- NPM (node package manager)
- NodeJS
- GULP (task-runner)
- Browserify

# 2. Installing and building

## Clone this repository

```
git clone git@github.com:baskager/redesign-minor-web-dev.git
```

## Navigate to the `/app` directory and run NPM install

This will install all the NPM packages that are used throughout the project.

```
cd app
npm install
```

# 3. Deploying on development

## Checkout to the develop branch

```
git checkout develop
```

## Run gulp watch

This will check for changes in the assets and run the gulp task runner when needed.

```
gulp watch
```

## Start the server

We recommend using Nodemon for development. This will restart the server when the code is changed. The will also run the server on http://localhost:3000.

```
npm install -g nodemon
nodemon server.js
```

# 4. Deploying on production

## Install forever on the server.

Forever will run the server continuously and detached

```
npm install -g forever
```

## Run gulp

This will compile all the assets

```
gulp
```

## Run forever and let it write logs in the `/logs` folder.

```
forever -o logs/node-server-out.log -e logs/node-server-error.log start app.js
```

# 5. Experiments

## 'Hector Salamanca' input method by Rick

Rick made a very experimental version of a keyboard that ( according to his research ) shoud be very accessible for Marijn. Check out [his progress Blog](https://github.com/baskager/redesign-minor-web-dev/blob/develop/docs/process/rick.md) for the full research and results of the test with Marijn.

## Video element with captions and split screen

For deaf people it is hard to follow lectures. They have to focus on the speaker, the interpreter and the slides at the same time. As we are making a website for a minor lectures are part of it. To make it easier for deaf people to follow the lectures I made a video player focused on improving this experience. We tested the video player with Marie, a deaf graphic designer. She gave us a lot of interesting feedback. With this feedback we improved the video player to it's current form.

**The video player contains the following features:**

- Synced split screen view of the lecture and the slides
- Subtitles (loaded as SRT format).
- The subtitles can switch side using the mouse or arrow keys.
- Slide overview to quickly navigate trough the lecture
- The possibility to slowdown or speed up the lecture.
- The video player can be controlled using the keyboard.

![Screenshot of the videoplayer](https://d.pr/i/tQJ6Uu+)

## Spatial navigation on the program page

The spatial navigation functionality is deeply inspired by the original Opera function and by multiple large screen navigation systems. Users can easily navigate through elements using their arrow keys. Unlike the forward jumping tab key, users can navigate in any direction. The enter key will emulate the mouse's on click event. More information can be found on James personal progress [blog](https://jamerrone.github.io/meesterproef-progress-blog/).

## Focus following the scroll position

Marijn once told me that the biggest disadvantage of the tab key was the fact that it always starts at the top of the website. If the user chooses to scroll down the page and wants to interact with an element, he will need to spam the tab key until he get's there. With this functionality James wrote, the focus key will always follow the user's window location. The focus state will change its current element depending on what is currently displayed on the screen. More information can be found on James personal progress [blog](https://jamerrone.github.io/meesterproef-progress-blog/).

## Spatial navigation slider element

# 6. Insights

The experiments were eye-opening for us as a team. Every member of the team represents the 'general public'. We use a computer and websites like most of society. Not often do we as developers realise our privileges and that leads to designing and developing things that might not be ideal for users that need/use additional accessibility features.

Testing and conversing with Marijn and Marie made us realise that the web/software is used in so many different ways and what for some is pleasurable can be an obstacle for others.

We found out that it is extremely difficult to make something pleasurable and accessible at the same time. It takes experiments, testing and a lot of iterations to get something right. It, however, is extremely useful and after a while it just makes sense.

When designing pleasurably accessible website elements you will find out that some designs are actually more pleasurable for the general public as well. There are some things we just get wrong in general and continuously testing helps us to realize this.

We highly recommend making websites/software more accessible if the time and money is available. You'll find out a lot of things that you can implement in future projects. Your finished work will have far more value because there are far more people that can use your product pleasurably. This isn't just financial value, it's also social value.

It really means something to the people who use it and we think that is powerful.

# 7. Conclusions

- Don't assume things are pleasurable for everyone. Test it with a diverse group of people, including people who need accessibility software like screen readers.
- Take your time to experiment and build prototypes, it's actually really fun and useful.
- We all have something to learn, even when we think we don't.

# 8. Roadmap

Write this when we sign off on the project

# 9. Versioning

We use semantic versioning. More information can be found on http://semver.org

# 10. License

We use the "MIT License"

> A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications and larger works may be distributed under different terms and without source code.

You can find our license here: https://github.com/baskager/redesign-minor-web-dev/blob/master/LICENSE

# 11. Authors

## James Jefferies

![Profile photo](https://avatars3.githubusercontent.com/u/16142485?s=460&v=4)

Ex-Graphical Design student that refound himself as a Frontend Developer at the University of Applied Science Amsterdam.

[Github repo](https://github.com/Jamerrone)

[Progress Blog](https://jamerrone.github.io/meesterproef-progress-blog/)

## Jelle Overbeek

![Profile photo](https://avatars0.githubusercontent.com/u/6648715?s=460&v=4)

Write your own little story here

[Github repo](https://github.com/jelleoverbeek)

[Progress Blog]()

## Rick Buter

![Profile photo](https://avatars1.githubusercontent.com/u/22095570?s=460&v=4)

Doesn't really know what he's doing, but he's doing just fine.

[Github repo](https://github.com/Rick712)

[Progress Blog](https://github.com/baskager/redesign-minor-web-dev/blob/develop/docs/process/rick.md)

## Jamal van Rooijen

![Profile photo](https://avatars3.githubusercontent.com/u/26875486?s=460&v=4)

Write your own little story here

[Github repo](https://github.com/jamalvr)

[Progress Blog]()

## Bas Kager

![Profile photo](https://avatars3.githubusercontent.com/u/5838517?s=460&v=4)

Software Engineer studying at The University of Applied Sciences Leiden. Really likes databases, performance, security and clean code.

[Github repo](https://github.com/baskager)

[Progress Blog]()

# 12. Acknowledgements

A very special thank you to Marijn and Marie for helping us with accessibility testing and the design process. This project would not have been possible without them.

We would also like the thank all the teachers for the guidance in this project but also in the entire minor. They really went out of their way to push us and teach us something new.

# 13. Individual goals for this project

**James Peter Perrone Jefferies:**

1.  Learn how to build and manage complex project structures, for example, components splitting, folder structure, and name conventions.
2.  Don't be afraid to try new stuff out, be creative, and build awesome stuff where users can say: WoW!
3.  Don't write "quick fixes" or "prototype code". Try to write good code from the startup. Because I know that I won't refactor it later.

**Jamal van Rooijen:**

1.  Learning how to plan properly in this project. Especially since we are with a team of five people. Dividing tasks and completing our personal goals can only be achieved by planning properly.
2.  Learning more Javascript by developing interactive elements on the website, without being afraid to try new and innovative things if it seems too 'hard' on first glance.
3.  Combining style and functionality, which should result in something that is pleasurable to use and has a 'Wow factor'.

**Rick:**

1.  Animations and Transitions that increase the user experience
2.  Clean code so that it is readable for everyone
3.  A bit design to improve my skills

**Bas Kager:**

1.  Learn how to build proper CSS layouts with flexbox, grid and best practices.
2.  Get up to speed with tasks runners.
3.  Learn more about web design (best) practices

**Jelle Overbeek:**

1.  Performance matters - Setting up a Node server including performance optimisations
2.  Web Design - Out of the box design, include more creativity than usual and try to deliver a wow experience.
3.  WAFS - General JavaScript knowledge, make efficient JavaScript functions.
