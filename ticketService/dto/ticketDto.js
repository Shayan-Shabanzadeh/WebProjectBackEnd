class TicketDto {
  
  id;
  name;
  price;
  flightMode;
  origin;
  destination;
  PassengerNumber;
  startDate;
  finishDate;
  flightType;

  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.price = data.price;
    this.flightMode = data.flightMode;
    this.origin = data.origin;
    this.destination = data.destination;
    this.PassengerNumber = data.PassengerNumber;
    this.startDate = data.startDate;
    this.finishDate = data.finishDate;
    this.flightType = data.flightType;
  }
  
}

module.exports = TicketDto;
