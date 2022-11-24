module.exports = (sequelize, DataTypes) => {
    const Deparment = sequelize.define('Department', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate : {
                notEmpty: true
            }
        }
    }, { timestamps: true });
    return Deparment;
};