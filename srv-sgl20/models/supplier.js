'use strict'
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('supplier', {
    idsupplier: {
      autoIncrement: true,
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    codespl: {
      type: DataTypes.STRING(10),
      allowNull: false,
      unique: "codesup_UNIQUE"
    },
    namespl: {
      type: "MEDIUMTEXT",
      allowNull: false
    },
    contact: {
      type: "MEDIUMTEXT",
      allowNull: false,
      defaultValue: "'-'"
    },
    phone: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: "-"
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: "-"
    },
    address: {
      type: "MEDIUMTEXT",
      allowNull: false,
      defaultValue: "'-'"
    },
    state: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: 1
    }
  }, {
    sequelize,
    tableName: 'supplier',
    timestamps: false
    });
};
