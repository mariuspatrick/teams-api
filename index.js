const express = require("express");

const teamRouter = require("./team/router");
const playerRouter = require("./player/router");
const cityRouter = require("./cities/router");

const app = express();
const jsonParser = express.json();

const port = process.env.PORT || 4000;

app.listen(port, console.log(`Server started on port: ${port}`));

app.use(jsonParser);

app.use(teamRouter);
app.use(playerRouter);
app.use(cityRouter);
