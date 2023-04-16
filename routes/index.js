const express = require("express");

const notsRouter = require("./notes");

const app = express();

app.use("/notes", notesRouter);

module.exports = app;