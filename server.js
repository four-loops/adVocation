const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const { getSeekersByCompanyId, getSeekersByJob, getJobs } = require('./postgresdb/index.js');

app.use(express.static('dist'));

app.get('/getCandidates', (req, res) => {
  getSeekersByCompanyId(req.query.company_id, (err, results) => {
    if (err) {
      console.error(err);
    } else {
      res.status(200).send(results)
    }
  });
});

app.get('/getCandidatesByJob', (req, res) => {
  getSeekersByJob(req.query.job_id, (err, results) => {
    if (err) {
      console.error(err);
    } else {
      res.status(200).send(results)
    }
  });
});

app.get('/getJobs', (req, res) => {
  getJobs((err, results) => {
    if (err) {
      console.error(err);
    } else {
      res.status(200).send(results)
    }
  });
});


app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, './dist/index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})



app.listen(port, () => console.log(`listening from port: ${port}`));