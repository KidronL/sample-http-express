const model = require('../models/players.model');

function getPlayers(req, res) {
    res.json(model);
}

function getPlayerById(req, res) {
    const playerId = Number(req.params.id);
    const player = model[playerId];
    console.log(player);
    if (player) {
        res.status(200).json(player);
    } else {
        res.status(404).json({error : 'Player not found'}); //By convention, respoonses should be in JSON format
    }
}

function postPlayer(req, res) {
    if (!req.body.name || !req.body.team) { // Logic using a conditional to check if name and team are present
        return res.status(400).json({error : 'Name and team are required'});
    }
    const newPlayer = {
        id: model.length + 1,
        name: req.body.name,
        team: req.body.team
    }
    players.push(newPlayer);
    res.json(newPlayer);
}

module.exports = {
    getPlayers,
    getPlayerById,
    postPlayer
}