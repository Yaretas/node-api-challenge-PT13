const express = require('express');

//import database
const action = require("../data/helpers/actionModel");

//invoke Router
const routerA = express.Router();

//Endpoint handlers---------CRUD operations------------------------
/*Create - POST*/
routerA.post('/', (req, res) => {

})
/*Read - GET*/
routerA.get('/', (req, res) => {

})
/*Update - PUT*/
routerA.put('/', (req, res) => {

})
/*Delete - Delete*/
routerA.delete('/', (req, res) => {

})
//Export Router
module.exports = routerA