const express = require('express')
const userRoutes = express.Router()

module.exports = async (usersController) => {
    const { create, get, getById, update, updateStock, ddelete } = await usersController

    userRoutes.post('/', async (req, res, next) => await create(req, res, next))
    userRoutes.get('/', async (req, res, next) => await get(req, res, next))

    userRoutes.get('/find', async (req, res, next) => {
        res.send(await getById(req, RES, next));
    })

    userRoutes.put('/', async (req, res, next) => {
        res.send(await update(req, next))
    })

    userRoutes.put('/stock', async (req, res, next) => {
        res.send(await updateStock(req, next))
    })

    userRoutes.delete('/', async (req, res, next) => {
        res.send(await ddelete(req, next))
    })

    return userRoutes
};
