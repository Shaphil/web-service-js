const models = require('../models/users');
const users = models.users;

module.exports = (app) => {
  app.get('/users', (req, res) => {
    res.json(users);
  });

  app.get('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const user = users.find(user => user.id === userId);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({error: 'User not found'});
    }
  });
};