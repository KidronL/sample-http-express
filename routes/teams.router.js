const express = require('express');
const teamsController = require('../controllers/teams.controller');
const teamsRouter = express.Router();

// Setting up routes for teams
teamsRouter.post('/', teamsController.postTeams);
teamsRouter.get('/', teamsController.getTeams);
teamsRouter.get('/:id', teamsController.getTeamById);

module.exports = teamsRouter;