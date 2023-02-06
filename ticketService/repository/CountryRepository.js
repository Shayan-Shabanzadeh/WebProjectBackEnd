const { Country } = require('../entity/entities');
const logger = require('../utils/Logger');
const CountryDto = require('../dto/CountryDto');

class CountryRepository {
	getAllCountries = async ()=>{
		try {
			const result = await Country.findAll();
			console.log(result)
			if (!result) return null
			else return result
		}catch (e) {
			console.log(e)
		}
	}
}

module.exports = new CountryRepository();
