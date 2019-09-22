const { Client } = require('pg');
const connectionString = 'postgresql://localhost:5432/advocation';

const client = new Client({
  connectionString: connectionString,
});

client.connect(err => {
  if (err) {
    console.error(err);
  } else {
    console.log('connection successful!');
  }
});

const getSeekersByCompanyId = (company_id, cb) => {
  client.query(
    `SELECT DISTINCT job_seekers.job_seeker_id, job_seekers.seeker_name, job_seekers.profile_url, job_seekers.email, 
    job_seekers.linkedin_url, job_seekers.selling_points, job_seekers.industry, job_seekers.level_of_experience, 
    job_seekers.location, job_seekers.level_of_experience, job_seekers.location, job_seekers.health_benefits, 
    job_seekers.pto_unlimited, job_seekers.diverse_workplace, job_seekers.diversity_advocate, job_seekers.size, 
    job_seekers.job_search_location, job_seekers.matching_401k, jobs.job_id, jobs.title, jobs.city, jobs.state_abrev, 
    jobs.country, jobs.source, jobs.date_posted, jobs.posting_url, jobs.short_description, jobs.full_description, 
    companies.hr_contact, companies.company_name FROM job_seekers INNER JOIN seeker_job_matches ON 
    seeker_job_matches.job_seeker_id = job_seekers.job_seeker_id INNER JOIN jobs ON seeker_job_matches.job_id = jobs.job_id 
    AND jobs.company_id = ${company_id} INNER JOIN companies ON jobs.company_id = companies.company_id;`, (err, res) => {
    if (err) {
      cb(err, null);
    } else {
      cb(null, res.rows);
    }
  });
};

const getSeekersByJob = (job_id, cb) => {
  client.query(`SELECT * FROM job_seekers LEFT JOIN seeker_job_matches ON seeker_job_matches.job_id = ${job_id} WHERE job_seekers.job_seeker_id = seeker_job_matches.job_seeker_id;`, (err, res) => {
    if (err) {
      cb(err, null);
    } else {
      cb(null, res.rows);
    }
  });
};

const getJobs = (cb) => {
  client.query(`SELECT * FROM jobs INNER JOIN companies ON companies.company_id = jobs.company_id;`, (err, res) => {
    if (err) {
      cb(err, null);
    } else {
      cb(null, res.rows);
    }
  });
};

const createGiver = (data, cb) => {
  client.query(`INSERT INTO companies(company_name, hr_contact) VALUES('${data.company_name}', '${data.hr_contact}') ON CONFLICT DO NOTHING;`, (err, res) => {
    if (err) {
      cb(err, null);
    } else {
      client.query(`INSERT INTO job_givers(giver_name, profile_url, email, company_id, seeker_see_name) 
      VALUES('${data.name}', '${data.linkedin_url}', '${data.email}', 3, '${data.seeker_see_name}');`, (err, res) => {
        if (err) {
          cb(err, null);
        } else {
          cb(null, 'Post successful');
        }
      });
      cb(null, 'Post successful');
    }
  });
};

const getCompanyFromGiverID = (giver_id, cb) => {
  client.query(`SELECT companies.company_id FROM companies INNER JOIN job_givers ON job_givers.company_id = companies.company_id AND job_givers.job_giver_id = ${giver_id};`, (err, res) => {
    if (err) {
      cb(err, null);
    } else {
      cb(null, res.rows); 
    }
  });
};

module.exports = { getSeekersByCompanyId, getSeekersByJob, getJobs, createGiver, getCompanyFromGiverID };