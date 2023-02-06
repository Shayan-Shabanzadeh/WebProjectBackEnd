const FlightRepository = require('../repository/FlightRepository');

class FlightService {
    getFlightBySerial = async (flight_serial) => {
        try {
            const result = await FlightRepository.findFlightBySerial(flight_serial);
            if (!result) {
                const error = new Error(
                    `couldnt find flight by provided flight_serial: ${flight_serial}`
                );
                error.status = 404
                throw error
            } else {
                return result;
            }
        } catch (e) {
            throw e
        }
    };
    getFlightsOfSpecificOriginAndDestination = async (org,des) => {
        try {
            const result = await FlightRepository.findFlightBasedOnOriginAndDestination(org,des);
            if (!result){
                const error = new Error(
                    `there is no available flight from ${org} to ${des}`
                );
                error.status = 404
                throw error
            }else {
                return result;
            }
        }catch (e) {
            console.log(e)
        }
    };
    getFlightsBasedOnTimeAndLocations = async (time, org, des) => {
        try {
            const result = await FlightRepository.findFlightsBasedOnDepartureTimeAndOriginAndDestination(time,org,des);
            if (!result){
                const error = new Error(
                    'there is no ticket available on this time'
                )
                error.status = 400;
                throw error
            }else return result
        }catch (e) {
            console.log(e)
        }
    }
}

module.exports = new FlightService();
