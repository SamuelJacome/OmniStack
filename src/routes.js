const express = require('express');
const SessionController = require('./controllers/SessionController');
const multer = require('multer')


const uploadConfig = require('./config/upload')
const SpotController = require('./controllers/SpotController');
const DashboardController = require('./controllers/DashBoardController');
const BookingController = require('./controllers/BookingController');



const routes = express.Router();
const upload = multer(uploadConfig);


routes.post('/sessions', SessionController.store);
routes.get('/dashboard', DashboardController.show);

routes.get('/spots', SpotController.index);
routes.post('/spots', upload.single('thumbnail'), SpotController.store);

routes.post('/spots/:spot_id/bookings', BookingController.store)
module.exports = routes;