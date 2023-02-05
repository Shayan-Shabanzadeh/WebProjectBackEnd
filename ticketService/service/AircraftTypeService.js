const AircraftTypeRepo = require("../repository/AircraftTypeRepository");
const {AircraftType} = require("../entity/entities");

class AircraftTypeService {
    getAircraftTypeById = async (type_id) => {
        //TODO some logic here
        //TODO some validation here

        try {
            const result = await AircraftType.findPurchaseById(type_id);
            if (result === null || result === undefined) {
                const err = new Error(
                    "Could not found purchase with user_id: " + type_id
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
