const model = require('./models/index')
const repository = require('./repositories/index')
const handler = require('./handlers/index')
const controller = require('./controllers/index')
const middlewares = require('./middlewares/index')
const routes = require('./routes/index')

module.exports = { model, repository, handler, controller, middlewares, routes }

// const bridge = async ({handlers, repositories, Sequelize}) => {
//     return {
//         models: await models(Sequelize, sequelize, mongoose),
//         repositories: await repositories(models),
//         handlers: await handlers(repositories),
//         controllers: await controllers(handlers),
//     }
// }

// module.exports = bridge