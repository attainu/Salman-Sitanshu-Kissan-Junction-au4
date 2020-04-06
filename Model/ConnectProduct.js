const db = require('../Database/db-connection');
const Sequelize = require('sequelize');

const ConnectProduct = db.define('connect_product', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  status: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  connectType: {
    type: Sequelize.STRING,
  }
}, {
  timestamps: false
});

db.sync()
  .then(() => console.log('UserProduct DB has created'))

module.exports = ConnectProduct;