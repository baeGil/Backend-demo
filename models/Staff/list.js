const { Sequelize, DataTypes } = require("sequelize");
const { sequelize } = require("../sequelize");
const position = require("./position");

const list = sequelize.define("List", {
  staffID: {
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
  },

  staffUserName: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  staffPassword: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  staffImage: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  staffFirstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  staffLastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  staffPhoneNumber: {
    type: DataTypes.NUMBER,
    allowNull: false,
  },

  staffEmailAddress: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  staffSalaryScale: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

  storeID: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

  storeAddressID: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

  loginDetail: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});
list.belongsToMany(position, { through: "position list" });
position.belongsToMany(list, { through: "position list" });
module.exports = list;
