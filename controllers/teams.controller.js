const model = require('../models/teams.model');

// Controller functions to handle HTTP requests
function getTeams(req, res) {
    res.json(model);
}

// Passing in error handling if a team is not found
function getTeamById(req, res) {
    const teamId = Number(req.params.id);
    const team = model[teamId];
    if (team) {
    res.json(team);
    } else {
    res.status(404).json({error : 'Team not found'}); 
    }
}

// A function to create a new team with logic to increment the ID
function postTeams(req, res) {
    if (!req.body.name || !req.body.location || !req.body.championships) {
        return res.status(400).json({error : 'Name, location and championships are required'});
}

    const newTeam = {
        id: model.length + 1,
        name: req.body.name,
        location: req.body.location,
        championships: req.body.championships
    }
    teams.push(newTeam);
    res.json(newTeam);
}

module.exports = {
    getTeams,
    getTeamById,
    postTeams
}