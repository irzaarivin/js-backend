module.exports = async (userHandler) => {

    const { getUsers, getUserById, createUser, updateUser, updateStockUser, deleteUser } = await userHandler

    const get = async (req, res, next) => {
        try {
            const params = req.query
            const result = await getUsers(params)
            res.send(result)
        } catch (err) {
            next(err)
        }
    }

    const getById = async (req, res, next) => {
        try {
            const id = req.query.id
            const result = await getUserById(id)
            res.send(result)
        } catch (err) {
            next(err)
        }
    } 

    const create = async (req, res, next) => {
        try {
            const data = req.body
            const result = await createUser(data)
            res.send(result)
        } catch (err) {
            next(err)
        }
    }

    const update = async (req, res, next) => {
        const id = req.query.id
        const data = req.body
        return await updateUser({id, data})
    }

    const updateStock = async (req, res, next) => {
        const id = req.query.id
        const stock = req.query.add_stock
        return await updateStockUser({id, stock})
    }

    const ddelete = async (req, res, next) => {
        const id = req.query.id
        return await deleteUser(id)
    }

    return { create, get, getById, update, updateStock, ddelete }

}