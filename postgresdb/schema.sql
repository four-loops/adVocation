DROP TABLE IF EXISTS company CASCADE;
DROP TABLE IF EXISTS job_givers CASCADE;
DROP TABLE IF EXISTS job_seekers CASCADE;
DROP TABLE IF EXISTS jobs CASCADE;
DROP TABLE IF EXISTS seeker_job_matches CASCADE;
DROP TABLE IF EXISTS shortlist CASCADE;
DROP TABLE IF EXISTS referals CASCADE;

CREATE TABLE companies(
  company_id SERIAL PRIMARY KEY,
  name VARCHAR (50),
  hr_contact VARCHAR (20),
  company_headquarters VARCHAR (30)
);

CREATE TABLE job_givers(
  job_giver_id SERIAL PRIMARY KEY,
  name VARCHAR (50),
  profile_url TEXT,
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
	health_benifits BOOLEAN,
	pto_unlimited BOOLEAN,
	diverse_workplace BOOLEAN,
	diversity_advocate BOOLEAN,
	size VARCHAR (10),
	job_search_location VARCHAR (30),
	matching_401k BOOLEAN
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
