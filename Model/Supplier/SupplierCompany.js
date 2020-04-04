const db = require("../../Database/db-connection");
const Sequelize = require("sequelize");

const SupplierCompany = db.define(
  "SupplierCompany",
  {
    company_name: {
      type: Sequelize.STRING
    },
    company_address: { type: Sequelize.STRING },

    company_type: {
      type: Sequelize.BIGINT(10)
    },
    company_GST: {
      type: Sequelize.INTEGER
    },
    doorstepdelivery: {
      type: Sequelize.INTEGER
    }
  },
  {
    timestamps: false
  }
);

db.sync().then(() => console.log(" SupplierCompany DB has created"));

module.exports = SupplierCompany;
