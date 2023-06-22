const express = require('express');

const { AirplaneController } = require('../../controllers');
const { AirplaneMiddlewares } = require('../../middlewares');
const router = express.Router();



// /api/v1/airplanes POST
router
     .POST('/', 
     AirplaneController.createAirplane,
     AirplaneMiddlewares.validateCreateRequest
     )

module.exports = router;