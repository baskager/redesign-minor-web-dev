-- Adminer 4.6.2 PostgreSQL dump

DROP TABLE IF EXISTS "course";
DROP SEQUENCE IF EXISTS course_id_seq;
CREATE SEQUENCE course_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 START 1 CACHE 1;

CREATE TABLE "public"."course" (
    "id" integer DEFAULT nextval('course_id_seq') NOT NULL,
    "name" character varying NOT NULL,
    "short_description" character varying NOT NULL,
    "partner_id" integer,
    "type_id" integer NOT NULL,
    "active" boolean NOT NULL,
    "period" smallint NOT NULL,
    "page_slug" character varying NOT NULL,
    "long_description" text,
    "learning_goals" jsonb,
    "icon_url" character varying(512),
    CONSTRAINT "course_page_slug_unique" UNIQUE ("page_slug"),
    CONSTRAINT "course_pk" PRIMARY KEY ("id"),
    CONSTRAINT "course_partner_id_fkey" FOREIGN KEY (partner_id) REFERENCES partner(id) ON UPDATE CASCADE ON DELETE RESTRICT NOT DEFERRABLE,
    CONSTRAINT "course_type_id_fkey" FOREIGN KEY (type_id) REFERENCES course_type(id) ON UPDATE CASCADE ON DELETE RESTRICT NOT DEFERRABLE
) WITH (oids = false);


DROP VIEW IF EXISTS "course_composed_view";
CREATE TABLE "course_composed_view" ("course_week_pk" text, "course_id" integer, "course_name" character varying, "teacher_id" integer, "week_number" smallint, "teacher_name" character varying(255), "teacher_avatar" character varying(512), "teacher_short_story" character varying(512), "week_description" character varying(512), "course_description" character varying, "course_type" character varying(255), "page_slug" character varying, "icon_url" character varying(512), "long_description" text, "learning_goals" jsonb, "partner_id" integer, "partner_name" character varying(255), "partner_website" character varying, "partner_logo" character varying);


DROP VIEW IF EXISTS "course_overview_view";
CREATE TABLE "course_overview_view" ("course_id" integer, "course_name" character varying, "course_description" character varying, "course_type" character varying(255), "page_slug" character varying, "icon_url" character varying(512), "long_description" text, "learning_goals" jsonb, "teachers" json, "partner_id" integer, "partner_name" character varying(255), "partner_website" character varying, "partner_logo" character varying);


DROP TABLE IF EXISTS "course_type";
DROP SEQUENCE IF EXISTS course_type_id_seq;
CREATE SEQUENCE course_type_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 START 1 CACHE 1;

CREATE TABLE "public"."course_type" (
    "id" integer DEFAULT nextval('course_type_id_seq') NOT NULL,
    "name" character varying(255) NOT NULL,
    CONSTRAINT "course_type_id" PRIMARY KEY ("id")
) WITH (oids = false);


DROP TABLE IF EXISTS "course_week";
CREATE TABLE "public"."course_week" (
    "course_id" integer NOT NULL,
    "week_number" smallint NOT NULL,
    "description" character varying(512),
    "subjects_covered" jsonb,
    CONSTRAINT "course_weeks_composite_pk" PRIMARY KEY ("course_id", "week_number"),
    CONSTRAINT "course_weeks_course_id_fkey" FOREIGN KEY (course_id) REFERENCES course(id) ON UPDATE CASCADE ON DELETE CASCADE NOT DEFERRABLE
) WITH (oids = false);


DROP VIEW IF EXISTS "course_weeks_view";
CREATE TABLE "course_weeks_view" ("id" integer, "weeks" text);


DROP TABLE IF EXISTS "partner";
DROP SEQUENCE IF EXISTS partner_id_seq;
CREATE SEQUENCE partner_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 START 1 CACHE 1;

CREATE TABLE "public"."partner" (
    "id" integer DEFAULT nextval('partner_id_seq') NOT NULL,
    "name" character varying(255) NOT NULL,
    "logo_url" character varying NOT NULL,
    "website_url" character varying,
    CONSTRAINT "partner_pk" PRIMARY KEY ("id")
) WITH (oids = false);


DROP TABLE IF EXISTS "student_work";
DROP SEQUENCE IF EXISTS student_work_id_seq;
CREATE SEQUENCE student_work_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 START 1 CACHE 1;

