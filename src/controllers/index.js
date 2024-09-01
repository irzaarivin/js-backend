const usersController = require('./usersController')

const controllers = async (handlers) => {
    return {
        usersController: await usersController(await handlers.user),
    }
}

module.exports = controllers