class AircraftTypeDto {
  type_id;
  manufacturer;
  model;
  series;


  constructor(data) {
    this.type_id = data.type_id;
    this.manufacturer = data.manufacturer;
    this.model = data.model;
    this.series = data.series;
  }
}

module.exports = AircraftTypeDto;
