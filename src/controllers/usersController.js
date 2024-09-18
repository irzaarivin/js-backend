const usersController = async (userHandler) => {

    const { getUsers, getUserById, createUser, updateUser, updateStockUser, deleteUser } = await userHandler

    const get = async (req, res, next) => {
        try {
            const params = req.query
            res.send(await getUsers(params))
        } catch (err) {
            next(err)
        }
    }

    const getById = async (req) => {
        const id = req.query.id
        return await getUserById(id)
    } 

    const create = async (req, res, next) => {
        try {
            const data = req.body
            res.send(await createUser(data))
        } catch (err) {
            next(err)
        }
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