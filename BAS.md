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

I have been able to set up the HTML structure for the homepage and the course page. I have done this alongside Rick and James (pair programming) and they have taught me a lot of tips-and-tricks and best-practices along the way.

Jelle and James later added finishing touches to the course page and homepage and I think the result turned out beautiful.

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

### Deployment

### SSL (https)

### Carousel element
