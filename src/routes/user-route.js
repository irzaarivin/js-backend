const express = require('express')
const userRoutes = express.Router()

module.exports = async (usersController) => {
    const { create, get, getById, update, updateStock, ddelete } = await usersController

    userRoutes.post('/', async (req, res) => {
        res.send(await create(req));
    })

    userRoutes.get('/', async (req, res) => {
        res.send(await get(req));
    })

    userRoutes.get('/find', async (req, res) => {
        res.send(await getById(req));
    })

    userRoutes.put('/', async (req, res) => {
        res.send(await update(req))
    })

    userRoutes.put('/stock', async (req, res) => {
        res.send(await updateStock(req))
    })

    userRoutes.delete('/', async (req, res) => {
        res.send(await ddelete(req))
    })

    return userRoutes
};
