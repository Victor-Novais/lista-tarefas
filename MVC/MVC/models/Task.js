let {DataTypes} = require('sequelize')

let db = require('../db/conn')

let Task = db.define('Task' , {
    title: {
        type: DataTypes.STRING,
        required: true,
    },

   description: {
        type: DataTypes.STRING,
        required: true,
    },

    done: {
        type: DataTypes.BOOLEAN,
        required: true,
    },
})

module.exports = Task