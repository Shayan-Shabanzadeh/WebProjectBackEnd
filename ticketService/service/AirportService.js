const AirportRepository = require('../repository/AirportRepository');

class AirportService {
    getAirportByIataCode = async (iata_code) => {
        try {
            const result = await AirportRepository.findAirportById(iata_code);
            if (!result) {
                const error = new Error(
                    `couldnt find aircraft Airport by iata_code: ${iata_code}`
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
    getAirportByCountry = async (country_name) => {
        try {
            const result = await AirportRepository.getAirportByCountry(country_name);
            if (!result) {
                const error = new Error(
                    `couldnt find aircraft Airport by country_name: ${country_name}`
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
    getAllAirports = async () => {
        try {
            const result = await AirportRepository.getAllAirports();
            if (!result) {
                const error = new Error(
                    `couldnt find aircraft Airport`
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

module.exports = new AirportService();
