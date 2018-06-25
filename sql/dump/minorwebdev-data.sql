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
-- Data for Name: course_type; Type: TABLE DATA; Schema: public; Owner: minorwebdev
--

COPY public.course_type (id, name) FROM stdin;
1	PROJECT
2	WEEKLY_NERD
3	COURSE
\.


--
-- Data for Name: partner; Type: TABLE DATA; Schema: public; Owner: minorwebdev
--

COPY public.partner (id, name, logo_url, website_url) FROM stdin;
1	Public Library of Amsterdam	http://www.thonik.nl/app/uploads/07-thonik-amsterdam-openbare_bibliotheek_amsterdam_OBA-library-logo_uitleg-filmstill-1440x810.jpg	https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&cad=rja&uact=8&ved=0ahUKEwjb3InB48vbAhVCVxQKHTsdATYQFggpMAA&url=https%3A%2F%2Fwww.oba.nl%2F&usg=AOvVaw06a4oMxeuReoEHbO8YMRqX
\.


--
-- Data for Name: course; Type: TABLE DATA; Schema: public; Owner: minorwebdev
--

COPY public.course (id, name, short_description, partner_id, type_id, active, period, page_slug, long_description, learning_goals, icon_url) FROM stdin;
5	Project 1	Projectweek 1 for the public library of Amsterdam	1	1	t	1	project-1	\N	\N	\N
3	Real Time Web	In drie weken leer je hoe je real time / live data op een inzichtelijke manier toegankelijk kunt maken voor de eindgebruiker.	\N	3	t	1	real-time-web	During this course you'll learn to use Socket.io to establish a connection between the browser and the server. You'll combine your knowledge from other courses and your newly aqquired skills from this course to create a progressive web app that retrieves live data from an API, and display the data to the user.	["Student is able to build a (Node) webapp with a back-end that uses templating, routing and a remote database.", "Student can deliver a live application where the interaction influences the content of the application by manipulating the database.", "Student can translate live data to a reactive view (datavisualisation is allowed) that is useful for the end user."]	/img/partners/oba.jpg
4	Web Design	Creating websites is getting more and more complex and is usually not a one person job. It is important to ensure that design is consistent and optimized to meet business objectives and create enjoyable experiences for users.	\N	3	t	1	web-design	The path of the righteous man is beset on all sides by the iniquities of the selfish and the tyranny of evil men. Blessed is he who, in the name of charity and good will, shepherds the weak through the valley of darkness, for he is truly his brother's keeper and the finder of lost children. And I will strike down upon thee with great vengeance and furious anger those who would attempt to poison and destroy My brothers. And you will know My name is the Lord when I lay My vengeance upon thee.	["The river stole the gods.", "Don't step on the broken glass.", "If Purple People Eaters are real… where do they find purple people to eat?"]	https://pre00.deviantart.net/25c6/th/pre/f/2016/117/0/4/bridge___flat_design_wallpaper_by_sebastian456-da0elq8.png
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
-- Data for Name: student_work; Type: TABLE DATA; Schema: public; Owner: minorwebdev
--

COPY public.student_work (id, student_name, title, repository_url, demo_url, course_id) FROM stdin;
\.


--
-- Data for Name: teacher_type; Type: TABLE DATA; Schema: public; Owner: minorwebdev
--

COPY public.teacher_type (id, name) FROM stdin;
1	TEACHER
2	GUEST_SPEAKER
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
-- PostgreSQL database dump complete
--

