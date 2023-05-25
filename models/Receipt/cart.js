const { Sequelize, DataTypes } = require("sequelize");
const { sequelize } = require("../sequelize");

const cart = sequelize.define("Cart", {
  receiptID: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

  phoneID: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = cart;
