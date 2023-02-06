const CityRepository = require('../repository/CityRepository');

class CityService {
	getCitiesByCountry = async (country_name)=>{
		try {
			const result = await CityRepository.findCountryCities(country_name);
			if (!result) {
				const err = new Error(
					'there is no city in this country'
				);
				err.status = 404;
				throw err;
			}else {
				return result;
			}
		}catch (e) {
			throw e;
		}
	}
	getAllCities = async ()=>{
		try {
			const result = await CityRepository.getAllCities();
			if (!result) {
				const err = new Error(
					'there is no city in DB'
				);
				err.status = 404;
				throw err;
			}else {
				return result;
			}
		}catch (e) {
			throw e;
		}
	}
}

module.exports = new CityService();
