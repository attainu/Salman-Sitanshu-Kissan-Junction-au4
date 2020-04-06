const db = require('../Database/db-connection');
const Sequelize = require('sequelize');

const Product = db.define('product', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: 'Product Name'
  },
  amount: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  min_order: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: true,
    defaultValue: 1
  },
  location: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: 'India'
  },
  scale: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: 'unit'
  }
}, {
  timestamps: false
});

db.sync()
  .then(() => console.log('Product DB has created'))

module.exports = Product;