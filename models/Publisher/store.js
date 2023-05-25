const { Sequelize, DataTypes } = require("sequelize");
const { sequelize } = require("../sequelize");

const store = sequelize.define("Store", {
  storeID: {
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
  },

  storeAddressID: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

  storeManager: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
module.exports = store;
