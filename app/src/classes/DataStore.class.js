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
  getPeriodForTimeline(queryParameters) {
    return new Promise((resolve, reject) => {
      this.getCourseForCourseOverview(queryParameters)
        .then(courseData => {
          // debug(courseData);
          let periods = [];

          for (let course of courseData) {
            let periodNumber = course.course_period_number;
            // If a period does not have it's own object yet, create it.
            if (!periods[periodNumber]) {
              periods[periodNumber] = {
                period: periodNumber,
                weeks: course.course_period_weeks,
                courses: []
              };
            }
            // Add course to the period object it belongs to
            periods[periodNumber].courses.push(course);
          }
          resolve(periods);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
}

module.exports = DataStore;
