const Deparment = require('../models/Department.js');

module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define('Student', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validator: {
            notEmpty: true
        }
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validator: {
            isEmail: true
        }
    }
  }, { timestamps: true });
  return Student;
}