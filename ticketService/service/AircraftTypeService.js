const AircraftTypeRepo = require("../repository/AircraftTypeRepository");

class AircraftTypeService {
    getAircraftTypeById = async (type_id) => {
        try {
            const result = await AircraftTypeRepo.findAircraftTypeById(type_id);
            if (!result) {
                const err = new Error(
                    "Could not found aircraft type  with type_id: " + type_id
                );
                err.status = 404;
                throw err;
            } else {
                return result;
            }
        } catch (err) {
            throw err;
        }
    };

}

module.exports = new AircraftTypeService();
