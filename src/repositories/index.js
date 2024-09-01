const userRepositories = require('./userRepositories')

module.exports = async (models) => {
    const { User } = models

    return {
        userRepositories: await userRepositories(User),
    }
}