'use strict'
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('family_has_supplier', {
    fk_family: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'family',
        key: 'idfamily'
      }
    },
    fk_supplier: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'supplier',
        key: 'idsupplier'
      }
    }
  }, {
    sequelize,
    tableName: 'family_has_supplier',
    timestamps: false
    });
};
