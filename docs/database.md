# Database

The database we use is PostgreSQL. This is an open-source relational database system which uses the popular SQL query language.

If you are familiar with other database systems like MySQL you'll find alot of similarities. Querying is almost the same.

## Adminer

We use the adminer interface on development to manage the database. After starting the docker container you can browse to: **0.0.0.0:8080** with your favourite browser.

You can log into adminer with the following credentials:

**System:** PostgreSQL

**Server:** postgres

**Username:** minorwebdev

**Password:** faberyayo

**Database:** minorwebdev

### Credentials on production

The credentials are different on production for security reasons.

## Connecting to the database with MassiveJS

```javascript
massive(config.postgres).then(database => {
  // Create a Datastore object (handles the database queries)
  let dataStore = new DataStore(database);
}
```

## The DataStore class

The DataStore class was written to make interfacing with the database easier. The datastore class holds the queries for all the data we need throughout the website.

The DataStore class is completely promise based. For more information about Promises in JavaScript you can read the following article:
https://scotch.io/tutorials/javascript-promises-for-dummies

### Example:

```javascript
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
        debug(courseData[0]);
        res.render("course.html", {
          data: courseData[0]
        });
      });
  });
```

## Advanced queries

For advanced queries such as views we have decided to split the query into seperate files. These can be located in `/app/src/queries`

## SQL imports and exports

Database dumps are located in **/sql/dumps**.

`cd sql/dumps/`

It is not recommended to use Adminer for importing or exporting data. Importing and exporting can be done with the following commands:

**protip:** Make sure the target database is emptied before you import an .sql file!

**importing:**

`cat minorwebdev.sql | docker exec -i minorwebdev_postgres psql -U minorwebdev -d minorwebdev`

**exporting:**

`docker exec -i minorwebdev_postgres pg_dump -U minorwebdev minorwebdev > minorwebdev.sql`