CREATE TABLE "public"."student_work" (
    "id" integer DEFAULT nextval('student_work_id_seq') NOT NULL,
    "student_name" character varying(255) NOT NULL,
    "title" character varying(255) NOT NULL,
    "repository_url" character varying(512),
    "demo_url" character varying(512),
    "course_id" integer NOT NULL,
    CONSTRAINT "student_work_pk" PRIMARY KEY ("id"),
    CONSTRAINT "student_work_course_id_fkey" FOREIGN KEY (course_id) REFERENCES course(id) ON UPDATE CASCADE ON DELETE RESTRICT NOT DEFERRABLE
) WITH (oids = false);


DROP TABLE IF EXISTS "teacher";
DROP SEQUENCE IF EXISTS teacher_teacher_id_seq;
CREATE SEQUENCE teacher_teacher_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 START 1 CACHE 1;

CREATE TABLE "public"."teacher" (
    "id" integer DEFAULT nextval('teacher_teacher_id_seq') NOT NULL,
    "type" integer NOT NULL,
    "name" character varying(255) NOT NULL,
    "repository_url" character varying(512),
    "website_url" character varying(512),
    "avatar_url" character varying(512) NOT NULL,
    "short_story" character varying(512) NOT NULL,
    CONSTRAINT "teacher_pk" PRIMARY KEY ("id"),
    CONSTRAINT "teacher_teacher_id_fkey" FOREIGN KEY (id) REFERENCES teacher_type(id) ON UPDATE CASCADE ON DELETE RESTRICT NOT DEFERRABLE
) WITH (oids = false);


DROP TABLE IF EXISTS "teacher_course";
CREATE TABLE "public"."teacher_course" (
    "teacher_id" integer NOT NULL,
    "course_id" integer NOT NULL,
    CONSTRAINT "teacher_course_composite_pk" PRIMARY KEY ("teacher_id", "course_id"),
    CONSTRAINT "teacher_course_course_id_fkey" FOREIGN KEY (course_id) REFERENCES course(id) ON UPDATE CASCADE ON DELETE RESTRICT NOT DEFERRABLE,
    CONSTRAINT "teacher_course_teacher_id_fkey" FOREIGN KEY (teacher_id) REFERENCES teacher(id) ON UPDATE CASCADE ON DELETE RESTRICT NOT DEFERRABLE
) WITH (oids = false);


DROP TABLE IF EXISTS "teacher_type";
DROP SEQUENCE IF EXISTS teacher_type_teacher_type_id_seq;
CREATE SEQUENCE teacher_type_teacher_type_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 START 1 CACHE 1;

CREATE TABLE "public"."teacher_type" (
    "id" integer DEFAULT nextval('teacher_type_teacher_type_id_seq') NOT NULL,
    "name" character varying(255) NOT NULL,
    CONSTRAINT "teacher_type_pk" PRIMARY KEY ("id")
) WITH (oids = false);


DROP TABLE IF EXISTS "testimonial";
DROP SEQUENCE IF EXISTS testimonial_id_seq;
CREATE SEQUENCE testimonial_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 START 1 CACHE 1;

CREATE TABLE "public"."testimonial" (
    "id" integer DEFAULT nextval('testimonial_id_seq') NOT NULL,
    "name" integer NOT NULL,
    "role" character varying NOT NULL,
    "message" text NOT NULL,
    CONSTRAINT "testimonial_pk" PRIMARY KEY ("id")
) WITH (oids = false);


DROP TABLE IF EXISTS "course_composed_view";
CREATE TABLE "public"."course_composed_view" (
    "course_week_pk" text,
    "course_id" integer,
    "course_name" character varying,
    "teacher_id" integer,
    "week_number" smallint,
    "teacher_name" character varying(255),
    "teacher_avatar" character varying(512),
    "teacher_short_story" character varying(512),
    "week_description" character varying(512),
    "course_description" character varying,
    "course_type" character varying(255),
    "page_slug" character varying,
    "icon_url" character varying(512),
    "long_description" text,
    "learning_goals" jsonb,
    "partner_id" integer,
    "partner_name" character varying(255),
    "partner_website" character varying,
    "partner_logo" character varying
) WITH (oids = false);

DROP TABLE IF EXISTS "course_overview_view";
CREATE TABLE "public"."course_overview_view" (
    "course_id" integer,
    "course_name" character varying,
    "course_description" character varying,
    "course_type" character varying(255),
    "page_slug" character varying,
    "icon_url" character varying(512),
    "long_description" text,
    "learning_goals" jsonb,
    "teachers" json,
    "partner_id" integer,
    "partner_name" character varying(255),
    "partner_website" character varying,
    "partner_logo" character varying
) WITH (oids = false);

DROP TABLE IF EXISTS "course_weeks_view";
CREATE TABLE "public"."course_weeks_view" (
    "id" integer,
    "weeks" text
) WITH (oids = false);

-- 2018-06-13 11:40:11.226258+00
