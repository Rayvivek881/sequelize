const Router = require('express').Router();

const {
    create, deleteOne, findAll, findOne, update
} = require('../controller/department.js');

Router.route('/alldepartment').get(findAll);
Router.route('/createdepartment').post(create);
Router.route('/department/:id').get(findOne);
Router.route('/updatedepartment/:id').put(update);
Router.route('/deletedepartment/:id').delete(deleteOne);

module.exports = Router;