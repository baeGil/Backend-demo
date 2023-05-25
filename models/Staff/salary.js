const { Sequelize, DataTypes } = require("sequelize");
const { sequelize } = require("../sequelize");

const salary = sequelize.define("Salary", {
  staffID: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

  staffSalary: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  month: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  year: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
module.exports = salary;
