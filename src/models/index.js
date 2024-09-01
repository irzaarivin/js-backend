const User = require('./User')

module.exports = async (Sequelize, sequelize, mongoose) => {
    return {
        User: await User(Sequelize, sequelize)
    }
}