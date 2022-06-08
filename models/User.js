const {DataTypes} = require('sequelize')

const db = require('../db/conn')

const User = db.define('User', {
    name: {
        type: DataTypes.STRING,
        require: true
    },
    email: {
        type: DataTypes.STRING,
        require: true
    },
    password: {
        type: DataTypes.STRING,
        require: true
    },
    cell: {
        type: DataTypes.STRING,
        require: true
    },
    state: {
        type: DataTypes.STRING,
        require: true
    },
    agronomo: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        required: true
    }
})

module.exports = User
