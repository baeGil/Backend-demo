const { Sequelize, DataTypes } = require("sequelize");
const { sequelize } = require("../sequelize");

const position = sequelize.define("Position", {
  staffPositionID: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

  staffPositionName: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  staffID: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});
module.exports = position;
