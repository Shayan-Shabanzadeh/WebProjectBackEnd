const CountryRepository = require('../repository/CountryRepository')
class CountryService {
	getCountries = async ()=>{
		try {
			const result = await CountryRepository.getAllCountries();
			if (!result){
				const error = new Error(
					'there is no country in database'
				);
				error.status = 404
				throw error;
			}
		}catch (e) {
			throw e;
		}
	}
}
module.exports = new CountryService()