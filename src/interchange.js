const routes = require('./present/routes/index')

// ======================================================================== //

const middlewares = {
    ErrorHandler: require('./present/middlewares/ErrorHandler')
}

const helpers = {
    email: require('./app/helpers/email')
}

// ======================================================================== //

const model = async (Sequelize, sequelize, mongoose) => {
    const User = require('./domain/models/User')

    return {
        User: await User(Sequelize, sequelize)
    }
}

// ======================================================================== //

const repository = async (models) => {
    const userRepositories = require('./domain/repositories/userRepositories')

    return {
        userRepositories: await userRepositories(models),
    }
}

// ======================================================================== //

const handler = async (repositories, helpers) => {
    const users = require('./app/handlers/user/index')

    return {
        user: await users(repositories, helpers)
    }
}

// ======================================================================== //

const controller = async (handlers) => {
    const usersController = require('./present/controllers/usersController')

    return {
        usersController: await usersController(await handlers.user),
    }
}

// ======================================================================== //

module.exports = { model, repository, handler, controller, middlewares, helpers, routes }