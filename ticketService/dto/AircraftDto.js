class AircraftDto {
  registration;
  layout_id;

  constructor(data) {
    this.registration = data.registration;
    this.layout_id = data.layout_id;
  }
}

module.exports = AircraftDto;
