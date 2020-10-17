'use strict'
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('measurement', {
    idmeasurement: {
      autoIncrement: true,
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    measurement: {
      type: DataTypes.STRING(10),
      allowNull: false,
      unique: "measurement_UNIQUE"
    }
  }, {
    sequelize,
    tableName: 'measurement',
    timestamps: false
    });
};
