const Sequelize = require("sequelize");
//                           DB Name         username    password
// const db = new Sequelize("agricom", "postgres", "5432", {
//   host: "localhost",
//   dialect: "postgres",
// });
// const db = new Sequelize("postgres://tuzxiabdprfdwi:dba837d93cba4c60943ebca1be3bc43274d15bb7ca974aba81898b41892480a6@ec2-52-87-58-157.compute-1.amazonaws.com:5432/d3t6cs0ehomi9l", {
//   dialect: 'postgres',
//   protocol: 'postgres',
//   dialectOptions: {
//     ssl: true
//   }
// })

const db = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  protocol: 'postgres',
  ssl: true,
})


db.authenticate()
  .then(() => {
    console.log(`Database connected`);
  })
  .catch((err) => console.error(err));

module.exports = db;
