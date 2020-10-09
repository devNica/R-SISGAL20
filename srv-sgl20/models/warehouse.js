'use strict'
module.exports = (sequelize, DataTypes) =>{
    return sequelize.define('warehouse',{
        idwarehouse:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },

        warehouse:{
            type: DataTypes.STRING,
            allowNull: false,
            required: true
        },

        isActive: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            required: true
        }

    },
    {
        timestamps: false,
        underscored: true
    }
    
)}