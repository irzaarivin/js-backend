// ITEMS HANDLERS
const createUser = require('./create')
const getUsers = require('./get')
const getUserById = require('./get-by-id')
const updateUser = require('./update')
const updateStockUser = require('./update-stock')
const deleteUser = require('./delete')

// BIND ALL HANDLER BY USE CASE
const users = async (repositories) => {
    return {
        createUser: await createUser.bind(null, repositories),
        getUsers: await getUsers.bind(null, repositories),
        getUserById: await getUserById.bind(null, repositories),
        updateUser: await updateUser.bind(null, repositories),
        updateStockUser: await updateStockUser.bind(null, repositories),
        deleteUser: await deleteUser.bind(null, repositories)
    }
}

module.exports = users