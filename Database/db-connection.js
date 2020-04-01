const Sequelize = require('sequelize');
//                           DB Name         username    password                
const db = new Sequelize('kisaan_junction', 'postgres', 'postgres', {
  host: 'localhost',
  dialect: 'postgres'
})

db.authenticate()
  .then(() => {
    console.log('Database connected');
  })

module.exports = db;