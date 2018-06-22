--
-- PostgreSQL database dump
--

-- Dumped from database version 10.4
-- Dumped by pg_dump version 10.4 (Ubuntu 10.4-0ubuntu0.18.04)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: course; Type: TABLE; Schema: public; Owner: minorwebdev
--

CREATE TABLE public.course (
    id integer NOT NULL,
    name character varying NOT NULL,
    short_description character varying NOT NULL,
    partner_id integer,
    type_id integer NOT NULL,
    active boolean NOT NULL,
    period smallint NOT NULL,
    page_slug character varying NOT NULL,
    long_description text,
    learning_goals jsonb,
    icon_url character varying(512)
);


ALTER TABLE public.course OWNER TO minorwebdev;

--
-- Name: course_type; Type: TABLE; Schema: public; Owner: minorwebdev
--

CREATE TABLE public.course_type (
    id integer NOT NULL,
    name character varying(255) NOT NULL
);


ALTER TABLE public.course_type OWNER TO minorwebdev;

--
-- Name: course_week; Type: TABLE; Schema: public; Owner: minorwebdev
--

CREATE TABLE public.course_week (
    course_id integer NOT NULL,
    week_number smallint NOT NULL,
    description character varying(512),
    subjects_covered jsonb
);


ALTER TABLE public.course_week OWNER TO minorwebdev;

--
-- Name: partner; Type: TABLE; Schema: public; Owner: minorwebdev
--

CREATE TABLE public.partner (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    logo_url character varying NOT NULL,
    website_url character varying
);


ALTER TABLE public.partner OWNER TO minorwebdev;

--
-- Name: teacher_teacher_id_seq; Type: SEQUENCE; Schema: public; Owner: minorwebdev
--

CREATE SEQUENCE public.teacher_teacher_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    MAXVALUE 2147483647
    CACHE 1;


ALTER TABLE public.teacher_teacher_id_seq OWNER TO minorwebdev;

--
-- Name: teacher; Type: TABLE; Schema: public; Owner: minorwebdev
--

CREATE TABLE public.teacher (
    id integer DEFAULT nextval('public.teacher_teacher_id_seq'::regclass) NOT NULL,
    type integer NOT NULL,
    name character varying(255) NOT NULL,
    repository_url character varying(512),
    website_url character varying(512),
    avatar_url character varying(512) NOT NULL,
    short_story character varying(512) NOT NULL
);


ALTER TABLE public.teacher OWNER TO minorwebdev;

--
-- Name: teacher_course; Type: TABLE; Schema: public; Owner: minorwebdev
--

CREATE TABLE public.teacher_course (
    teacher_id integer NOT NULL,
    course_id integer NOT NULL
);


ALTER TABLE public.teacher_course OWNER TO minorwebdev;

--
-- Name: course_composed_view; Type: VIEW; Schema: public; Owner: minorwebdev
--

CREATE VIEW public.course_composed_view AS
 SELECT concat(course_week.course_id, course_week.week_number) AS course_week_pk,
    course.id AS course_id,
    course.name AS course_name,
    teacher.id AS teacher_id,
    course_week.week_number,
    teacher.name AS teacher_name,
    teacher.avatar_url AS teacher_avatar,
    teacher.short_story AS teacher_short_story,
    course_week.description AS week_description,
    course_week.subjects_covered AS week_subjects,
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
   FROM (((((public.course
     JOIN public.teacher_course ON ((course.id = teacher_course.course_id)))
     RIGHT JOIN public.teacher ON ((teacher.id = teacher_course.teacher_id)))
     LEFT JOIN public.partner ON ((partner.id = course.partner_id)))
     JOIN public.course_type ON ((course.type_id = course_type.id)))
     RIGHT JOIN public.course_week ON ((course.id = course_week.course_id)))
  WHERE (course.active = true)
  ORDER BY (concat(course_week.course_id, course_week.week_number));


ALTER TABLE public.course_composed_view OWNER TO minorwebdev;

--
-- Name: course_id_seq; Type: SEQUENCE; Schema: public; Owner: minorwebdev
--

CREATE SEQUENCE public.course_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.course_id_seq OWNER TO minorwebdev;

--
-- Name: course_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: minorwebdev
--

ALTER SEQUENCE public.course_id_seq OWNED BY public.course.id;


