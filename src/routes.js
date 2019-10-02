const express = require('express');
const SessionController = require('./controllers/SessionController');
const multer = require('multer')


const uploadConfig = require('./config/upload')
const SpotController = require('./controllers/SpotController');



const routes = express.Router();
const upload = multer(uploadConfig);


routes.post('/sessions', SessionController.store);

routes.post('/spots', upload.single('thumbnail'), SpotController.store);



module.exports = routes;