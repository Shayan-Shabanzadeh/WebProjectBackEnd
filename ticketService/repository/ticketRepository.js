const { Ticket } = require("./../models/");
const logger = require("./../utils/Logger");
const TicketDto = require("./../dto/ticketDto");

class TicketRepository {
  findTicketById = async (id) => {
    
    try {
      const resualt = await Ticket.findOne({ where: { id: id } });
      if (resualt === null) {
        return null;
      } else {
        return new TicketDto({
          id: resualt.id,
          name: resualt.name,
          price: resualt.price,
        });
      }
    } catch (err) {
      //TOOD some validation
      logger.error(err);
    }
  };
}

module.exports = new TicketRepository();