--
-- Name: course_overview_view; Type: VIEW; Schema: public; Owner: minorwebdev
--

CREATE VIEW public.course_overview_view AS
 SELECT course.id AS course_id,
    course.name AS course_name,
    course.short_description AS course_description,
    course_type.name AS course_type,
    course.page_slug,
    course.icon_url,
    course.long_description,
    course.learning_goals,
    ((('['::text || string_agg((((((((('
        {
            "id": "'::text || teacher.id) || '",
            "name": "'::text) || (teacher.name)::text) || '",
            "avatar": "'::text) || (teacher.avatar_url)::text) || '",
            "short_story": "'::text) || (teacher.short_story)::text) || '"
        }'::text), ','::text)) || ']'::text))::json AS teachers,
    partner.id AS partner_id,
    partner.name AS partner_name,
    partner.website_url AS partner_website,
    partner.logo_url AS partner_logo
   FROM ((((public.teacher
     JOIN public.teacher_course ON ((teacher.id = teacher_course.teacher_id)))
     RIGHT JOIN public.course ON ((course.id = teacher_course.course_id)))
     LEFT JOIN public.partner ON ((partner.id = course.partner_id)))
     JOIN public.course_type ON ((course.type_id = course_type.id)))
  WHERE (course.active = true)
  GROUP BY course.id, course.name, course_type.name, course.short_description, course.page_slug, course.icon_url, course.long_description, course.learning_goals, partner.id, partner.name, partner.website_url, partner.logo_url;


ALTER TABLE public.course_overview_view OWNER TO minorwebdev;

--
-- Name: course_type_id_seq; Type: SEQUENCE; Schema: public; Owner: minorwebdev
--

CREATE SEQUENCE public.course_type_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.course_type_id_seq OWNER TO minorwebdev;

--
-- Name: course_type_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: minorwebdev
--

ALTER SEQUENCE public.course_type_id_seq OWNED BY public.course_type.id;


--
-- Name: course_weeks_view; Type: VIEW; Schema: public; Owner: minorwebdev
--

CREATE VIEW public.course_weeks_view AS
 SELECT course.id,
    (('{'::text || string_agg(((((('"'::text || course_week.week_number) || '": '::text) || '"'::text) || (course_week.description)::text) || '"'::text), ','::text)) || '}'::text) AS weeks
   FROM (public.course
     LEFT JOIN public.course_week ON ((course.id = course_week.course_id)))
  WHERE (course.active = true)
  GROUP BY course.id;


ALTER TABLE public.course_weeks_view OWNER TO minorwebdev;

--
-- Name: partner_id_seq; Type: SEQUENCE; Schema: public; Owner: minorwebdev
--

CREATE SEQUENCE public.partner_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.partner_id_seq OWNER TO minorwebdev;

--
-- Name: partner_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: minorwebdev
--

ALTER SEQUENCE public.partner_id_seq OWNED BY public.partner.id;


--
-- Name: student_work; Type: TABLE; Schema: public; Owner: minorwebdev
--

CREATE TABLE public.student_work (
    id integer NOT NULL,
    student_name character varying(255) NOT NULL,
    title character varying(255) NOT NULL,
    repository_url character varying(512),
    demo_url character varying(512),
    course_id integer NOT NULL
);


ALTER TABLE public.student_work OWNER TO minorwebdev;

--
-- Name: student_work_id_seq; Type: SEQUENCE; Schema: public; Owner: minorwebdev
--

CREATE SEQUENCE public.student_work_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.student_work_id_seq OWNER TO minorwebdev;

--
-- Name: student_work_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: minorwebdev
--

ALTER SEQUENCE public.student_work_id_seq OWNED BY public.student_work.id;


--
-- Name: teacher_type; Type: TABLE; Schema: public; Owner: minorwebdev
--

CREATE TABLE public.teacher_type (
    id integer NOT NULL,
    name character varying(255) NOT NULL
);


ALTER TABLE public.teacher_type OWNER TO minorwebdev;

--
-- Name: teacher_type_teacher_type_id_seq; Type: SEQUENCE; Schema: public; Owner: minorwebdev
--

CREATE SEQUENCE public.teacher_type_teacher_type_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.teacher_type_teacher_type_id_seq OWNER TO minorwebdev;

--
-- Name: teacher_type_teacher_type_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: minorwebdev
--

ALTER SEQUENCE public.teacher_type_teacher_type_id_seq OWNED BY public.teacher_type.id;


--
-- Name: testimonial; Type: TABLE; Schema: public; Owner: minorwebdev
--

CREATE TABLE public.testimonial (
    id integer NOT NULL,
    name integer NOT NULL,
    role character varying NOT NULL,
    message text NOT NULL
);


ALTER TABLE public.testimonial OWNER TO minorwebdev;

--
-- Name: testimonial_id_seq; Type: SEQUENCE; Schema: public; Owner: minorwebdev
--

CREATE SEQUENCE public.testimonial_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.testimonial_id_seq OWNER TO minorwebdev;

--
-- Name: testimonial_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: minorwebdev
--

ALTER SEQUENCE public.testimonial_id_seq OWNED BY public.testimonial.id;


--
-- Name: course id; Type: DEFAULT; Schema: public; Owner: minorwebdev
--

ALTER TABLE ONLY public.course ALTER COLUMN id SET DEFAULT nextval('public.course_id_seq'::regclass);


--
-- Name: course_type id; Type: DEFAULT; Schema: public; Owner: minorwebdev
--

ALTER TABLE ONLY public.course_type ALTER COLUMN id SET DEFAULT nextval('public.course_type_id_seq'::regclass);


--
-- Name: partner id; Type: DEFAULT; Schema: public; Owner: minorwebdev
--

ALTER TABLE ONLY public.partner ALTER COLUMN id SET DEFAULT nextval('public.partner_id_seq'::regclass);


--
-- Name: student_work id; Type: DEFAULT; Schema: public; Owner: minorwebdev
--

ALTER TABLE ONLY public.student_work ALTER COLUMN id SET DEFAULT nextval('public.student_work_id_seq'::regclass);


--
-- Name: teacher_type id; Type: DEFAULT; Schema: public; Owner: minorwebdev
--

ALTER TABLE ONLY public.teacher_type ALTER COLUMN id SET DEFAULT nextval('public.teacher_type_teacher_type_id_seq'::regclass);


--
-- Name: testimonial id; Type: DEFAULT; Schema: public; Owner: minorwebdev
--

ALTER TABLE ONLY public.testimonial ALTER COLUMN id SET DEFAULT nextval('public.testimonial_id_seq'::regclass);


--
-- Data for Name: course; Type: TABLE DATA; Schema: public; Owner: minorwebdev
--

COPY public.course (id, name, short_description, partner_id, type_id, active, period, page_slug, long_description, learning_goals, icon_url) FROM stdin;
5	Project 1	Projectweek 1 for the public library of Amsterdam	1	1	t	1	project-1	\N	\N	\N
3	Real Time Web	In drie weken leer je hoe je real time / live data op een inzichtelijke manier toegankelijk kunt maken voor de eindgebruiker.	\N	3	t	1	real-time-web	During this course you'll learn to use Socket.io to establish a connection between the browser and the server. You'll combine your knowledge from other courses and your newly aqquired skills from this course to create a progressive web app that retrieves live data from an API, and display the data to the user.	["Student is able to build a (Node) webapp with a back-end that uses templating, routing and a remote database.", "Student can deliver a live application where the interaction influences the content of the application by manipulating the database.", "Student can translate live data to a reactive view (datavisualisation is allowed) that is useful for the end user."]	/img/partners/oba.jpg
4	Web Design	Creating websites is getting more and more complex and is usually not a one person job. It is important to ensure that design is consistent and optimized to meet business objectives and create enjoyable experiences for users.	\N	3	t	1	web-design	The path of the righteous man is beset on all sides by the iniquities of the selfish and the tyranny of evil men. Blessed is he who, in the name of charity and good will, shepherds the weak through the valley of darkness, for he is truly his brother's keeper and the finder of lost children. And I will strike down upon thee with great vengeance and furious anger those who would attempt to poison and destroy My brothers. And you will know My name is the Lord when I lay My vengeance upon thee.	["The river stole the gods.", "Don't step on the broken glass.", "If Purple People Eaters are real… where do they find purple people to eat?"]	https://pre00.deviantart.net/25c6/th/pre/f/2016/117/0/4/bridge___flat_design_wallpaper_by_sebastian456-da0elq8.png
\.


--
-- Data for Name: course_type; Type: TABLE DATA; Schema: public; Owner: minorwebdev
--

COPY public.course_type (id, name) FROM stdin;
1	PROJECT
2	WEEKLY_NERD
3	COURSE
\.


--
-- Data for Name: course_week; Type: TABLE DATA; Schema: public; Owner: minorwebdev
--

COPY public.course_week (course_id, week_number, description, subjects_covered) FROM stdin;
4	1	CSS startup	["The river stole the gods.", "Don't step on the broken glass.", "If Purple People Eaters are real… where do they find purple people to eat?"]
4	2	Just use weird selectors	["Different data", "Don't step on the broken glass.", "Allways be weary near Ronald McDonald"]
4	3	Time to finish everything up :)	["Different data", "Don't step on the broken glass.", "Allways be weary near Ronald McDonald"]
\.


--
-- Data for Name: partner; Type: TABLE DATA; Schema: public; Owner: minorwebdev
--

COPY public.partner (id, name, logo_url, website_url) FROM stdin;
1	Public Library of Amsterdam	http://www.thonik.nl/app/uploads/07-thonik-amsterdam-openbare_bibliotheek_amsterdam_OBA-library-logo_uitleg-filmstill-1440x810.jpg	https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&cad=rja&uact=8&ved=0ahUKEwjb3InB48vbAhVCVxQKHTsdATYQFggpMAA&url=https%3A%2F%2Fwww.oba.nl%2F&usg=AOvVaw06a4oMxeuReoEHbO8YMRqX
\.


--
-- Data for Name: student_work; Type: TABLE DATA; Schema: public; Owner: minorwebdev
--

COPY public.student_work (id, student_name, title, repository_url, demo_url, course_id) FROM stdin;
\.


--
-- Data for Name: teacher; Type: TABLE DATA; Schema: public; Owner: minorwebdev
--

COPY public.teacher (id, type, name, repository_url, website_url, avatar_url, short_story) FROM stdin;
2	1	Koop Reynders	https://github.com/KoopReynders	\N	https://avatars2.githubusercontent.com/u/1391509?s=460&v=4	Masta stylo
1	1	Derpy mcDerpface	https://github.com/vasilisvg	http://vasilis.nl/	https://a11yrules.com/wp-content/uploads/2018/01/Vasilis-van-Gemert.jpg	Hallo
\.


--
-- Data for Name: teacher_course; Type: TABLE DATA; Schema: public; Owner: minorwebdev
--

COPY public.teacher_course (teacher_id, course_id) FROM stdin;
1	3
1	4
2	4
\.


--
-- Data for Name: teacher_type; Type: TABLE DATA; Schema: public; Owner: minorwebdev
--

COPY public.teacher_type (id, name) FROM stdin;
1	TEACHER
2	GUEST_SPEAKER
\.


--
-- Data for Name: testimonial; Type: TABLE DATA; Schema: public; Owner: minorwebdev
--

COPY public.testimonial (id, name, role, message) FROM stdin;
\.


--
-- Name: course_id_seq; Type: SEQUENCE SET; Schema: public; Owner: minorwebdev
--

SELECT pg_catalog.setval('public.course_id_seq', 6, true);


--
-- Name: course_type_id_seq; Type: SEQUENCE SET; Schema: public; Owner: minorwebdev
--

SELECT pg_catalog.setval('public.course_type_id_seq', 3, true);


--
-- Name: partner_id_seq; Type: SEQUENCE SET; Schema: public; Owner: minorwebdev
--

SELECT pg_catalog.setval('public.partner_id_seq', 1, true);


--
-- Name: student_work_id_seq; Type: SEQUENCE SET; Schema: public; Owner: minorwebdev
--

SELECT pg_catalog.setval('public.student_work_id_seq', 1, false);


--
-- Name: teacher_teacher_id_seq; Type: SEQUENCE SET; Schema: public; Owner: minorwebdev
--

SELECT pg_catalog.setval('public.teacher_teacher_id_seq', 2, true);


--
-- Name: teacher_type_teacher_type_id_seq; Type: SEQUENCE SET; Schema: public; Owner: minorwebdev
--

SELECT pg_catalog.setval('public.teacher_type_teacher_type_id_seq', 2, true);


--
-- Name: testimonial_id_seq; Type: SEQUENCE SET; Schema: public; Owner: minorwebdev
--

SELECT pg_catalog.setval('public.testimonial_id_seq', 1, false);


--
-- Name: course course_page_slug_unique; Type: CONSTRAINT; Schema: public; Owner: minorwebdev
--

ALTER TABLE ONLY public.course
    ADD CONSTRAINT course_page_slug_unique UNIQUE (page_slug);


--
-- Name: course course_pk; Type: CONSTRAINT; Schema: public; Owner: minorwebdev
--

ALTER TABLE ONLY public.course
    ADD CONSTRAINT course_pk PRIMARY KEY (id);


--
-- Name: course_type course_type_id; Type: CONSTRAINT; Schema: public; Owner: minorwebdev
--

ALTER TABLE ONLY public.course_type
    ADD CONSTRAINT course_type_id PRIMARY KEY (id);


--
-- Name: course_week course_weeks_composite_pk; Type: CONSTRAINT; Schema: public; Owner: minorwebdev
--

ALTER TABLE ONLY public.course_week
    ADD CONSTRAINT course_weeks_composite_pk PRIMARY KEY (course_id, week_number);


--
-- Name: partner partner_pk; Type: CONSTRAINT; Schema: public; Owner: minorwebdev
--

ALTER TABLE ONLY public.partner
    ADD CONSTRAINT partner_pk PRIMARY KEY (id);


--
-- Name: student_work student_work_pk; Type: CONSTRAINT; Schema: public; Owner: minorwebdev
--

ALTER TABLE ONLY public.student_work
    ADD CONSTRAINT student_work_pk PRIMARY KEY (id);


--
-- Name: teacher_course teacher_course_composite_pk; Type: CONSTRAINT; Schema: public; Owner: minorwebdev
--

ALTER TABLE ONLY public.teacher_course
    ADD CONSTRAINT teacher_course_composite_pk PRIMARY KEY (teacher_id, course_id);


--
-- Name: teacher teacher_pk; Type: CONSTRAINT; Schema: public; Owner: minorwebdev
--

ALTER TABLE ONLY public.teacher
    ADD CONSTRAINT teacher_pk PRIMARY KEY (id);


--
-- Name: teacher_type teacher_type_pk; Type: CONSTRAINT; Schema: public; Owner: minorwebdev
--

ALTER TABLE ONLY public.teacher_type
    ADD CONSTRAINT teacher_type_pk PRIMARY KEY (id);


--
-- Name: testimonial testimonial_pk; Type: CONSTRAINT; Schema: public; Owner: minorwebdev
--

ALTER TABLE ONLY public.testimonial
    ADD CONSTRAINT testimonial_pk PRIMARY KEY (id);


--
-- Name: course course_partner_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: minorwebdev
--

ALTER TABLE ONLY public.course
    ADD CONSTRAINT course_partner_id_fkey FOREIGN KEY (partner_id) REFERENCES public.partner(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: course course_type_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: minorwebdev
--

ALTER TABLE ONLY public.course
    ADD CONSTRAINT course_type_id_fkey FOREIGN KEY (type_id) REFERENCES public.course_type(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: course_week course_weeks_course_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: minorwebdev
--

ALTER TABLE ONLY public.course_week
    ADD CONSTRAINT course_weeks_course_id_fkey FOREIGN KEY (course_id) REFERENCES public.course(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: student_work student_work_course_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: minorwebdev
--

ALTER TABLE ONLY public.student_work
    ADD CONSTRAINT student_work_course_id_fkey FOREIGN KEY (course_id) REFERENCES public.course(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: teacher_course teacher_course_course_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: minorwebdev
--

ALTER TABLE ONLY public.teacher_course
    ADD CONSTRAINT teacher_course_course_id_fkey FOREIGN KEY (course_id) REFERENCES public.course(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: teacher_course teacher_course_teacher_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: minorwebdev
--

ALTER TABLE ONLY public.teacher_course
    ADD CONSTRAINT teacher_course_teacher_id_fkey FOREIGN KEY (teacher_id) REFERENCES public.teacher(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: teacher teacher_teacher_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: minorwebdev
--

ALTER TABLE ONLY public.teacher
    ADD CONSTRAINT teacher_teacher_id_fkey FOREIGN KEY (id) REFERENCES public.teacher_type(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- PostgreSQL database dump complete
--

