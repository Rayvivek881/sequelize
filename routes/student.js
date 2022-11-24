const Router = require('express').Router();

const {
    create, deleteOne, findAll, findOne, update
} = require('../controller/student.js');

Router.route('/allstudent').get(findAll);
Router.route('/createstudent').post(create);
Router.route('/student/:id').get(findOne);
Router.route('/updatestudent/:id').put(update);
Router.route('/deletestudent/:id').delete(deleteOne);

module.exports = Router;