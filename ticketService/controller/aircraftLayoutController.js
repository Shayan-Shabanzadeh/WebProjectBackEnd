const express = require("express");
const AirCraftService = require("../service/airCraftLayoutService");
const AircraftLayoutRouter = express.Router();
const Utils = require("../utils/utils");

AircraftLayoutRouter.get("/:type_id", async (req, res, next) => {
  try {

    // get a transaction from bank
    const response = await Utils.getTransactionWithId(1);
    console.log(response);

    //
    const result = await AirCraftService.getAirCraftLayoutByLayoutId(
      req.params.type_id
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
