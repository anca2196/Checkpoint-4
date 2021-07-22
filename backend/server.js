const express = require("express");
const app = express();
const connection = require("./config")

const cors = require("cors");

const port = process.env.PORT || 5000;

const diaryRoute = require("./routes/diary-routes");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.use("/diary", diaryRoute);


app.listen(port, (err) => {
    if (err) throw new Error("Server is not working!");
    console.log(`Server is running on port: ${port}`);
});