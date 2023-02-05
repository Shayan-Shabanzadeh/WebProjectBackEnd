const { Country } = require('../entity/entities');
const logger = require('../utils/Logger');
const CountryDto = require('../dto/CountryDto');

class CountryRepository {
	getAllCountries = async ()=>{
		try {
			const result = await Country.findAll();
			if (!result) return null
			else return result
		}catch (e) {
			console.log(e)
		}
	}
}

module.exports = new CountryRepository();