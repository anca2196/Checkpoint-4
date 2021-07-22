const Diary = require("../model/diary-model");
const connection = require("../config");
const express = require("express");

const getAllEntries =  (req, res, next) => {
    Diary.getEntries(req, (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send("Error getting entries");
          } else {
            res.status(200).json(result);
            next();
          }
    })
};

const addTestimony = (req, res, next ) => {
    const { kanye_quote, fan_testimony, rating } = req.body;
    connection.promise().query("INSERT INTO diary ( kanye_quote, fan_testimony, rating ) VALUES (?, ?, ? )", [kanye_quote, fan_testimony, rating])
    .then(([result]) => {
        const id = result.insertId
        const createdEntry = { id, kanye_quote, fan_testimony, rating}
      res.status(201).json(createdEntry)
      next()
    })
    .catch((err) => {
      res.status(500).send("Error adding entry")
    })
}

const editEntry = (req, res, next) => {
    const id = req.params.id;
    const { fan_testimony, rating} = req.body;
    connection.promise().query("UPDATE diary SET fan_testimony ='?', rating='?' WHERE id=?", [fan_testimony, rating, id])
    .then(([result]) => {
        res.status(200).json(result)
        next()
      })
      .catch((err) => {
        res.status(500).send("Error updating entry", err)
      })
}


module.exports = {
    getAllEntries, addTestimony, editEntry
}