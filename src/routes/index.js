const userRoutes = require('./user-route');

const routes = async (app, controllers) => {
  const { usersController } = await controllers

  app.use('/user', await userRoutes(usersController));

  return app;
};

module.exports = routes;
