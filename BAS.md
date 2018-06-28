# Personal readme of Bas Kager

- **[Goals and challenges](#goals-and-challenges)**
- **[My contributions](#my-contributions)**
- **[Conclusion](#conclusion)**
- **[My pull requests](https://github.com/baskager/redesign-minor-web-dev/pulls?utf8=%E2%9C%93&q=author%3Abaskager+)**

<img src="https://avatars3.githubusercontent.com/u/5838517?s=460&v=4" alt="drawing" width="200px"/>

My name is Bas Kager and I'm a student Computer Sciences/Software-Engineering at the University of Applied Sciences Leiden.

The project, for me, was a conscious choice. As I am a typical 'back-end' developer, I felt like I really needed to challenge myself with front-end tasks to get the most out of this minor.

At the start, we all decided to do this project as a team, so in addition to having challenges, I have been able to make my back-end knowledge useful as well. The combination of my own challenges and my back-end experience made this project one of the most valuable experiences in bachelor. It has allowed me to learn a lot while simultaneously allowing me to fill the 'back-end' gaps where needed.

## Goals and Challenges

Before starting this project I have looked at some reflection reports of older projects to see what I could do better. These are things that I have written about myself or feedback I've received.

### Challenges

- Communicate, plan and delegate better.
- Take more initiative and bring ideas to the table
- Introduce a back-end perspective to the team.
- Improve code documentation and commenting.

### Goals

- Learn how to build proper CSS layouts with flexbox, grid and best practices.
- Learn more about web design (best) practices.
- Get up to speed with task-runners (later omitted).
- Learn how to properly deploy a front-end app with Docker and SSL (https) (later added).

### Things I should really stop doing

- Convincing myself I can work from home, this is something I'm just not capable of.
- Focusing too much on my own work (hyperfocus) and being unable to help people because of it.

### Roadblocks

- Insomnia (Delayed Sleep Phase Disorder).
- Medical issues (Dizzy spells, fainting. Heart is currently being researched).

## My contributions

### Project setup and use cases

On the first Monday morning of the project, we started making a MOSCOW list based on the project requirements, so it would be clear what the priorities would be for this project.

**MOSCOW**

I have introduced the MOSCOW methodology to the team because I have used it in projects before and I have always found it useful to have a list of priorities.

![MOSCOW method](https://i.imgur.com/TmoERwy.png)

**Card sorting**

After listing our priorities we turned the used cases in the MOSCOW list into cards and divided them into pages. This technique was new for me and I quickly found out how useful it is. We were on the first day and we already had ideas on what information this website would offer.

![card sorting](https://i.imgur.com/fMFDwJp.jpg)

**Database diagram**

Now that we had our cards divided into pages. I offered to make a diagram of the database. I've kept this diagram simple and combined a class diagram with an ERD diagram for ease of reading.

This diagram made clear how the data would be represented. This later turned out very useful for the wireframes as we already had a general idea of what data should be on what page.

![database diagram](https://i.imgur.com/o93zkUm.jpg)

### Wireframes

The whole team collaborated on the wireframes. This introduced me to the design process of a proper front-end site and has really opened my eyes. My team members were absolute experts with wireframing and Figma and I've probably learned the most of this process.

We started wireframing on paper and continued with Figma to add more detail.

I have drawn up some elements displayed on the images below.

![wireframes](https://i.imgur.com/rDKKYSx.jpg)
![more wireframes](https://i.imgur.com/STpMoL6.jpg)
![even more wireframes](https://i.imgur.com/Ndw3MIo.jpg)

### Style guide

The team took my learning goals in mind and allowed me to create a style guide for the website. This style guide provided elements that the rest of the team could work on.

Before this project, I had never made a style guide and now that I've made one I don't want to make a project without one. This makes it so much easier to come up with new elements, testing out colour schemes and keeping your design consistent. I love making style guides. I love making style guides.

The picture below shows a part of the first iteration of the style guide.

![styleguide](https://i.imgur.com/kxZBQOS.png)

### CSS and HTML layout structure

I have been able to set up the HTML structure for the home page and the course page. I have done this alongside Rick and James (pair programming) and they have taught me a lot of tips-and-tricks and best-practices along the way.

Jelle and James later added finishing touches to the course page and home page and I think the result turned out beautiful.

### SVG

Another first for me, I had never worked with SVG before. I found a really nice tool called 'VECTR' that lets you design and export SVG images on Linux! I have made an arrow icon and an icon for bullet lists.

**The arrow icon:**

![arrow svg](https://redesign-minor.kager.io/img/icons/arrow.svg)

**The bullet icon:**

![bullet svg](https://redesign-minor.kager.io/img/icons/bullet.svg)

### Documentation and readme

This is something I constantly want to improve. I want people to understand how to build and deploy the project. But also how the code works. During this project, I've tried to comment my code as much a possible and I've written several guides.

Code example:

```js
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
```

### Database

The website for the minor has a lot of information with a lot of data that is relational. For instance: a course has one or multiple teachers and belongs to a period, it can also be a project which can have a business partner.

For this reason, I have decided to implement a relational database management system. The system I have chosen to contain the database is PostgreSQL. The reason for this choice is because I have experience with the SQL language, PostgreSQL has reasonable performance and PostgreSQL is tough enough on restraints (what happens when related data is removed etc.).

I have set up 'adminer' in a Docker image for development environments. This makes it easier to edit the data in the database. This tool is not available on the server due to security reasons (Direct editing of a production database is a bad practice).

### Deployment

To make deployment as easy as possible I have implemented Docker in this project. Docker ensures that the development environment is virtually the same as the production environment.

I've also set up shell scripts that make starting and stopping the Docker services very easy. It takes just one command to start the environment up and you're ready to develop. It also just takes one command to populate the database with new data.

More information and for a detailed installation guide you can go to the following URL:
https://github.com/baskager/redesign-minor-web-dev

### Web server and SSL (https)

In addition to setting up the deployment in Docker. I have also done the set up for the web server and SSL. I used NGINX to proxy the domain name to the docker container.

I have also set up an SSL certificate in the web server configuration with the use of Certbot and Let's Encrypt.

It was quite a hassle to get everything to work properly on production as this is the first time I have deployed a node app through Docker. I've learned a great amount by just playing around a few days with NGINX and docker and I will definitely use this knowledge again in the future.

### Carousel element

The Carousel element on the home page was a real challenge to me. It is a very interactive element and one of the hardest elements to make pleasurable for both normal users and users who need accessibility features.

There are a lot of things that browsers do that block a slider from functioning normally. Browsers have a habit of focusing on the scrollbar instead of the items for instance.

I ended up writing a lot of javascript for the carousel, the javascript ensures that the focus states work as expected with both mouse and keyboard usage. It is currently possible to navigate the slider items by using the buttons on the side, the 'tab' key, the 'arrow' keys and the 'spacebar' key.

In the end, I got it done and I am really happy with the result. Below you can read an excerpt from the 'experiments' part. This experiment was eventually adopted in the home page of the website.

**Excerpt from the base readme**

I made this prototype because I heard that Marijn hated carousel elements in websites because they never seem to work with spacebar or tabs and are often very fidgety.

For this reason, I tried to make a carousel element that would be more pleasurable for Marijn to use and ended up with two prototypes:

- A carousel element with navigation using 'tab' keys and 'arrow' keys.
  ![spatial navigation slider element](https://i.imgur.com/QwpJEXT.png)
- A carousel element with navigation using 'tab' keys, 'arrow' keys and clickable buttons on the side
  ![spatial navigation slider element with buttons](https://i.imgur.com/3D5aGFQ.png)

After the third usability/accessibility test with Marijn, it became clear that he prefers the second option, but, was confused about not being able to use the 'spacebar' key to navigate through the carousel items. With this feedback, I decided to create another prototype with the 'spacebar' navigation added. This last version of the prototype made it to the website.

## Conclusion

These 5 weeks flew by and I'm really proud of what we have delivered as a team.

I was very happy with the communication and work ethic of the team. We haven't skipped a day with this project and I think that is visible by the amount of work delivered and attention to detail. This minor has allowed me to work with some of the best front-end developers in the world. I have been greatly inspired and motivated by the work I've done in this project and I think I have learned things that I will use for the rest of my career.

I think I've been able to combine my back-end knowledge with the newly acquired front-end knowledge in this project, which means that I have achieved my main goal for this minor.

Although things went well in this project, nothing is perfect. I think that my back-end perspective can sometimes make things too complex. I think this is because I have worked in a lot of back-end projects for my bachelor and that teaches you certain methods that may not be relevant for front-end developers.

Although I think the database was a very good idea because we simply have a lot of relational data. I do think that perhaps I should have looked for a storage technology that was easier to use for the rest of the team.

I noticed early on that the database was difficult for the rest of the team. This is why I decided to make deploying the development environment as easy as I possibly could. I have written detailed guides and documentation, helper scripts and I've actively helped out the team members with the setup.

I have omitted the 'task-runner' learning goal as it was not realistic for me. The entire project depends on it and it would have blocked the entire team from being able to work on the project for the first few days. I have, however, replaced this learning goal with another learning goal. This was "Learn how to properly deploy a front-end app with Docker and SSL (https)".

A thing that annoyed me a little in this project is that things were not tested or reviewed very well (we were all guilty of this). Often things were merged to develop which broke other elements in the website. This could have been prevented by simply checking if everything works properly in the feature branch. We fixed a lot of things afterwards through hotfixes in the develop branch. I do, however, think that the rest of the team realised this and every team member has gradually improved on this. Our working product is a testament to this improvement.

I think I've nailed my learning goals in this project, With the exception of the omitted the 'task-runner' goal.

This project has been a great success and in the future, I'll be looking back to everything I've learned in Amsterdam. I am looking forward to the results and I hope everyone loves our website!
