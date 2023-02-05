const AirportRepository = require('../repository/AirportRepository');

class AirportService {
	getAirportByIataCode = async (iata_code) =>{
		try {
			const result = await AirportRepository.findAirportById(iata_code);
			if (!result){
				const error = new Error(
					`couldnt find aircraft Airport by iata_code: ${iata_code}`
				);
				error.status = 404
				throw error
			}else{
				return result;
			}
		}catch (e) {
			throw e
		}
	}
}

module.exports = new AirportService();
