class AirportDto {
  country_name;
  city_name;
  airport_name;
  iata_code;

  constructor(data) {
    this.country_name = data.country_name;
    this.city_name = data.city_name;
    this.airport_name = data.airport_name;
    this.iata_code = data.iata_code;
  }
}

module.exports = AirportDto;
