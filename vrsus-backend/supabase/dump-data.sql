SET session_replication_role = replica;

--
-- PostgreSQL database dump
--

-- Dumped from database version 15.1 (Ubuntu 15.1-1.pgdg20.04+1)
-- Dumped by pg_dump version 15.6 (Ubuntu 15.6-1.pgdg20.04+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Data for Name: audit_log_entries; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."audit_log_entries" ("instance_id", "id", "payload", "created_at", "ip_address") VALUES
	('00000000-0000-0000-0000-000000000000', '5ea3c3ca-043a-4618-8aaf-12b4400b53f2', '{"action":"user_invited","actor_id":"00000000-0000-0000-0000-000000000000","actor_username":"supabase_admin","actor_via_sso":false,"log_type":"team","traits":{"user_email":"giammont@live.it","user_id":"dc2a809d-e131-456b-b260-0050e9bc535f"}}', '2024-06-06 22:11:13.23741+00', ''),
	('00000000-0000-0000-0000-000000000000', '32c3b189-97c4-4a74-a1c2-1af79a9f2377', '{"action":"user_signedup","actor_id":"dc2a809d-e131-456b-b260-0050e9bc535f","actor_username":"giammont@live.it","actor_via_sso":false,"log_type":"team"}', '2024-06-06 22:11:31.575817+00', '');


--
-- Data for Name: flow_state; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: users; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."users" ("instance_id", "id", "aud", "role", "email", "encrypted_password", "email_confirmed_at", "invited_at", "confirmation_token", "confirmation_sent_at", "recovery_token", "recovery_sent_at", "email_change_token_new", "email_change", "email_change_sent_at", "last_sign_in_at", "raw_app_meta_data", "raw_user_meta_data", "is_super_admin", "created_at", "updated_at", "phone", "phone_confirmed_at", "phone_change", "phone_change_token", "phone_change_sent_at", "email_change_token_current", "email_change_confirm_status", "banned_until", "reauthentication_token", "reauthentication_sent_at", "is_sso_user", "deleted_at", "is_anonymous") VALUES
	('00000000-0000-0000-0000-000000000000', 'dc2a809d-e131-456b-b260-0050e9bc535f', 'authenticated', 'authenticated', 'giammont@live.it', '', '2024-06-06 22:11:31.576657+00', '2024-06-06 22:11:13.241936+00', '', '2024-06-06 22:11:13.241936+00', '', NULL, '', '', NULL, '2024-06-06 22:11:31.580123+00', '{"provider": "email", "providers": ["email"]}', '{}', NULL, '2024-06-06 22:11:13.221693+00', '2024-06-06 22:11:31.587602+00', NULL, NULL, '', '', NULL, '', 0, NULL, '', NULL, false, NULL, false);


--
-- Data for Name: identities; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."identities" ("provider_id", "user_id", "identity_data", "provider", "last_sign_in_at", "created_at", "updated_at", "id") VALUES
	('dc2a809d-e131-456b-b260-0050e9bc535f', 'dc2a809d-e131-456b-b260-0050e9bc535f', '{"sub": "dc2a809d-e131-456b-b260-0050e9bc535f", "email": "giammont@live.it", "email_verified": false, "phone_verified": false}', 'email', '2024-06-06 22:11:13.234295+00', '2024-06-06 22:11:13.234349+00', '2024-06-06 22:11:13.234349+00', '44cd6b16-05c1-4f37-a8a4-c07741c40702');


--
-- Data for Name: instances; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: sessions; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."sessions" ("id", "user_id", "created_at", "updated_at", "factor_id", "aal", "not_after", "refreshed_at", "user_agent", "ip", "tag") VALUES
	('7f6683af-1296-4200-b4bd-b4ee41e614dc', 'dc2a809d-e131-456b-b260-0050e9bc535f', '2024-06-06 22:11:31.580196+00', '2024-06-06 22:11:31.580196+00', NULL, 'aal1', NULL, NULL, 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Mobile Safari/537.36', '2.37.164.127', NULL);


--
-- Data for Name: mfa_amr_claims; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."mfa_amr_claims" ("session_id", "created_at", "updated_at", "authentication_method", "id") VALUES
	('7f6683af-1296-4200-b4bd-b4ee41e614dc', '2024-06-06 22:11:31.588079+00', '2024-06-06 22:11:31.588079+00', 'otp', '59cc7b6b-b9cb-458a-8af8-ba8117d6ff03');


--
-- Data for Name: mfa_factors; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: mfa_challenges; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: one_time_tokens; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: refresh_tokens; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."refresh_tokens" ("instance_id", "id", "token", "user_id", "revoked", "created_at", "updated_at", "parent", "session_id") VALUES
	('00000000-0000-0000-0000-000000000000', 1, 'QpMSyC5JVIDKKqvS0taH4w', 'dc2a809d-e131-456b-b260-0050e9bc535f', false, '2024-06-06 22:11:31.58343+00', '2024-06-06 22:11:31.58343+00', NULL, '7f6683af-1296-4200-b4bd-b4ee41e614dc');


--
-- Data for Name: sso_providers; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: saml_providers; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: saml_relay_states; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: sso_domains; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: key; Type: TABLE DATA; Schema: pgsodium; Owner: supabase_admin
--



--
-- Data for Name: test; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."test" ("id", "created_at", "provona") VALUES
	(1, '2024-06-06 22:40:48.716446+00', 100);


--
-- Data for Name: buckets; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Data for Name: objects; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Data for Name: s3_multipart_uploads; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Data for Name: s3_multipart_uploads_parts; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Data for Name: secrets; Type: TABLE DATA; Schema: vault; Owner: supabase_admin
--



--
-- Name: refresh_tokens_id_seq; Type: SEQUENCE SET; Schema: auth; Owner: supabase_auth_admin
--

SELECT pg_catalog.setval('"auth"."refresh_tokens_id_seq"', 1, true);


--
-- Name: key_key_id_seq; Type: SEQUENCE SET; Schema: pgsodium; Owner: supabase_admin
--

SELECT pg_catalog.setval('"pgsodium"."key_key_id_seq"', 1, false);


--
-- Name: test_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"public"."test_id_seq"', 1, true);


--
-- PostgreSQL database dump complete
--

RESET ALL;
