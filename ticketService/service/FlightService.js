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
    }
}

module.exports = new FlightService();
