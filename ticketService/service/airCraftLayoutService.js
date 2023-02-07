const airCraftLayoutRepository = require('../repository/AirCraftLayoutRepository');

class AirCraftLayoutService {
	getAirCraftLayoutByLayoutId = async (type_id) =>{
		try {
			const result = await airCraftLayoutRepository.findAirCraftLayoutById(type_id);
			if (!result){
				const error = new Error(
					`couldnt find aircraft layout by provided id: ${type_id}`
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

module.exports = new AirCraftLayoutService();
