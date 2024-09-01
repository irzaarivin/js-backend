const usersController = async (userHandler) => {

    const { getUsers, getUserById, createUser, updateUser, updateStockUser, deleteUser } = await userHandler

    const get = async (req) => {
        const params = req.query
        return await getUsers(params)
    }

    const getById = async (req) => {
        const id = req.query.id
        return await getUserById(id)
    } 

    const create = async (req) => {
        const data = req.body
        return await createUser(data)
    }

    const update = async (req) => {
        const id = req.query.id
        const data = req.body
        return await updateUser({id, data})
    }

    const updateStock = async (req) => {
        const id = req.query.id
        const stock = req.query.add_stock
        return await updateStockUser({id, stock})
    }

    const ddelete = async (req) => {
        const id = req.query.id
        return await deleteUser(id)
    }

    return { create, get, getById, update, updateStock, ddelete }

}

module.exports = usersController