const express = require('express');
const mongoose = require('mongoose');


const routes = require('./routes');

const app = express();

//get, post, put, delete
//yarn add express
//yarn add nodemon -d (depedencia de desenvovilmento)

mongoose.connect('mongodb+srv://samuel:samuel@omnistack-odsue.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

app.use(express.json());

app.use(routes);

app.listen(3333);