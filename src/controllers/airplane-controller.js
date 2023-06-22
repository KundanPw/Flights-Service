const { StatusCode } = require('https-status-codes');

const { AirplaneService } = require('../services');
const { SuccessResponse, ErrorResponse} = require('../utils/common');

/**
 * POST : /airplanes
 * req-body {modelNumber :'airbus30}
 */

async function createAirplane(req, res) {
    try {
        // console.log('inside controller');
        const airplane = await AirplaneService.createAirplane({
            modelNumber: req.body.modelNumber,
            capacity: req.body.capacity
        });
        SuccessResponse.data = airplane;
        return res
        .status(StatusCode.CREATED)
        .json(SuccessResponse);
    } catch(error) {
        ErrorResponse.error = error;
        return res   
        .status(error.StatusCode)
        .json(ErrorResponse);
    }
}

module.exports = {
    createAirplane
}