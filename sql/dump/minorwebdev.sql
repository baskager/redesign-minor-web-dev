--
-- PostgreSQL database dump
--

-- Dumped from database version 10.4
-- Dumped by pg_dump version 10.4

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
    period_id integer NOT NULL,
    page_slug character varying NOT NULL,
    long_description text,
    learning_goals jsonb,
    icon_url character varying(512),
    color character varying(7),
    summary text
);


ALTER TABLE public.course OWNER TO minorwebdev;

--
-- Name: course_period; Type: TABLE; Schema: public; Owner: minorwebdev
--

CREATE TABLE public.course_period (
    number integer NOT NULL,
    weeks jsonb NOT NULL
);


ALTER TABLE public.course_period OWNER TO minorwebdev;

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
    course_week.week_number,
    course_period.number AS course_period_number,
    course_period.weeks AS course_period_weeks,
    teacher.id AS teacher_id,
    teacher.name AS teacher_name,
    teacher.avatar_url AS teacher_avatar,
    teacher.short_story AS teacher_short_story,
    course_week.description AS week_description,
    course_week.subjects_covered AS week_subjects,
    course.short_description AS course_description,
    course.long_description,
    course.summary,
    course_type.name AS course_type,
    course.page_slug,
    course.color,
    course.icon_url,
    course.learning_goals,
    partner.id AS partner_id,
    partner.name AS partner_name,
    partner.website_url AS partner_website,
    partner.logo_url AS partner_logo
   FROM ((((((public.course
     JOIN public.teacher_course ON ((course.id = teacher_course.course_id)))
     RIGHT JOIN public.teacher ON ((teacher.id = teacher_course.teacher_id)))
     LEFT JOIN public.partner ON ((partner.id = course.partner_id)))
     JOIN public.course_type ON ((course.type_id = course_type.id)))
     JOIN public.course_period ON ((course.period_id = course_period.number)))
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

COPY public.course (id, name, short_description, partner_id, type_id, active, period_id, page_slug, long_description, learning_goals, icon_url, color, summary) FROM stdin;
4	Web Design	Design like a pro	\N	3	t	3	web-design	The path of the righteous man is beset on all sides by the iniquities of the selfish and the tyranny of evil men. Blessed is he who, in the name of charity and good will, shepherds the weak through the valley of darkness, for he is truly his brother's keeper and the finder of lost children. And I will strike down upon thee with great vengeance and furious anger those who would attempt to poison and destroy My brothers. And you will know My name is the Lord when I lay My vengeance upon thee.	["The river stole the gods.", "Don't step on the broken glass.", "If Purple People Eaters are real… where do they find purple people to eat?"]	https://pre00.deviantart.net/25c6/th/pre/f/2016/117/0/4/bridge___flat_design_wallpaper_by_sebastian456-da0elq8.png	#C6006B	As a developer, it is important to understand a few basics of web design. Not many developers are able to create a good looking website as well. During this course, we will teach you several basic principles of web design. We will also test our websites on several people with special needs.
3	Real Time Web	Live data	\N	3	t	3	real-time-web	During this course you'll learn to use Socket.io to establish a connection between the browser and the server. You'll combine your knowledge from other courses and your newly aqquired skills from this course to create a progressive web app that retrieves live data from an API, and display the data to the user.	["Student is able to build a (Node) webapp with a back-end that uses templating, routing and a remote database.", "Student can deliver a live application where the interaction influences the content of the application by manipulating the database.", "Student can translate live data to a reactive view (datavisualisation is allowed) that is useful for the end user."]	/img/partners/oba.jpg	#901265	Making a web app is fun and all, but the real fun starts when you create a connection between the server and (multiple) users. During this course, we will use websockets to establish this connection. We will receive data from an API, and use this to display the right content to the right user.
5	Project 1	At the OBA we will create awesome stuff with data about Amsterdam which they collected throughout the years.	1	1	t	1	project-1	The public library of Amsterdam and several other instances in Amsterdam have created their own database full with information about Amsterdam, called ADAMnet. As we speak, this database is still expanding, but there is no good implementation of the data. They want us to create a web app that uses their data. They have a few cases you can choose from, but they leave it up to you what you want to do with their data.	["The student shows that he is able to apply his knowledge from Web Apps From Scratch and CSS To The Rescue", "The student can translate the question of a client into a working prototype"]	\N	\N	During project 1, we will challenge you to use your acquired knowledge from Web Apps From Scratch and CSS To The Rescue. The client is the OBA, the public library of Amsterdam. They got a shit ton of data, and they want you to use it and make a visualisation of it.
7	CSS To The Rescue	CSS & accessibility	\N	3	t	1	css-to-the-rescue	In 3 weeks, we will expand our knowledge of CSS. We are going to look for the boundaries of the style language. You will get a few components, and it is your job to create a good looking, responsive website that is easy to use. The website should be usable with the tab key. Within this website, you will apply a few predefined techniques. Not many websites are ‘pleasurable’ to use. You will be evaluated on: process, product and presentation. At the end of the course, you are able to determine how to create a pleasurable website.	["The student is able to create a good working responsive solution for a complex interface", "The student can create a pleasurable interface for different user needs", "The student understands a few basic principles of CSS and can apply them", "The student can design a web page with attention to details according to the principles of progressive enhancement"]	https://assets.wordpress.envato-static.com/uploads/2016/03/Tools-for-Structuring-Optimizing-Your-CSS-Code.jpg	#4e00af	During this course, we will work with CSS. We are going to create pleasurable responsive solutions for complex interfaces. It is also very important to know a few basic principles of CSS. Not only on practical level, but experimental level as well. 
8	Web app from scratch	Javascript introduction	\N	3	t	1	web-app-from-scratch	In 3 weeks, we will learn JavaScript principles that you will apply to the rest of the minor. We will go over the newest JavaScript techniques and possibly apply them to your code. With a small micro library, we will make sure you can display relevant data from the API to the user. You will be evaluated on: readme file, templating, API call, manipulating data, feedback to the user and explaining a few JavaScript concepts. When the course is done, you are able to create a single page web app which displays relevant data to the user.	["The student is able to apply Javascript Object Oriented Programming and/or Functional Programming", "The student can retrieve data from an external API, manipulate and display the data with JavaScript", "The student van add interaction to an app with JavaScript"]	https://cdn-images-1.medium.com/max/1600/1*uiYye9J142y8fIZGRnufEw.png	#005aad	During this course, we are going to create a web app without any frameworks or libraries. Native HTML, CSS and JavaScript is the way to go. We will retrieve data from an external API, and this data will be manipulated.
10	Browser Technologies	Progressive Enhancement	\N	3	t	2	browser-technologies	The web is a messy place, but during this course you will learn how to create web apps that are accessible for almost everybody. Doing research about techniques and fallback is a huge part in this course. We have a ‘Device Lab’ where we collected several outdated and less outdated devices where you are able to test your web app. You will be evaluated on: accessibility, functionality, progressive enhancement and feature detection. When the course is done, you are able to create accessible web apps.	["The student can explain progressive enhancement , and apply this", "The student can explain feature detection and can apply this", "The student is able to do research on older browsers and older devices, and can make decisions based on the results of the research"]	http://blog.teamtreehouse.com/wp-content/uploads/2014/11/progressive-enhancement.png	#233e68	One of the best principles of the web is that it is for everybody. Everyone with a browser should be able to use the web, but the web is messy. Developers are lazy, and do not optimize for everyone. During this course, you will learn how to create websites that are accessible for (almost) everyone.
9	Performance matters	Website performance	\N	3	t	2	performance-matters	Performance is a huge part of creating a web app. Websites are getting bigger and bigger, but users don’t want to wait more than a few seconds for a page to load. Server side rendering is a huge part during this course. We will create a back-end with Node.JS, a back-end language based on JavaScript. If you have no experience with Node, we encourage you to learn the basics. You can read here more about the requirements. After the course, you will be able to create a server side web app that renders fast as hell.	["The student understands several concepts of performance and can apply them in a web app", "The student can use several tools to test their app’s performance", "The student can optimize the performance of their app", "The student understands the difference between client side and server side rendering, and what the effects are on the performance", "The student can adapt a client side web app to a server side web app with Node.JS"]	https://i.pinimg.com/originals/6f/8f/a0/6f8fa03e7e73635f8ba88e0aabfd49bd.jpg	#007a4e	The faster the better. Users don’t want to wait more than a few seconds for a web page to load. During this course, you will learn how you can optimize your website, and make sure that the load time of the page is as small as possible.
11	Project 2	Lifely is a digital agency. Here we’re going to work in their codebase of multiple projects.	2	1	t	2	project-2	Lifely asked us to look into their codebase. You can pick one of their projects, and try to optimize it.	["The student shows that he is able to apply his knowledge from Browser Technologies and Performance Matters", "The student can translate the question of a client into a working prototype"]	\N	\N	During project 2, we will challenge you to use acquired knowledge from Browser Technologies and Performance Matters. The client is Lifely. They digitalise processes of companies. They want us to look at one of their their projects, and improve the performance and accessibility.
12	Project 3	De Ceuvel is a playground for green innovation. Here we will see what we can do with green technology	3	1	t	3	project-3	De Ceuvel is an area where they produce their own electricity and food. On the area, there is a restaurant that is accessible for everyone. Normally they are 100% vegetarian, but once in the year, they serve the fish that they grow up themself. De Ceuvel created a ‘Aquaponics’ system. In this system, everything is connected to everything, and everything needs everything. If one variable changes, the whole system could collapse. Every value is gathered in real-time, and stored in a database. They want us to visualise the data gathered from the system.	["The student shows that he is able to apply his knowledge from Web Design and Real-Time Web", "The student can translate the question of a client into a working prototype"]	http://deceuvel.nl/wp-content/uploads/2016/06/De-Ceuvel1.jpg	\N	During project 3, we will challenge you to use acquired knowledge from Web Design and Real-Time Web. The client is de Ceuvel. De Ceuvel is an area in Amsterdam North, where they try to life completely ‘green’. The gather a shit ton of data, and they ask you to visualise the data.
\.


--
-- Data for Name: course_period; Type: TABLE DATA; Schema: public; Owner: minorwebdev
--

COPY public.course_period (number, weeks) FROM stdin;
1	[1, 2, 3, 4]
3	[9, 10, 11, 12]
2	[5, 6, 7, 8]
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
5	1	\N	\N
11	1	\N	\N
12	1	\N	\N
3	3	Continue working on your own API and learn about different ways to share your data	["Finishing the project"]
3	1	Set up your very own development environment and build/deploy a basic app	["Set up your very own development environment and build/deploy a basic app"]
3	2	Learn about client-server communication and connect with a real-time data source	["Learn about client-server communication and connect with a real-time data source"]
4	3	Learn how to implement feedback in your design. Loading web pages, showing error messages and much more 	["Finish the final exercise and test your web app with the test subject"]
4	2	User needs and usability. Write user stories and test with real people.	["Discuss the final exercise, meet with your test subject and begin with the final exercise"]
4	1	Design a user interface for a use case. Make your design in HTML, CSS and Javascript keeping at least three interface design principles in mind	["Create a small web app with at least 3 interface design principles, test the app and improve the app"]
7	1	Creating fun, pleasurable and accessible solutions for different kinds of interfaces.	["Introduction and explanation of the course, discuss Emotional Interface Design, work on final project and evaluate your progress"]
7	2	Using CSS without the use of classes. Getting to know the basic CSS principles is key!	["Short explanation exercise, looking back at last week, working on project and evaluating the progress"]
7	3	Finetune the structure and flow of your app, because It's a wrap!	["Finetune the structure and flow of your app"]
8	1	Introduction to Javascript object programming and coding design patterns.	["Introduction JavaScript objects & modules, design patterns and explanation exercise"]
8	2	Resolving and manipulating data from an API.	["Introduction routing, data & templating, feedback on week one and discuss exercise"]
8	3	Designing your pleasurable interface with attention to detail.	["Discuss feedback, make a flow diagram, view progression and review final exercise"]
9	1	Make the basic functionality work on on as many devices as possible.	["Perform an audit and optimize an existing web app"]
9	2	Add feature detection to one of your applications.	["Optimizing the web app you made for the course Web Apps From Scratch or Project 1"]
9	3	Turn your application into a three layer progressive enhancent one.	["Finishing the project"]
10	1	Do a performance audit of an existing site and make a plan to improve it.	["Briefing project, discussing the project and working on project"]
10	2	Add serverside rendering to one of your applications, also turn it in to a progressive web app.	["Discussing feature detection and accessibility, continue on project and testing your web app"]
10	3	Add more optimalisations and a service worker. Make your application work offline.	["Individual coaching and review of your web app and finishing the project"]
\.


--
-- Data for Name: partner; Type: TABLE DATA; Schema: public; Owner: minorwebdev
--

COPY public.partner (id, name, logo_url, website_url) FROM stdin;
1	Public Library of Amsterdam	http://www.thonik.nl/app/uploads/07-thonik-amsterdam-openbare_bibliotheek_amsterdam_OBA-library-logo_uitleg-filmstill-1440x810.jpg	https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&cad=rja&uact=8&ved=0ahUKEwjb3InB48vbAhVCVxQKHTsdATYQFggpMAA&url=https%3A%2F%2Fwww.oba.nl%2F&usg=AOvVaw06a4oMxeuReoEHbO8YMRqX
2	Lifely	https://pbs.twimg.com/profile_images/803168896157159426/QphLOW3s_400x400.jpg	http://www.lifely.nl
3	De Ceuvel	https://deceuvel.nl/wp-content/themes/ceuvel/images/logo.svg	https://deceuvel.nl
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
1	1	Vasilis van Gemert	https://github.com/vasilisvg	http://vasilis.nl/	https://a11yrules.com/wp-content/uploads/2018/01/Vasilis-van-Gemert.jpg	Hallo
3	1	Joost Faber	\N	\N	https://media.licdn.com/dms/image/C4D03AQGjbmp7vQhU6Q/profile-displayphoto-shrink_200_200/0?e=1534982400&v=beta&t=z9pL5r8zgBjYGuQE-56NCJzMYVggUYxIizvpxVotNj4	
7	1	Krijn Hoetmer	\N	https://krijnhoetmer.nl	https://krijnhoetmer.nl/als-plaatje.jpg	Freelance web developer
\.


--
-- Data for Name: teacher_course; Type: TABLE DATA; Schema: public; Owner: minorwebdev
--

COPY public.teacher_course (teacher_id, course_id) FROM stdin;
1	3
1	4
2	4
1	7
3	8
1	5
7	10
3	9
1	11
1	12
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

SELECT pg_catalog.setval('public.course_id_seq', 12, true);


--
-- Name: course_type_id_seq; Type: SEQUENCE SET; Schema: public; Owner: minorwebdev
--

SELECT pg_catalog.setval('public.course_type_id_seq', 3, true);


--
-- Name: partner_id_seq; Type: SEQUENCE SET; Schema: public; Owner: minorwebdev
--

SELECT pg_catalog.setval('public.partner_id_seq', 3, true);


--
-- Name: student_work_id_seq; Type: SEQUENCE SET; Schema: public; Owner: minorwebdev
--

SELECT pg_catalog.setval('public.student_work_id_seq', 1, false);


--
-- Name: teacher_teacher_id_seq; Type: SEQUENCE SET; Schema: public; Owner: minorwebdev
--

SELECT pg_catalog.setval('public.teacher_teacher_id_seq', 7, true);


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
-- Name: course_period period_id; Type: CONSTRAINT; Schema: public; Owner: minorwebdev
--

ALTER TABLE ONLY public.course_period
    ADD CONSTRAINT period_id PRIMARY KEY (number);


--
-- Name: course_period period_weeks; Type: CONSTRAINT; Schema: public; Owner: minorwebdev
--

ALTER TABLE ONLY public.course_period
    ADD CONSTRAINT period_weeks UNIQUE (weeks);


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
-- Name: course course_period_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: minorwebdev
--

ALTER TABLE ONLY public.course
    ADD CONSTRAINT course_period_id_fkey FOREIGN KEY (period_id) REFERENCES public.course_period(number) ON UPDATE CASCADE ON DELETE RESTRICT;


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
-- Name: teacher teacher_type_fkey; Type: FK CONSTRAINT; Schema: public; Owner: minorwebdev
--

ALTER TABLE ONLY public.teacher
    ADD CONSTRAINT teacher_type_fkey FOREIGN KEY (type) REFERENCES public.teacher_type(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- PostgreSQL database dump complete
--

