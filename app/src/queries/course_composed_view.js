module.exports = {
  decompose: {
    pk: "course_id",
    columns: [
      "course_id",
      "course_name",
      "course_description",
      "course_type",
      "course_period_number",
      "course_period_weeks",
      "page_slug",
      "icon_url",
      "long_description",
      "learning_goals",
      "partner_id",
      "partner_name",
      "partner_website",
      "partner_logo"
    ],
    teachers: {
      pk: "teacher_id",
      columns: {
        teacher_id: "id",
        teacher_name: "name",
        teacher_short_story: "short_story",
        teacher_avatar: "avatar"
      },
      array: true
    },
    weeks: {
      pk: ["course_week_pk"],
      columns: {
        week_number: "number",
        week_description: "description",
        week_subjects: "subjects"
      },
      array: true
    }
  }
};
