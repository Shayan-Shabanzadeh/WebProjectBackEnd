const airCraftLayoutRepository = require('../repository/AirCraftLayoutRepository');

class AirCraftLayoutService {
	getAirCraftLayoutByLayoutId = async (layout_id) =>{
		try {
			const result = await airCraftLayoutRepository.findAirCraftLayoutById(layout_id);
			if (!result){
				const error = new Error(
					`couldnt find aircraft layout by provided id: ${layout_id}`
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