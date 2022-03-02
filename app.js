const express = require("express");
const cors = require("cors");
const setupContactRoutes = require("./app/routes/contact.routes");
const { BadRequestError, errorHandler } = require("./app/errors");


const app = express();

app.use(cors());
app.use(express.json());

app.get("/",(req, res) => {
    res.json({ message: "Welcome to contact book application."});
});

setupContactRoutes(app);

app.use((req, res, next) => {
    next(new BadRequestError(404, "Resource not found"));
});

app.use((err, req, res, next) => {
    errorHandler.handleError(err, res);
});

module.exports = app;