const express = require("express");
const ticketService = require("./../service/ticketService");

const ticketRouter = express.Router();

ticketRouter.get("/", (req, res, next) => {
    res.status(200).json({
        msg: "success",
    });
});

ticketRouter.post("/", (req, res, next) => {
    const ticket = req.body.ticket;
    res.status(200).json({
        msg: "success",
        ticket: ticket,
    });
});

ticketRouter.get("/:ticketId", async (req, res, next) => {
    try {
        const result = await ticketService.getTicketById(req.params.ticketId);
        res.status(200).json({
            msg: "success",
            data: result,
        });
    } catch (err) {
        next(err);
    }
});


ticketRouter.get("/flight/:flightMode&:origin&:destination&:PassengerNumber&:startDate&:finishDate&:flightType", async (req, res, next) => {
    try {
        const result = await ticketService.filterFlightTicket(req.params.flightMode,req.params.origin,req.params.destination,req.params.PassengerNumber,req.params.startDate,req.params.finishDate,req.params.flightType);
        res.status(200).json({
            msg: "success",
            data: result,
        });
    } catch (err) {
        next(err);
    }
});

module.exports = ticketRouter;
