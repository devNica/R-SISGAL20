'use strict'
module.exports = (sequelize, DataTypes) =>{
  return sequelize.define('family', {
    idfamily: {
      autoIncrement: true,
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    codefam: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'family',
    timestamps: false
    });
};
