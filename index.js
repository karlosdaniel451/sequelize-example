const express = require('express');
const routes = require('./src/app/controllers/routes');

const app = express();

const port = process.argv[2];

app.use(express.json());
app.use(routes);

app.listen(port, () => {
  console.log(`Server is running at localhost:${port}`);
});
