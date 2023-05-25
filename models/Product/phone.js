const { Sequelize, DataTypes } = require("sequelize");
const { sequelize } = require("../sequelize");

const phone = sequelize.define("Phone", {
  phoneID: {
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
  },

  phoneImage: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  phoneName: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  phoneSize: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  phoneChipset: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  phoneScreen: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  phoneScreenSize: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  phoneResolution: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  phoneRefreshRate: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  phoneFrontCamera: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  phoneBackCamera: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  phoneRAM: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  phoneInternalMemory: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  phoneSIM: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  phoneHeadphone: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  phoneBateryRate: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  phoneBCC: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  phoneSecurityMethod: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  phoneColor: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  phoneReleaseYear: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

  phonePrice: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
module.exports = phone;
