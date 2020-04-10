const Sequelize = require("sequelize");
//                           DB Name         username    password
const db = new Sequelize("agricom", "postgres", "postgres", {
  host: "localhost",
  dialect: "postgres",
});
// const db = new Sequelize(process.env.DATABASE_URL, {
//   dialect: 'postgres',
//   protocol: 'postgres',
//   dialectOptions: {
//     ssl: true
//   }

db.authenticate()
  .then(() => {
    console.log(`Database connected`);
  })
  .catch((err) => console.error(err));

module.exports = db;
