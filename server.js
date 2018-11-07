const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/hello', (req, res) => {
  res.send({ products: [{
    complete: true,
    id: 1,
    text: 'abc',
  }, {
    complete: false,
    id: 2,
    text: 'def',
  }] });
});

app.listen(port, () => console.log(`Listening on port ${port}`));