const db = require('../Database/db-connection');
const Sequelize = require('sequelize');
const Order = require('./Order');
const Product = require('./Product');
const Address = require('./Address');
const Sold = require('./Sold');
const ConnectProduct = require('./ConnectProduct');

const User = db.define('user', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: 'User Name'
  },
  password: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  mobile: {
    type: Sequelize.BIGINT,
    allowNull: false,
    unique: true
  },
  dob: {
    type: Sequelize.DATEONLY,
    allowNull: true,
  },
  type: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: 'Consumer'
  }
}, {
  timestamps: false
});

User.belongsTo(Address);

// User.belongsToMany(Product, {
//   through: {
//     model: ConnectProduct,
//     unique: false,
//     scope: {
//       taggableType: 'user'
//     }
//   },
//   foreignKey: 'connectId',
//   constraints: false
// });
// Product.belongsToMany(User, {
//   through: {
//     model: ConnectProduct,
//     unique: false
//   },
//   foreignKey: 'productId',
//   constraints: false
// });

// Sold.belongsToMany(Product, {
//   through: {
//     model: ConnectProduct,
//     unique: false,
//     scope: {
//       taggableType: 'sold'
//     }
//   },
//   foreignKey: 'connectId',
//   constraints: false
// });
// Product.belongsToMany(Sold, {
//   through: {
//     model: ConnectProduct,
//     unique: false
//   },
//   foreignKey: 'productId',
//   constraints: false
// });

// Order.belongsToMany(Product, {
//   through: {
//     model: ConnectProduct,
//     unique: false,
//     scope: {
//       taggableType: 'order'
//     }
//   },
//   foreignKey: 'connectId',
//   constraints: false
// });
// Product.belongsToMany(Order, {
//   through: {
//     model: ConnectProduct,
//     unique: false
//   },
//   foreignKey: 'productId',
//   constraints: false
// });



// User.belongsToMany(Product, { through: Sold })
// Product.belongsToMany(User, { through: Sold })
// User.hasMany(Sold)
// Sold.belongsTo(User)
// Product.hasMany(Sold)
// Sold.belongsTo(Product)

// User.belongsToMany(Product, { through: Order })
// Product.belongsToMany(User, { through: Order })
// User.hasMany(Order)
// Order.belongsTo(User)
// Product.hasMany(Order)
// Order.belongsTo(Product)

User.belongsToMany(Product, { through: ConnectProduct })
Product.belongsToMany(User, { through: ConnectProduct })
User.hasMany(ConnectProduct)
ConnectProduct.belongsTo(User)
Product.hasMany(ConnectProduct)
ConnectProduct.belongsTo(Product)


db.sync()
  .then(() => console.log('User DB has created'))

module.exports = User;