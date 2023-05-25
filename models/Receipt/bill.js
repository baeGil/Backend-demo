const { Sequelize, DataTypes } = require("sequelize");
const { sequelize } = require("../sequelize");
const phone = require("../Product/phone");
const bill = sequelize.define("Bill", {
  receiptID: {
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
  },

  purchaseMethod: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  billValue: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  customerID: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

  staffID: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});
bill.belongsToMany(phone, { through: "Phone's bill" });
phone.belongsToMany(bill, { through: "Phone's bill" });
module.exports = bill;
