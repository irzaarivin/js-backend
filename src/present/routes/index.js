const userRoutes = require('./user-route');

const routes = async (app, controllers, middlewares) => {
  const { usersController } = await controllers

  app.use('/user', await userRoutes(usersController));
  
  app.use(middlewares.ErrorHandler)

  return app;
};

module.exports = routes;
