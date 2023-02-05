const { AircraftLayout } = require('../entity/entities')
const logger = require('../logs/app.log')
const AircraftLayoutDto = require('../dto/AircraftLayout')

class AirCraftLayoutRepository{
	findAirCraftLayoutById = async (layout_id) =>{
		try {
			const result = await AircraftLayout.findOne({
				where: {layout_id: layout_id}
			});
			if (!result) return null;
			else {
				return new AircraftLayoutDto({
					layout_id_id: result.layout_id,
					y_class_capacity: result.y_class_capacity,
					f_class_capacity: result.f_class_capacity,
					j_class_capacity: result.j_class_capacity
				})
			}
		} catch (e) {
			console.log(e)
		}
	}
}

module.exports = new AirCraftLayoutRepository();
