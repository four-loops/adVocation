const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const bodyParser = require('body-parser');
// const { getSeekersByCompanyId, getSeekersByJob, getJobs, createGiver, getCompanyFromGiverID, getJobsByCompanyId, getSeekerReferals, createSeeker } = require('./postgresdb/index.js');

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
app.use(express.static('dist'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.get('/getCandidates', (req, res) => {
//   getSeekersByCompanyId(req.query.company_id, (err, results) => {
//     if (err) {
//       console.error(err);
//       res.status(500).end()
//     } else {
//       res.status(200).send(results)
//     }
//   });
// });

// app.get('/getCandidatesByJob', (req, res) => {
//   getSeekersByJob(req.query.job_id, (err, results) => {
//     if (err) {
//       console.error(err);
//       res.status(500).end()
//     } else {
//       res.status(200).send(results)
//     }
//   });
// });


// app.get('/getJobs', (req, res) => {
//   getJobs((err, results) => {
//     if (err) {
//       console.error(err);
//       res.status(500).end()
//     } else {
//       res.status(200).send(results)
//     }
//   });
// });

// app.post('/createGiver', (req, res) => {
//   console.log(req.body)
//   createGiver(req.body, (err, results) => {
//     if (err) {
//       console.error(err);
//       res.status(500).end()
//     } else {
//       console.log(results);
//       res.status(201).end();
//     }
//   });
// });

// app.get('/getCandidatesFromCompany', (req, res) => {
//   console.log(req.query.giver_id);
//   getCompanyFromGiverID(req.query.giver_id, (err, results) => {
//     if (err) {
//       console.error(err);
//       res.status(500).end()
//     } else {
//       console.log(results[0].company_id);
//       getSeekersByCompanyId(results[0].company_id, (err, data) => {
//         if (err) {
//           console.error(err);
//           res.status(500).end()
//         } else {
//           let betterData = [];

//           data.forEach(object => {
//             let display = [object.title, object];
//             betterData.push(display);
//           })
//           res.status(200).send(betterData)
//         }
//       });
//     }
//   });
// });

// app.get('/getJobsByCompanyId', (req, res) => {
//   getJobsByCompanyId(req.query.company_id, (err, results) => {
//     if (err) {
//       console.error(err);
//       res.status(500).end()
//     } else {
//       res.status(200).send(results)
//     }
//   });
// });


// app.get('/getSeekerReferals', (req, res) => {
//   getSeekerReferals(req.query.seeker_id, (err, results) => {
//     if (err) {
//       console.error(err);
//       res.status(500).end()
//     } else {
//       res.status(200).send(results)
//     }
//   });
// });


// app.post('/createSeeker', (req, res) => {
//   console.log(req.body)
//   createSeeker(req.body, (err, results) => {
//     if (err) {
//       console.error(err);
//       res.status(500).end()
//     } else {
//       console.log(results);
//       res.status(201).end();
//     }
//   });
// });




// app.get('/*', function(req, res) {
//   res.sendFile(path.join(__dirname, './dist/index.html'), function(err) {
//     if (err) {
//       res.status(500).send(err)
//     }
//   })
// })



app.listen(port, () => console.log(`listening from port: ${port}`));