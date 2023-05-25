const { Sequelize, DataTypes } = require("sequelize");
const { sequelize } = require("../sequelize");

const available = sequelize.define("Available", {
  phoneID: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

  storeID: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

  inventory: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = available;
