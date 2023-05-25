const { Sequelize, DataTypes } = require("sequelize");
const { sequelize } = require("../sequelize");

const address = sequelize.define("Address", {
  storeAddressID: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

  storeDistrict: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  storeCity: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
module.exports = address;
