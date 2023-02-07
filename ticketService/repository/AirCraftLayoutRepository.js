
const { AircraftLayout } = require("../entity/entities");
const logger = require("../utils/Logger");
const AircraftLayoutDto = require("../dto/AircraftLayoutDto");


class AirCraftLayoutRepository {
  findAirCraftLayoutById = async (type_id) => {
    try {
      const result = await AircraftLayout.findOne({
        where: { type_id: type_id },
      });
      if (!result) return null;
      else {
        return new AircraftLayoutDto({
          layout_id: result.layout_id,
          type_id: result.type_id,
          y_class_capacity: result.y_class_capacity,
          f_class_capacity: result.f_class_capacity,
          j_class_capacity: result.j_class_capacity,
        });
      }
    } catch (e) {
      logger.error(e);
      // console.log(e);
    }
  };
}

module.exports = new AirCraftLayoutRepository();
