const queries = require("../queries/queries");
class DataStore {
  constructor(database) {
    this.db = database;
  }

  getCourseForCourseOverview(queryParameters) {
    // Resolve with database results
    // Reject on any error
    return new Promise((resolve, reject) => {
      // get query from the collection saved in /queries/
      let query = queries.course_composed_view;

      this.db.course_composed_view
        .find(queryParameters, query)
        .then(courses => {
          resolve(courses);
        })
        .catch(error => {
          reject(error);
        });
    });
  }
}

module.exports = DataStore;
