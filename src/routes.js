const routes = require("express").Router();
const multer = require("multer");
const multerConfig = require('./config/multer')

routes.get("/", (req, res) => {
    return res.json("Welcome to Upload Application");
});
routes.post("/posts", multer(multerConfig).single('file'), (req, res) => {
    const { originalname: name, size, key, location: url = "" } = req.file

    return res.json(url)
});
module.exports = routes;