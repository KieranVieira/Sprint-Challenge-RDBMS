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

router.get('/', (req, res) => {
    db('projects')
        .then(projects => {
            res.status(200).json(projects)
        })
        .catch(error => {
            res.status(500).json({
                message:"Server could not get data",
                error
            })
        })
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
                        message: "Server could not retrieve actions",
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

router.put('/:id', (req, res) => {
    try {
        db('projects')
            .where({ id: req.params.id })
            .update(req.body)
            .then(count => {
                if(count){
                    res.status(200).json({
                        message: "Project was updated"
                    })
                }else{
                    res.status(404).json({
                        message: "Projects could not be found with given ID"
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
    db('projects')
        .where({ id: req.params.id })
        .del()
        .then(count => {
            if(count){
                res.status(204).end();
            }else{
                res.status(404).json({
                    message: "Project with given ID could not be found"
                })
            }
        })
        .catch(error => {
            res.status(500).json({
                message: "Server could not delete project",
                error
            })
        })
});

module.exports = router;