const {StatusCodes} = require('http-status-codes');
const { AirplaneRepository } = require('../repositories');
const AppError = require('../utils/errors/app-error');

const airplaneRepository = new AirplaneRepository();

async function createAirplane(data) {
    try {
        const airplane = await airplaneRepository.create(data);
        return airplane;
    }catch(error) {
        if(error.name = 'SequelizeValidationError') {
            let explanation = [];
            console.log(error);
            error.errors.forEach((err) => {
                explanation.push(err.message);
            });
            throw new AppError(explanation, StatusCodes.BAD_REQUEST);
        }
        throw new AppError('Cannot create a new Airplance object', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getAirplanes() {
    try {
        const airplanes = await airplaneRepository.getAll();
        return airplanes;
    } catch (error) {
        throw new AppError('Cannot fetch all the airplanes', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getAirplane(id) {
    try {
        const airplane = await airplaneRepository.getl(id);
        return airplane;
    } catch (error) {
        if(error.StatusCodes == StatusCodes.NOT_FOUND) {
            throw new AppError('The airplane you requested is not present', error.StatusCodes)
        }
        throw new AppError('Cannot fetch all the airplanes', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function destroyAirplane(id) {
    try {
        const response = await airplaneRepository.destroy();
        return response;
    } catch (error) {
        throw new AppError('Cannot fetch all the airplanes', StatusCodes.INTERNAL_SERVER_ERROR);
    }

}

module.exports = {
    createAirplane,
    getAirplanes,
    getAirplane,
    destroyAirplane
}