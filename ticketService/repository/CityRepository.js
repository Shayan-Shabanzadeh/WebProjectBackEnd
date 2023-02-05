const { City } = require('../entity/entities');
const logger = require('../utils/Logger');
const CityDto = require('../dto/CityDto');

class CityRepository {
	findCountryCities = async (country_name) => {
		try {
			const result = await City.findAll({
				where:{
					country_name: country_name
				}
			});
			if (!result){
				return null;
			}else {
				return result;
			}
		}catch (e) {
			console.log(e)
		}
	}
}
 module.exports = new CityRepository();