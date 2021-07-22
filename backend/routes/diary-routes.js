const express = require("express");
const router = express.Router();
const { getAllEntries, addTestimony, editEntry, deleteEntry } = require("../controller/diary-controller");

router.get("/", getAllEntries);

router.post("/", addTestimony);

router.put("/:id", editEntry);

router.delete("/:id", deleteEntry)

module.exports = router;