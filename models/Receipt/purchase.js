const { Sequelize, DataTypes } = require("sequelize");
const { sequelize } = require("../sequelize");

const purchase = sequelize.define("Purchase", {
  purchaseID: {
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
  },

  receiptID: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

  purchaseMethod: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  purchaseStatus: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  promotionalRate: {
    type: DataTypes.STRING,
    defaultValue: "0",
  },
});

module.exports = purchase;
