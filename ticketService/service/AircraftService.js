const AircraftRepo = require("../repository/AircraftRepository");

class AircraftService {
  getAircraftByRegistrationId = async (registration) => {
    //TODO some logic here
    //TODO some validation here

    try {
      const result = await AircraftRepo.findAircraftById(registration);
      if (result === null || result === undefined) {
        const err = new Error(
          "Could not found Aircraft with registration_id: " + registration
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

module.exports = new AircraftService();
