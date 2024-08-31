(async () => {

    require('dotenv').config({ path: './.env' })

    // DECLARE EXPRESSJS
    const express = require('express')
    const session = require('express-session')
    const app = express()
    const bodyParser = require('body-parser');
    const http = require('http')
    const server = http.createServer(app)
    const cors = require('cors')
    const port = process.env.PORT || 4444


    // ======================================================================== //
    // ======================================================================== //

    
    // SERVER CONFIG
    app.use(session({ secret: 'gacor-kang-mantap-djiwa', resave: true, saveUninitialized: true }))
    app.use(cors({
        origin: 'http://localhost:3000'
    }))

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));


    // ======================================================================== //
    // ======================================================================== //


    // DATABASE CONFIG
    const { testConnection, Sequelize, sequelize, mongoose, mongooseConnection } = require('./src/databases')

    // MODELS
    const model = require('./src/models')
    const models = await model(Sequelize, sequelize, mongoose)

    // REPOSITORIES
    const repository = require('./src/repositories')
    const repositories = await repository(models)

    // HANDLERS
    const handler = require('./src/handlers')
    const handlers = await handler(repositories)

    // CONTROLLERS
    const controller = require('./src/controllers')
    const controllers = await controller(handlers)


    // ======================================================================== //
    // ======================================================================== //


    // RUNNING SERVER
    const routes = require('./src/routes');
    await routes(app, controllers);

    server.listen(port, () => {
        console.log('Server is running on port', port)
    })

})()
