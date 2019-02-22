const express = require('express');
const db = require('../database/dbConfig')

const router = express.Router();

router.post('/', (req, res) => {
    try {
        db('projects')
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

router.get('/:id', (req, res) => {
    db('projects')
        .where({ id: req.params.id })
        .first()
        .then(project => {
            if(project){
                db('actions')
                .where({ project_id: req.params.id })
                .then(actions => {
                    project.actions = actions
                    res.status(200).json(project)
                })
                .catch(error =>{
                    res.status(500).json({
                        message: "Server could not find actions",
                        error
                    })
                })
            }else{
                res.status(404).json({
                    message: "Could not find project with given ID",
                })
            }
        })
        .catch(error => {
            res.status(500).json({
                message: "Server could not retrieve project",
                error
            })
        })
});

module.exports = router;