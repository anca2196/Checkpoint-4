const connection = require("../config");
const Diary = {}


Diary.getEntries = (req, callback) => {
    connection.query("SELECT * FROM diary", (err, result) => {
        if (err) throw err;
        callback(err, result);
    }) 
}


module.exports = Diary;