let { Sequelize } = require('sequelize')
let sequelize = new Sequelize('nodemvc', 'root' , '' , {
    host: 'localhost',
    dialect: 'mysql',
})

try{
    sequelize.authenticate()
    console.log('Conectamos ao MySQL')
}catch (error) {
    console.log(`Não foi possivel conectar: ${error}`)
}

module.exports = sequelize