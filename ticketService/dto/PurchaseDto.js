class PurchaseDto {
  corresponding_user_id;
  title;
  first_name;
  last_name;
  flight_serial;
  offer_price;
  offer_class;

  constructor(data) {
    this.corresponding_user_id = data.corresponding_user_id;
    this.first_name = data.first_name;
    this.last_name = data.last_name;
    this.flight_serial = data.flight_serial;
    this.offer_price = data.offer_price;
    this.offer_class = data.offer_class;
  }
}

module.exports = PurchaseDto;
