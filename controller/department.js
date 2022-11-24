const db = require('../models');
const Department = db.Department;

exports.findAll = async (req, res) => {
    try {
        const departments = await Department.findAll();
        res.status(200).send(departments);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

exports.create = async (req, res) => {
    try {
        console.log(db, Department);
        const department = await Department.create(req.body);
        res.status(201).send(department);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

exports.findOne = async (req, res) => {
    try {
        const department = await
        Department.findOne({ where: { id: req.params.id } });
        res.status(200).send(department);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

exports.update = async (req, res) => {
    try {
        const department = await Department.update(req.body, { where: { id: req.params.id } });
        res.status(200).send(department);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

exports.deleteOne = async (req, res) => {
    try {
        const department = await Department.destroy({ where: { id: req.params.id } });
        res.status(200).send(department);
    } catch (error) {
        res.status(500).send(error.message);
    }
}
