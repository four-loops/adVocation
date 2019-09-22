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

const getJobsByCompanyId = (company_id, cb) => {
  client.query(`SELECT * FROM jobs WHERE jobs.company_id = ${company_id};`, (err, res) => {
    if (err) {
      cb(err, null);
    } else {
      cb(null, res.rows);
    }
  });
};

const getSeekerReferals = (seeker_id, cb) => {
  client.query(`SELECT DISTINCT job_seekers.job_seeker_id, job_seekers.seeker_name, job_seekers.profile_url, job_seekers.email, 
  job_seekers.linkedin_url, job_seekers.selling_points, job_seekers.industry, job_seekers.level_of_experience, job_seekers.location, 
  job_seekers.level_of_experience, job_seekers.location, job_seekers.health_benefits, job_seekers.pto_unlimited, job_seekers.diverse_workplace, 
  job_seekers.diversity_advocate, job_seekers.size, job_seekers.job_search_location, job_seekers.matching_401k FROM job_seekers INNER JOIN 
  seeker_job_matches ON job_seekers.job_seeker_id = seeker_job_matches.job_seeker_id INNER JOIN referals ON 
  seeker_job_matches.id = referals.seeker_job_matches_id AND seeker_job_matches.job_seeker_id = ${seeker_id};`, (err, res) => {
    if (err) {
      cb(err, null);
    } else {
      cb(null, res.rows);
    }
  });
};

const createSeeker = (data, cb) => {
  let sellingString = '';
  let locationString = '';

  data.selling_points.forEach((point, i) => {
    if (i === data.selling_points.length - 1) {
      sellingString += '"' + point + '"';
    } else {
      sellingString += '"' + point + '", ';
    }
  });

  data.job_search_location.forEach((point, i) => {
    if (i === data.job_search_location.length - 1) {
      locationString += '"' + point + '"';
    } else {
      locationString += '"' + point + '", ';
    }
  });

  client.query(`INSERT INTO job_seekers(seeker_name, profile_url, email, linkedin_url, selling_points, industry, 
    level_of_experience, location, health_benefits, pto_unlimited, diverse_workplace, diversity_advocate, size, 
    job_search_location, matching_401k) VALUES('${data.seeker_name}', '${data.profile_url}', '${data.email}', '${data.linkedin_url}', 
    '{${sellingString}}', '${data.industry}', ${ data.level_of_experience }, '${data.location}', ${ data.health_benefits }, 
    ${ data.pto_unlimited }, ${ data.diverse_workplace }, ${ data.diversity_advocate }, '${data.size}', '{${locationString}}', 
    ${ data.matching_401k });`, (err, res) => {
    if (err) {
      cb(err, null);
    } else {
      cb(null, 'Post successful');
    }
  });
  cb(null, 'Post successful');
};


module.exports = { getSeekersByCompanyId, getSeekersByJob, getJobs, createGiver, getCompanyFromGiverID, getJobsByCompanyId, getSeekerReferals, createSeeker };