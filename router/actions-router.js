const express = require('express');
const db = require('../database/dbConfig')

const router = express.Router();

router.post('/', (req, res) => {
    try {
        db('actions')
            .insert(req.body)
            .then(id => {
                res.status(201).json(id)
            })
            .catch(error => {
                res.status(400).json({
                    message:"Bad request, please provide required fields",
                    error
                })
            })
    } catch (error) {
        res.status(500).json({
            message:"Server could not post project",
            error
        })
    }
});

module.exports = router;