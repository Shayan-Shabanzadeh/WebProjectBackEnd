const express = require("express");
const AirCraftService = require("../service/airCraftLayoutService");
const AircraftLayoutRouter = express.Router();
const { verifyJwtFromCookie } = require("../utils/utils");

AircraftLayoutRouter.get("/:aircraftid", async (req, res, next) => {
  try {
    //jwt verification
    const isValid = await verifyJwtFromCookie(req);
    if (isValid === false) {
      const err = new Error("invalid token");
      err.status = 403;
      throw err;
    }
    //
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
