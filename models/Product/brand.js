const { Sequelize, DataTypes } = require("sequelize");
const { sequelize } = require("../sequelize");
const phone = require("./phone");
const brand = sequelize.define("Brand", {
  brandId: {
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
  },

  brandName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
brand.hasMany(phone);
phone.belongsTo(brand);

module.exports = brand;
