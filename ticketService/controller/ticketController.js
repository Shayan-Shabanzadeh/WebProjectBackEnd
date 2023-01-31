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

module.exports = ticketRouter;
