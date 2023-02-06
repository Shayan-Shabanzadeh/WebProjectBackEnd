const { AircraftLayout } = require("../entity/entities");
const logger = require("../utils/Logger");
const AircraftLayoutDto = require("../dto/AircraftLayoutDto");

class AirCraftLayoutRepository {
  findAirCraftLayoutById = async (layout_id) => {
    try {
      const result = await AircraftLayout.findOne({
        where: { layout_id: layout_id },
      });
      console.log(result);
      if (!result) return null;
      else {
        return new AircraftLayoutDto({
          layout_id: result.layout_id,
          y_class_capacity: result.y_class_capacity,
          f_class_capacity: result.f_class_capacity,
          j_class_capacity: result.j_class_capacity,
          type_id: result.type_id,
        });
      }
    } catch (e) {
      logger.error(e);
      // console.log(e);
    }
  };
}

module.exports = new AirCraftLayoutRepository();
