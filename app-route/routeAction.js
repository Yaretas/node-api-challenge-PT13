const express = require('express');

//import database
const action = require("../data/helpers/actionModel");
const project = require("../data/helpers/ProjectModel");

//invoke Router
const routerA = express.Router();

//Endpoint handlers---------CRUD operations------------------------
/*Create - POST*/
routerA.post('/', (req, res) => {
    const {
        description,
        notes
    } = req.body;
    const {
        project_id
    } = req.body;


    if (project_id || description || notes) {
        action.insert(project_id, description, notes)
            .then(addAction => {
                res.status(201).json(addAction);
            })
            .catch(err => {
                res.status(500).json({
                    errMessage: "Action could not be added at the moment. Try again :("
                });
            })
    } else {
        res.status(400).json({
            message: "Please make sure have the correct Project_id or information to continue"
        });
    }


})
/*Read - GET*/
routerA.get('/', (req, res) => {
    action.get()
        .then(actions => {
            res.status(200).json(actions);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: "Sorry :( - The information could not be retrieved."
            });
        })

})
/*Update - PUT*/
routerA.put('/:id', (req, res) => {

})
/*Delete - Delete*/
routerA.delete('/:id', (req, res) => {
    const {
        id
    } = req.params;
    actions.remove(id)
        .then(actionDelete => {
            if (actionDelete) {
                res.status(204).json({
                    message: "action was removed from database"
                });

            } else {
                res.status(404).json({
                    message: "Action not found. Try again"
                });
            }
        })
})
//Export Router
module.exports = routerA