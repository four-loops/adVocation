const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.use(express.static('dist'));

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, './dist/index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})

app.listen(port, () => console.log(`listening from port: ${port}`));