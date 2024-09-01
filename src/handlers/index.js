// ITEMS HANDLERS
const users = require('./user/index');

// BIND ALL HANDLER BY USE CASE
const handlers = async (repositories) => {
    return {
        user: await users(repositories)
    }
}

module.exports = handlers