const { StatusCode } = require('http-status-codes');

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

async function getAirplanes(req, res) {
    try {
        const airplanes = await AirplaneService.getAirplanes();
        SuccessResponse.data = airplanes;
        SuccessResponse.error = error;
        return res   
        .status(StatusCode.OK)
        .json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res   
        .status(error.StatusCode)
        .json(ErrorResponse);
    }
}

/**
 * POST : /airplanes/:id
 * req-body {}
 */

async function getAirplane(req, res) {
    try {
        const airplanes = await AirplaneService.getAirplane(req.params.id);
        SuccessResponse.data = airplanes;
        SuccessResponse.error = error;
        return res   
        .status(StatusCode.OK)
        .json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res   
        .status(error.StatusCode)
        .json(ErrorResponse);
    }
}

/**
 * DELETE : /airplanes/:id
 * req-body {modelNumber :'airbus30}
 */

async function destoryAirplane(req, res) {
    try {
        const airplanes = await AirplaneService.destroyAirplane(req.param.id);
        SuccessResponse.data = airplanes;
        return res
        .status(StatusCode.OK)
        .json(SuccessResponse);
    } catch(error) {
        ErrorResponse.error = error;
        return res   
        .status(error.StatusCode)
        .json(ErrorResponse);
    }
}
module.exports = {
    createAirplane,
    getAirplanes,
    getAirplane,
    destoryAirplane
}