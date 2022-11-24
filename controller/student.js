const db = require('../models');
const Student = db.Student;
const Department = db.Department;

exports.findAll = async (req, res) => {
    try {
        const students = await Student.findAll({ include: Department });
        res.status(200).send(students);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.create = async (req, res) => {
    try {
        const student = await Student.create(req.body);
        res.status(201).send(student);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.findOne = async (req, res) => {
    try {
        const student = await Student.findOne({ where: { id: req.params.id }, include: Department });
        res.status(200).send(student);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.update = async (req, res) => {
    try {
        const student = await Student.update(req.body, { where: { id: req.params.id } });
        res.status(200).send(student);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

exports.deleteOne = async (req, res) => {
    try {
        const student = await Student.destroy({ where: { id: req.params.id } });
        res.status(200).send(student);
    } catch (error) {
        res.status(500).send(error.message);
    }
}