(async () => {

    // DECLARE EXPRESSJS
    const config = require('./src/config/config')
    const express = require('express')
    const session = require('express-session')
    const app = express()
    const bodyParser = require('body-parser');
    const http = require('http')
    const server = http.createServer(app)
    const cors = require('cors')
    const port = config.port || 4444


    // ======================================================================== //
    // ======================================================================== //

    
    // SERVER CONFIG
    app.use(session({ secret: config.secret, resave: true, saveUninitialized: true }))
    app.use(cors({
        origin: config.origin
    }))

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));


    // ======================================================================== //
    // ======================================================================== //


    // DATABASE CONFIG
    const { Sequelize, sequelize, mongoose, mongooseConnection } = require('./src/config/database')

    // SOURCE FILE CONFIG
    const { model, repository, handler, controller, middlewares, routes } = require('./src/index')

    // MODELS
    const models = await model(Sequelize, sequelize, mongoose)

    // REPOSITORIES
    const repositories = await repository(models)

    // HANDLERS
    const handlers = await handler(repositories)

    // CONTROLLERS
    const controllers = await controller(handlers)


    // ======================================================================== //
    // ======================================================================== //


    // RUNNING SERVER
    await routes(app, controllers, middlewares);

    server.listen(port, () => {
        console.log('Server is running on port', port)
    })

})()
