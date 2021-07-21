const express = require("express");
const app = express();
const connection = require("./config")

const cors = require("cors");

const port = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.get("/diary/", (req, res) => {
    connection.promise().query("SELECT * FROM diary")
        .then(([result]) => res.status(200).json(result))
        .catch((err)=> { console.log(err)})
})

app.listen(port, (err) => {
    if (err) throw new Error("Server is not working!");
    console.log(`Server is running on port: ${port}`);
});