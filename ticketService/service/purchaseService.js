const purchaseRepo = require("../repository/purchaseRepository");

class PurchaseService {
  getPurchaseByCorrespondingUserId = async (corresponding_user_id) => {
    //TODO some logic here
    //TODO some validation here

    try {
      const result = await purchaseRepo.findPurchaseById(corresponding_user_id);
      if (result === null || result === undefined) {
        const err = new Error(
          "Could not found purchase with user_id: " + corresponding_user_id
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
  // filterFlightTicket = async (flightMode, origin, destination, PassengerNumber, startDate, finishDate, flightType) => {
  //     try {
  //         const result = await ticketRepo.filterFlightTicket(flightMode,origin,destination,PassengerNumber,startDate,finishDate,flightType);
  //         if (result === null) {
  //             const err = new Error("Could not found ticket");
  //             err.status = 404;
  //             throw err;
  //         } else {
  //             return result;
  //         }
  //     } catch (err) {
  //         throw err;
  //     }
  // };
}

module.exports = new PurchaseService();
