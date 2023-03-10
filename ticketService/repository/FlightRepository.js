const {Flight} = require('../entity/entities')
const FlightDto = require('../dto/FlightDto')

class FlightRepository {
    findFlightBySerial = async (flight_serial) => {
        try {
            const result = await Flight.findOne({
                where: {flight_serial: flight_serial}
            });
            if (!result) return null;
            else {
                return new FlightDto({
                    flight_serial: result.flight_serial,
                    flight_id: result.flight_id,
                    origin: result.origin,
                    destination: result.destination,
                    aircraft: result.aircraft,
                    departure_utc: result.departure_utc,
                    duration: result.duration,
                    y_price: result.y_price,
                    j_price: result.j_price,
                    f_price: result.f_price
                })
            }
        } catch (e) {
            console.log(e)
        }
    };
    findFlightBasedOnOriginAndDestination = async (org,des)=>{
        try {
            const result = await Flight.findAll({
                where:{destination: des, origin: org}
            })
            if (!result) return null;
            return result;
        }catch (e) {
            console.log(e)
        }
    }
    findFlightsBasedOnDepartureTimeAndOriginAndDestination = async (time, org, des) => {
        try {
            const result = await Flight.findAll({
                where:{departure_time: time, origin: org, destination: des}
            })
            if (!result) return null;
            return result;
        }catch (e) {
            console.log(e)
        }
    }
}

module.exports = new FlightRepository();
