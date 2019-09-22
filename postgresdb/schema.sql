DROP TABLE IF EXISTS company CASCADE;
DROP TABLE IF EXISTS job_givers CASCADE;
DROP TABLE IF EXISTS job_seekers CASCADE;
DROP TABLE IF EXISTS jobs CASCADE;
DROP TABLE IF EXISTS seeker_job_matches CASCADE;
DROP TABLE IF EXISTS shortlist CASCADE;
DROP TABLE IF EXISTS referals CASCADE;

CREATE TABLE companies(
  company_id SERIAL PRIMARY KEY,
  company_name VARCHAR (50),
  hr_contact VARCHAR (50)
);

CREATE TABLE job_givers(
  job_giver_id SERIAL PRIMARY KEY,
  name VARCHAR (50),
  profile_url TEXT,
  linkedin_url TEXT,
  email VARCHAR (50),
  company_id INTEGER REFERENCES companies,
  seeker_see_name BOOLEAN
);

CREATE TABLE job_seekers(
  job_seeker_id SERIAL PRIMARY KEY,
  name VARCHAR (50),
  profile_url TEXT,
  email VARCHAR (50),
  linkedin_url TEXT,
  selling_points VARCHAR (20) [],
	industry VARCHAR (30),
	level_of_experience SMALLINT,
	location VARCHAR (30),
	health_benefits BOOLEAN,
	pto_unlimited BOOLEAN,
	diverse_workplace BOOLEAN,
	diversity_advocate BOOLEAN,
	size VARCHAR (10),
	job_search_location TEXT [],
	matching_401k BOOLEAN,
	seeker_job_title VARCHAR (50)
);

CREATE TABLE jobs(
  job_id SERIAL PRIMARY KEY,
  title VARCHAR (30),
  company_id INTEGER REFERENCES companies,
  city VARCHAR (30),
  state_abrev VARCHAR (2),
  country VARCHAR (30),
  source VARCHAR (30),
  date_posted DATE,
  posting_url TEXT,
  short_description VARCHAR (100),
  full_description TEXT
);

CREATE TABLE seeker_job_matches(
  id SERIAL PRIMARY KEY,
  job_seeker_id INTEGER REFERENCES job_seekers,
  job_id INTEGER REFERENCES jobs
);

CREATE TABLE shortlist(
  id SERIAL PRIMARY KEY,
  job_giver_id INTEGER REFERENCES job_givers,
  seeker_job_matches_id INTEGER REFERENCES seeker_job_matches
);

CREATE TABLE referals(
  id SERIAL PRIMARY KEY,
  job_giver_id INTEGER REFERENCES job_givers,
  seeker_job_matches_id INTEGER REFERENCES seeker_job_matches
);


INSERT INTO companies
  (name, hr_contact)
VALUES('Shazamazon', '(512)532-SHAZ');

INSERT INTO companies
  (name, hr_contact)
VALUES('bing', '(512)532-BING');

INSERT INTO companies
  (name, hr_contact)
VALUES('Hello World Studios', '(512)532-Hell');

INSERT INTO job_givers
  (name, profile_url, email, company_id, seeker_see_name)
VALUES('BRAD PITS', 'https://www.linkedin.com/in/jeff-salinas4/', 'bradly.pits@aol.com', 3, true);

INSERT INTO job_givers
  (name, profile_url, email, company_id, seeker_see_name)
VALUES('JxKim', 'https://www.linkedin.com/in/julialkim/', 'sticker.lover@bing.com', 2, true);

INSERT INTO job_givers
  (name, profile_url, email, company_id, seeker_see_name)
VALUES('Elmo Dutt', 'https://www.linkedin.com/in/arohan/', 'coffee.lover@facebook.com', 1, false);

INSERT INTO jobs
  (title, company_id, city, state_abrev, country, source, date_posted, posting_url, short_description, full_description)
VALUES('Executive Coffee Fetcher', 1, 'Austin', 'TX', 'United States', 'Shazamazon - Elmo''s Office', CURRENT_DATE, 'www.starbucks.com', 'We are looking for an enthusiastic muppet to bring Elmo his morning coffee.', 'We are looking for candidates with at least 8 year of coffee fetching experience. This enthusiastic muppet''s only job will be to bring Elmo his morning coffee. He is mad without his morning coffee.');

