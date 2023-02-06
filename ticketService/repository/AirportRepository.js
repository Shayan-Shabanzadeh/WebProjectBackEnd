const {Airport} = require('../entity/entities')
const AirportDto = require('../dto/AirportDto')

class AirportRepository {
    findAirportById = async (iata_code) => {
        try {
            const result = await Airport.findOne({
                where: {iata_code: iata_code}
            });
            if (!result) return null;
            else {
                return new AirportDto({
                    iata_code: result.iata_code,
                    airport_name: result.airport_name,
                    country_name: result.country_name,
                    city_name: result.city_name
                })
            }
        } catch (e) {
            console.log(e)
        }
    }
    getAirportByCountry = async (country_name) => {
        try {
            const result = await Airport.findAll({
                where: {country_name: country_name}
            });
            if (!result) return null;
            else {
                return result
            }
        } catch (e) {
            console.log(e)
        }
    }
    getAllAirports = async () => {
        try {
            const result = await Airport.findAll();
            if (!result) return null;
            else {
                return result
            }
        } catch (e) {
            console.log(e)
        }
    }
}

module.exports = new AirportRepository();
