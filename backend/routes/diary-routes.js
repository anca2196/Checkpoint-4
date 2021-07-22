const express = require("express");
const router = express.Router();
const { getAllEntries, addTestimony, editEntry } = require("../controller/diary-controller");

router.get("/", getAllEntries);

router.post("/", addTestimony);

router.put("/:id", editEntry);

// router.post("/diary/", (req, res) => {
//     console.log(req.body);
//     const { kanye_quote, fan_testimony, rating } = req.body;
//     connection.query("INSERT INTO diary (kanye_quote, fan_testimony, rating) VALUES (?, ?, ?)", [kanye_quote, fan_testimony, rating], (err, result) => {
//         if (err) {
//             console.error(err);
//             res.status(500).send("Error adding testimony", err)
//         } else {
//             res.status(200).send("Success")
//             console.log(result.insertId)
//         }
//     })
// }
       

            // res.status(200).send("Success")
            // console.log(result.insertId)
            // const id = result.insertId;
            // const createdEntry = { id, kanye_quote, fan_testimony, rating}
            // console.log(createdEntry)
            // res.status(200).json(createdEntry)
//         })
//         .catch((err)=> {
//             console.log(err)
//             res.status(500).send("Error adding testimony", err)})
// })

module.exports = router;