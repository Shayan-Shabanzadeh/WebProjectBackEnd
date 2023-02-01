const ticketRepo = require("./../repository/ticketRepository");

class TicketService {
    getTicketById = async (id) => {
        //TODO some logic here
        //TODO some validation here
        try {
            const result = await ticketRepo.findTicketById(id);
            if (result === null) {
                const err = new Error("Could not found ticket with id: " + id);
                err.status = 404;
                throw err;
            } else {
                return result;
            }
        } catch (err) {
            throw err;
        }
    };
    filterFlightTicket = async (flightMode, origin, destination, PassengerNumber, startDate, finishDate, flightType) => {
        try {
            const result = await ticketRepo.filterFlightTicket(flightMode,origin,destination,PassengerNumber,startDate,finishDate,flightType);
            if (result === null) {
                const err = new Error("Could not found ticket");
                err.status = 404;
                throw err;
            } else {
                return result;
            }
        } catch (err) {
            throw err;
        }
    };
}

module.exports = new TicketService();
