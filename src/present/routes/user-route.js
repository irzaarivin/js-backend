const express = require('express')
const userRoutes = express.Router()

module.exports = async (usersController) => {
    userRoutes.post('/', usersController.create)
    userRoutes.get('/', usersController.get)
    userRoutes.get('/find', usersController.getById)
    userRoutes.put('/', usersController.update)
    userRoutes.put('/stock', usersController.updateStock)
    userRoutes.delete('/', usersController.ddelete)

    return userRoutes
};
