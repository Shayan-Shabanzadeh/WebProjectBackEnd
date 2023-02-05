class FlightDto {
    flight_serial;
    flight_id;
    origin;
    destination;
    aircraft;
    departure_utc;
    duration;
    y_price;
    j_price;
    f_price;

    constructor(data) {
        this.flight_serial = data.flight_serial;
        this.flight_id = data.flight_id;
        this.origin = data.origin;
        this.destination = data.destination;
        this.aircraft = data.aircraft;
        this.departure_utc = data.departure_utc;
        this.duration = data.duration;
        this.y_price = data.y_price;
        this.j_price = data.j_price;
        this.f_price = data.f_price;
    }
}

module.exports = FlightDto;