INSERT INTO jobs
  (title, company_id, city, state_abrev, country, source, date_posted, posting_url, short_description, full_description)
VALUES('Java Developer', 1, 'Austin', 'TX', 'United States', 'Shazamazon - Elmo''s Office 2', CURRENT_DATE, 'www.starbucks.com', 'We are looking for an enthusiastic muppet to bring Elmo his second cup of morning coffee.', 'We are looking for candidates with at least 10 year of coffee fetching experience. This enthusiastic muppet''s only job will be to bring Elmo his second cup of morning coffee. He is mad without his second cup of morning coffee.');

INSERT INTO jobs
  (title, company_id, city, state_abrev, country, source, date_posted, posting_url, short_description, full_description)
VALUES('Back End Developer', 2, 'San Antonio', 'TX', 'United States', 'Bing', CURRENT_DATE, 'www.bing.com', 'We are looking for an enthusiastic candidate to bring search functionallity to bing ', 'We are looking for candidates with at least 2 years of experience with google. This enthusiastic candidate''s only job will be to google bing requests. Fast typers prefered.');

INSERT INTO job_seekers
  (name, profile_url, email, linkedin_url, selling_points, industry, level_of_experience, location, health_benifits, pto_unlimited, diverse_workplace, diversity_advocate, size, job_search_location, matching_401k)
VALUES('Julia Kim', 'https://www.holidogtimes.com/wp-content/uploads/2018/02/shiba-inu-adopt-1-810x406.png', 'sticker.lover@aol.com', 'https://www.linkedin.com/in/julialkim/', '{"Loves Stickers", "Fast Learner", "Hard Working"}', 'Software Engineering', 2, 'Austin', true, true, true, true, 'Large', '{"Austin", "Dallas", "North Pole"}', true);

INSERT INTO job_seekers
  (name, profile_url, email, linkedin_url, selling_points, industry, level_of_experience, location, health_benifits, pto_unlimited, diverse_workplace, diversity_advocate, size, job_search_location, matching_401k)
VALUES('Arohan Dutt', 'https://i.kym-cdn.com/entries/icons/original/000/022/134/elmo.jpg', 'sticker.lover@aol.com', 'https://www.linkedin.com/in/arohan/', '{"Loves Coffee", "Fast Learner", "Hard Working"}', 'Software Engineering', 2, 'Austin', true, true, true, true, 'Large', '{"Austin", "Atlantis", "North Pole"}', true);

INSERT INTO job_seekers
  (name, profile_url, email, linkedin_url, selling_points, industry, level_of_experience, location, health_benifits, pto_unlimited, diverse_workplace, diversity_advocate, size, job_search_location, matching_401k)
VALUES('Dug the Pug', 'https://i.ytimg.com/vi/lV2DXqc6r1w/maxresdefault.jpg', 'dug.pug@aol.com', 'https://www.linkedin.com/in/dugsong/', '{"Loves Long Walks", "Fast", "Hard Working"}', 'Engineering Enthusiast', 3, 'Austin', true, true, true, true, 'Small', '{"Austin"}', true);

INSERT INTO seeker_job_matches
  (job_seeker_id, job_id)
VALUES(3, 1);

INSERT INTO seeker_job_matches
  (job_seeker_id, job_id)
VALUES(3, 2);

INSERT INTO seeker_job_matches
  (job_seeker_id, job_id)
VALUES(3, 3);

INSERT INTO seeker_job_matches
  (job_seeker_id, job_id)
VALUES(1, 1);

INSERT INTO seeker_job_matches
  (job_seeker_id, job_id)
VALUES(1, 3);

INSERT INTO seeker_job_matches
  (job_seeker_id, job_id)
VALUES(2, 3);

INSERT INTO seeker_job_matches
  (job_seeker_id, job_id)
VALUES(2, 2);

INSERT INTO shortlist
  (job_giver_id, seeker_job_matches_id)
VALUES(3, 1);

INSERT INTO shortlist
  (job_giver_id, seeker_job_matches_id)
VALUES(3, 4);

INSERT INTO referals
  (job_giver_id, seeker_job_matches_id)
VALUES(3, 1);