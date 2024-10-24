const express = require('express');
const playersController = require('../controllers/players.controller');
const playersRouter = express.Router();

playersRouter.post('/', playersController.postPlayer);
playersRouter.get('/', playersController.getPlayers);
playersRouter.get('/:id', playersController.getPlayerById);

module.exports = playersRouter;