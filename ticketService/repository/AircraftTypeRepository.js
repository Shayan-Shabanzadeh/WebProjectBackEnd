const {AircraftType} = require("../entity/entities");
const logger = require("../utils/Logger");
const AircraftTypeDto = require("../dto/AircraftTypeDto");

class AircraftTypeRepository {
    findAircraftTypeById = async (type_id) => {
        try {
            const result = await AircraftType.findOne({
                where: {type_id: type_id},
            });
            if (result === null) {
                return null;
            } else {
                return new AircraftTypeDto({
                    type_id: result.type_id,
                    manufacturer: result.manufacturer,
                    model: result.model,
                    series: result.series,
                });
            }
        } catch (err) {
            //TOOD some validation
            console.log(err);
            logger.error(err);
        }
    };

}

module.exports = new AircraftTypeRepository();
