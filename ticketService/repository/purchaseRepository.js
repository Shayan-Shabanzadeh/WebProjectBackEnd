const { Purchase } = require("../models");
const logger = require("../utils/Logger");
const PurchaseDto = require("../dto/PurchaseDto");
const { Op } = require("sequelize");

class PurchaseRepository {
  findPurchaseById = async (corresponding_user_id) => {
    try {
      const result = await Purchase.findOne({
        where: { corresponding_user_id: corresponding_user_id },
      });
      if (result === null) {
        return null;
      } else {
        return new PurchaseDto({
          corresponding_user_id: result.corresponding_user_id,
          title: result.title,
          first_name: result.first_name,
          last_name: result.last_name,
          flight_serial: result.flight_serial,
          offer_price: result.offer_price,
          offer_class: result.offer_class,
        });
      }
    } catch (err) {
      //TOOD some validation
      console.log(err);
      logger.error(err);
    }
  };
  // filterFlightTicket = async (flightMode, origin, destination, PassengerNumber, startDate, finishDate, flightType) => {
  //     try {
  //         const result = await Ticket.findAll({
  //             where: {
  //                 [Op.eq]: [{flightMode: flightMode}, {origin: origin}, {destination: destination}, {startDate: startDate}, {finishDate: finishDate}, {flightType: flightType}],
  //                 [Op.gte]: [{PassengerNumber: PassengerNumber},],
  //             }
  //         });
  //         if (result === null) {
  //             return null;
  //         } else {
  //             return new TicketDto({
  //                 id: result.id,
  //                 name: result.name,
  //                 price: result.price,
  //                 flightMode: result.flightMode,
  //                 origin: result.origin,
  //                 destination: result.destination,
  //                 PassengerNumber: result.PassengerNumber,
  //                 startDate: result.startDate,
  //                 finishDate: result.finishDate,
  //                 flightType: result.flightMode,
  //             });
  //         }
  //     } catch (err) {
  //         throw err;
  //     }
  // };
  // decreaseFlightCapacity = async (id, purchasedCapacity) => {
  //     try {
  //         const result = await Ticket.findOne({where: {id: id}});
  //         if (result === null) {
  //             return null;
  //         } else {
  //             let capacity = result.PassengerNumber - purchasedCapacity
  //             if (capacity === 0) {
  //                 await Ticket.destroy({
  //                     where: {
  //                         id: id
  //                     }
  //                 });
  //             } else {
  //                 await Ticket.update({PassengerNumber: capacity}, {
  //                     where: {
  //                         id: id
  //                     }
  //                 });
  //             }
  //         }
  //     } catch (e) {
  //         throw e;
  //     }
  // }
}

module.exports = new PurchaseRepository();
