const express = require('express');
const routes = require('./backend/routes');
const sequelize = require('./backend/config/connection');
const colos = require('colors')

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

sequelize.sync();

app.listen(PORT, () => {
  console.log(`App listening on localhost:${PORT}!`.rainbow);
});
