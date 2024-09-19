// ITEMS HANDLERS
const createUser = require('./create')
const getUsers = require('./get')
const getUserById = require('./get-by-id')
const updateUser = require('./update')
const updateStockUser = require('./update-stock')
const deleteUser = require('./delete')

// BIND ALL HANDLER BY USE CASE
const users = async (repositories, helpers) => {
    return {
        createUser: await createUser.bind(null, repositories, helpers),
        getUsers: await getUsers.bind(null, repositories, helpers),
        getUserById: await getUserById.bind(null, repositories, helpers),
        updateUser: await updateUser.bind(null, repositories, helpers),
        updateStockUser: await updateStockUser.bind(null, repositories, helpers),
        deleteUser: await deleteUser.bind(null, repositories, helpers)
    }
}

module.exports = users