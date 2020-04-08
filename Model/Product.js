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
  },//description type target dosage 
  amount: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  // min_order: {
  //   type: Sequelize.INTEGER,
  //   allowNull: false,
  // },
  description: {
    type: Sequelize.TEXT,
  },
  type: {
    type: Sequelize.STRING,
  },
  target: {
    type: Sequelize.STRING,
  },
  dosage: {
    type: Sequelize.STRING,
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
  scale: {//kg days
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