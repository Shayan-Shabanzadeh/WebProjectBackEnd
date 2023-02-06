const express = require("express");
const AirCraftService = require("../service/airCraftLayoutService");
const AircraftLayoutRouter = express.Router();
const { verifyJwt } = require("../utils/utils");

AircraftLayoutRouter.get("/:aircraftid", async (req, res, next) => {
  
  var result =  await verifyJwt();
  try {
    const result = await AirCraftService.getAirCraftLayoutByLayoutId(
      req.params.aircraftid
    );
    res.status(200).json({
      msg: "success",
      data: result,
    });
  } catch (e) {
    next(e);
  }
});

module.exports = AircraftLayoutRouter;
