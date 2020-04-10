const db = require("../Database/db-connection");
const Sequelize = require("sequelize");

const Product = db.define(
  "product",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    productType: {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: "Product Name",
    },
    productName: {
      type: Sequelize.STRING,
    },
    price: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },

    productSize: {
      type: Sequelize.STRING,
    },

    productDosage: {
      type: Sequelize.STRING,
    },
    targetplant: {
      type: Sequelize.STRING,
    },
    description: {
      type: Sequelize.TEXT,
    },
     imageurl: {
      type: Sequelize.STRING,
    },
  },
  {
    timestamps: false,
  }
);

db.sync().then(() => console.log("Product DB has created"));

module.exports = Product;
