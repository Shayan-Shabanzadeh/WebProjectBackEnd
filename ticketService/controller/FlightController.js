const express = require("express");
const FlightService = require("./../service/FlightService");

const FlightRouter = express.Router();

FlightRouter.get("/:flight_serial", async (req, res, next) => {
  try {
    const result = await FlightService.getFlightBySerial(
      req.params.flight_serial
    );
    res.status(200).json({
      msg: "success",
      data: result,
    });
  } catch (err) {
    next(err);
  }
});

module.exports = FlightRouter;
