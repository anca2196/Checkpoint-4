const express = require("express");
const router = express.Router();

router.get("/diary/", (req, res) => {
    connection.promise().query("SELECT * FROM diary")
        .then(([result]) => res.status(200).json(result))
        .catch((err)=> res.status(500).send("Error retreiving testimonies", err))
})

router.post("/diary/", (req, res) => {
    connection.promise().query("SELECT * FROM diary")
        .then(([result]) => res.status(200).json(result))
        .catch((err)=> res.status(500).send("Error adding testimony", err))
})

module.exports = router;