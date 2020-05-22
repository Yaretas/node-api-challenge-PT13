const express = require('express');

//import database
const project = require("../data/helpers/projectModel");

//invoke Router
const routerP = express.Router();

//Endpoint handlers---------CRUD operations------------------------
/*Create - POST*/
routerP.post('/', (req, res) => {
    const name = req.body;
    const description = req.body;
    // const completed = false;

    if (!name || !description) {
        res.status(400).json({
            errorMessage: "Please provide name / description / completed in order to continue"
        });
    } else {
        project.insert(name, description)
            .then(newProject => {
                res.status(201).json(newProject);
            })
            .catch(err => {
                res.status(500).json({
                    errMessage: "Error while saving Project to database :( "
                });
            })
    }

})
/*Read - GET*/
routerP.get('/', (req, res) => {
    project.get()
        .then(projects => {
            res.status(200).json(projects);
        })
        .catch(err => {
            console.log(error);
            res.status(500).json({
                error: "Sorry :( - The information could not be retrieved."
            })
        })
})

/*Read - GET*/
routerP.get('/:id', (req, res) => {
    const {
        id
    } = req.params;
    project.getProjectActions(id)
        .then(actions => {
            res.status(200).json(actions);
        })
        .catch(err => {
            console.log(error);
            res.status(500).json({
                error: "Sorry :( - The information could not be retrieved."
            })
        })
})

/*Update - PUT*/
routerP.put('/:id', (req, res) => {
    const {
        id
    } = req.params;
    const {
        name,
        description
    } = req.body;
    const update = req.body;

    if (name || description) {
        project.update(id, update)
        res.status(200).json(update);
    } else {
        res.status(404).json({
            message: " the specific id project is not found"
        });
    }

})
/*Delete - Delete*/
routerP.delete('/:id', (req, res) => {
    const {
        id
    } = req.params;

    project.remove(id)
        .then(removed => {
            if (removed) {
                res.status(204).json({
                    message: "Project was successfully removed by user"
                });
            } else {
                res.status(404).json({
                    message: "Project was not found"
                });
            }
        })
        .catch(err => {
            res.status(501).json({
                errMessage: "Houston, we have a problem! action is not supported at the moment"
            })
        })
})






//Export Router
module.exports = routerP