const express = require('express');
const app = express();
const port = 3000;

const homeRoute = require('./routes/index');
const userRoute = require('./routes/users');


homeRoute(app);
userRoute(app);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});