const Sequelize = require('sequelize');
let db, database;

if (process.env.DATABASE_URL) {
  // the application is executed on Heroku ... use the postgres database
  db = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    protocol: 'postgres'
  })
  database = 'Heroku'
}
else {
  db = new Sequelize('kisaan_junction', 'postgres', 'postgres', {
    host: 'localhost',
    dialect: 'postgres'
  })
  database = 'Local'
}

db.authenticate()
  .then(() => {
    console.log(`Database connected: ${database}`);
  })

module.exports = db;