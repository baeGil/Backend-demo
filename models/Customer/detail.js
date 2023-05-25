const { Sequelize, DataTypes } = require("sequelize");
const { sequelize } = require("../sequelize");

const detail = sequelize.define("Detail", {
  customerID: {
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
  },

  customerFirstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  customerLastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  customerPhoneNumber: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

  customerEmailAddress: {
    type: DataTypes.STRING,
    defaultValue: "",
  },

  customerUserName: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  customerPassword: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
module.exports = detail;
