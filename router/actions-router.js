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

router.get('/', (req, res) => {
    db('actions')
        .then(actions => {
            res.status(200).json(actions)
        })
        .catch(error => {
            res.status(500).json({
                message:"Server could not get data",
                error
            })
        })
});

router.get('/:id', (req, res) => {
    db('actions')
        .where({ id: req.params.id })
        .then(action => {
            if(action){
               res.status(200).json(action) 
            }else{
                res.status(404).json({
                    message: "Couldn't find action with given ID"
                })
            }
        })
        .catch(error => {
            res.status(500).json({
                message: "Server could not retrieve action",
                error
            })
        })
});

router.put('/:id', (req, res) => {
    try {
        db('actions')
            .where({ id: req.params.id })
            .update(req.body)
            .then(count => {
                if(count){
                    res.status(200).json({
                        message: "Action was updated"
                    })
                }else{
                    res.status(404).json({
                        message: "Action could not be found with given ID"
                    })
                }
            })
            .catch(error => {
                res.status(400).json({
                    message: "Bad request, please provide required fields",
                    error
                })
            })
    } catch (error) {
        res.status(500).json({
            message: "Server could not update",
            error
        })
    }
});

router.delete('/:id', (req, res) => {
    db('actions')
    .where({ id: req.params.id })
    .del()
    .then(count => {
        if(count){
            res.status(204).end();
        }else{
            res.status(404).json({
                message: "Action with given ID could not be found"
            })
        }
    })
    .catch(error => {
        res.status(500).json({
            message: "Server could not delete Action",
            error
        })
    })
});

module.exports = router;