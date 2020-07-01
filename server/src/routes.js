const express = require('express');

const SessionController = require('./controllers/SessionController');
const OngsController = require('./controllers/OngsController');
const IncidentsController = require('./controllers/IncidentsController');
const ProfileController = require('./controllers/ProfileController');

const routes = express.Router();

routes.post('/sessions', SessionController.store);

routes.get('/ongs', OngsController.index);
routes.post('/ongs', OngsController.store);

routes.get('/incidents', IncidentsController.index);
routes.post('/incidents', IncidentsController.store);
routes.delete('/incidents/:id', IncidentsController.delete);

routes.get('/profile', ProfileController.index);

module.exports = routes;