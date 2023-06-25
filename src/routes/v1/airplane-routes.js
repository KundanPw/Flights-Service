const express = require('express');

const { AirplaneController } = require('../../controllers');
const { AirplaneMiddlewares } = require('../../middlewares');
const router = express.Router();



// /api/v1/airplanes POST
router.post('/', 
AirplaneMiddlewares.validateCreateRequest,
     AirplaneController.createAirplane);

// /api/v1/airplanes GET
router.get('/', 
     AirplaneController.getAirplanes);
          
// /api/v1/airplanes:id GET
router.get('/:id',           AirplaneController.getAirplanes);

// /api/v1/airplanes:id DELETE
router.delete('/:id',           AirplaneController.destoryAirplane);


module.exports = router;