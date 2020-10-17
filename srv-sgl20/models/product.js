'use strict'
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('product', {
    idproduct: {
      autoIncrement: true,
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    reference: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: "reference_UNIQUE"
    },
    partnumber: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "-"
    },
    serialnumber: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "-"
    },
    barcode: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "-"
    },
    description: {
      type: "MEDIUMTEXT",
      allowNull: false
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    state: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: 1
    },
    brand: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    origin: {
      type: DataTypes.STRING(3),
      allowNull: false
    },
    fk_supplier: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'supplier',
        key: 'idsupplier'
      }
    },
    fk_family: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'family',
        key: 'idfamily'
      }
    },
    fk_measurement: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'measurement',
        key: 'idmeasurement'
      }
    }
  }, {
    sequelize,
    tableName: 'product',
    timestamps: false
    });
};
