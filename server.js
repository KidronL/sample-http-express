const express = require('express');
const teamsRouter = require('./routes/teams.router');
const playersRouter = require('./routes/players.router');

const app = express();

const PORT = 3000;


// Middleware that logs the request and respone time
app.use((req, res, next) => {
    const start = Date.now();
    console.log(`Request URL: ${req.url} Base URL: ${req.baseUrl} Request Method: ${req.method}`);
    next();
    const delta = Date.now() - start;
    console.log(`Response time: ${delta}ms`);
});

// Routes
app.use('/teams', teamsRouter);
app.use('/players', playersRouter);

// Built in express middleware that parses JSON
app.use(express.json());

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})