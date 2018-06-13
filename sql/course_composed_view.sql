CREATE VIEW course_composed_view AS 
SELECT 
    CONCAT(course_week.course_id, course_week.week_number) AS course_week_pk,
    course.id AS course_id,
    course.name AS course_name,
    teacher.id AS teacher_id,
    course_week.week_number AS week_number,
    teacher.name AS teacher_name,
    teacher.avatar_url AS teacher_avatar,
    teacher.short_story AS teacher_short_story,
    course_week.description AS week_description,
    course.short_description AS course_description,
    course_type.name AS course_type,
    course.page_slug,
    course.icon_url,
    course.long_description,
    course.learning_goals,
    partner.id AS partner_id,
    partner.name AS partner_name,
    partner.website_url AS partner_website,
    partner.logo_url AS partner_logo

FROM course
INNER JOIN teacher_course 
    ON course.id = teacher_course.course_id
RIGHT JOIN teacher 
    ON teacher.id = teacher_course.teacher_id
LEFT JOIN partner 
    ON partner.id = course.partner_id
INNER JOIN course_type
    ON course.type_id = course_type.id
LEFT JOIN course_week
    ON course.id = course_week.course_id
WHERE course.active = TRUE && course_week_pk != ''
ORDER BY course_week_pk