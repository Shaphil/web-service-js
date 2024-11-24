module.exports = (app) => {
  app.get('/', (req, res) => {
    let routes = {
      'user': '/users',
      'user/{id}': '/users/1',
    }
    res.json(routes);
  });
};