'use strict'
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('warehouse', {
    idwarehouse: {
      autoIncrement: true,
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    warehouse: {
      type: "MEDIUMTEXT",
      allowNull: false
    },
    state: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: 1
    }
  }, {
    sequelize,
    tableName: 'warehouse',
    timestamps: false
    });
};
