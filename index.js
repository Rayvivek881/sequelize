const express = require('express');
const app = express(), PORT = 3000;
const cors = require('cors');
const morgan = require('morgan');

const db = require('./models');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

app.use('/api/department', require('./routes/department'));
app.use('/api/student', require('./routes/student'));

db.sequelize.sync().then(() => {
    console.log("Database is connected");
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}).catch(err => console.log('there is an error', err));