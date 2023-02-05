const {AirCraft} = require("../entity/entities");
const logger = require("../utils/Logger");
const AircraftDto = require("../dto/AircraftDto");

class AircraftRepository {
    findAircraftById = async (registration) => {
        try {
            const result = await AirCraft.findOne({
                where: {registration: registration},
            });
            if (result === null) {
                return null;
            } else {
                return new AircraftDto({
                    registration: result.registration,
                    layout_id: result.layout_id,
                });
            }
        } catch (err) {
            //TOOD some validation
            console.log(err);
            logger.error(err);
        }
    };
}

module.exports = new AircraftRepository();
