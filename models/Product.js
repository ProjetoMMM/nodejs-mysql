const {DataTypes} = require('sequelize')

const db = require('../db/conn')

// Ligação com o User
const User = require('./User')

const Product = db.define('Product', {
    pname: {
        type: DataTypes.STRING,
        allowNull: false,
        required: true
    },
    pqty: {
        type: DataTypes.STRING,
        allowNull: false,
        required: true
    }
})

Product.belongsTo(User)
User.hasMany(Product)

module.exports = Product