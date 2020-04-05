const Sequelize = require('sequelize');
let db, connection;
//                           DB Name         username    password                
// const db = new Sequelize('kisaan_junction', 'postgres', 'postgres', {
//   host: 'localhost',
//   dialect: 'postgres'
// })
// if (process.env.DATABASE_URL) {
  db = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    protocol: 'postgres',
    dialectOptions: {
      ssl: true
    }
  });
//   connection = 'Heroku'
// }
// else {
//   db = new Sequelize('kisaan_junction', 'postgres', 'postgres', {
//     host: 'localhost',
//     dialect: 'postgres'
//   })
//   connection = 'Local'
// }

db.authenticate()
  .then(() => {
    console.log(`Database connected ${connection}`);
  })
  .catch((err) => console.error(err))

module.exports = db;