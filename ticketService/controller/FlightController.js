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
FlightRouter.get('/from:from&to:to',async (req, res, next)=>{
  try {
    const result = await FlightService.getFlightsOfSpecificOriginAndDestination(
        req.params.from, req.params.to
    );
    req.status(200).json({
      msg: 'success',
      data: result
    });
  }catch (e) {
    console.log(e)
  }
});
FlightRouter.get('/from=:from&to=:to&time=:time',async (req,res,next)=>{
  try {
    const result = await FlightService.getFlightsBasedOnTimeAndLocations(
        req.params.time,
        req.params.from,
        req.params.to
    );
    req.status(200).json({
      msg: 'success',
      data: result
    });
  }catch (e) {
    console.log(e)
  }
})

module.exports = FlightRouter;
