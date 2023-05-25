const { Sequelize, DataTypes } = require("sequelize");
const { sequelize } = require("../sequelize");
const express = require("express");
const app = express();
const warranty = sequelize.define("Warranty", {
  receiptID: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

  warrantyStart: {
    type: DataTypes.DATE,
    allowNull: false,
  },

  warrantyEnd: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});
module.exports = warranty;
